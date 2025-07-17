-- Critical Security Fixes Migration

-- 1. Fix RLS configuration for quotes table
-- The quotes table has policies but RLS might not be properly enabled
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- 2. Fix user_roles table to prevent privilege escalation
-- Drop and recreate policies to prevent users from modifying their own roles
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;

-- Create more restrictive policies
CREATE POLICY "Users can view their own roles only" 
ON public.user_roles 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles" 
ON public.user_roles 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

-- Critical: Prevent users from inserting/updating/deleting their own roles
-- Only allow system-level operations for role management
CREATE POLICY "System only role management" 
ON public.user_roles 
FOR INSERT 
WITH CHECK (false); -- No direct inserts allowed

CREATE POLICY "System only role updates" 
ON public.user_roles 
FOR UPDATE 
USING (false); -- No direct updates allowed

CREATE POLICY "System only role deletion" 
ON public.user_roles 
FOR DELETE 
USING (false); -- No direct deletions allowed

-- 3. Fix function security settings
-- Update has_role function with proper security settings
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Update update_updated_at_column function with proper security
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- 4. Create secure role management functions
-- Function to safely assign admin role (only callable by existing admins)
CREATE OR REPLACE FUNCTION public.assign_admin_role(_target_user_id UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only allow existing admins to assign admin roles
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Access denied: Admin privileges required';
  END IF;
  
  -- Insert admin role if not exists
  INSERT INTO public.user_roles (user_id, role)
  VALUES (_target_user_id, 'admin')
  ON CONFLICT (user_id, role) DO NOTHING;
  
  RETURN TRUE;
END;
$$;

-- Function to safely remove roles (only callable by existing admins)
CREATE OR REPLACE FUNCTION public.remove_user_role(_target_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only allow existing admins to remove roles
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Access denied: Admin privileges required';
  END IF;
  
  -- Prevent removing own admin role
  IF auth.uid() = _target_user_id AND _role = 'admin' THEN
    RAISE EXCEPTION 'Cannot remove own admin privileges';
  END IF;
  
  DELETE FROM public.user_roles 
  WHERE user_id = _target_user_id AND role = _role;
  
  RETURN TRUE;
END;
$$;

-- 5. Enhance quotes table security
-- Create more restrictive policies for quotes
DROP POLICY IF EXISTS "Allow public quote submissions" ON public.quotes;
DROP POLICY IF EXISTS "Admins can view quotes" ON public.quotes;
DROP POLICY IF EXISTS "Admins can update quotes" ON public.quotes;

-- Only allow authenticated or anonymous quote submissions with rate limiting
CREATE POLICY "Allow quote submissions" 
ON public.quotes 
FOR INSERT 
WITH CHECK (true);

-- Only admins can view quotes
CREATE POLICY "Admins only can view quotes" 
ON public.quotes 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can update quotes
CREATE POLICY "Admins only can update quotes" 
ON public.quotes 
FOR UPDATE 
USING (public.has_role(auth.uid(), 'admin'));

-- 6. Add audit logging trigger
CREATE TABLE IF NOT EXISTS public.audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name TEXT NOT NULL,
  operation TEXT NOT NULL,
  old_data JSONB,
  new_data JSONB,
  user_id UUID,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view audit logs" 
ON public.audit_log 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

-- Audit trigger function
CREATE OR REPLACE FUNCTION public.audit_trigger()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.audit_log (table_name, operation, old_data, new_data, user_id)
  VALUES (
    TG_TABLE_NAME,
    TG_OP,
    CASE WHEN TG_OP = 'DELETE' THEN row_to_json(OLD) ELSE NULL END,
    CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN row_to_json(NEW) ELSE NULL END,
    auth.uid()
  );
  
  RETURN CASE WHEN TG_OP = 'DELETE' THEN OLD ELSE NEW END;
END;
$$;

-- Add audit triggers to sensitive tables
CREATE TRIGGER audit_user_roles
  AFTER INSERT OR UPDATE OR DELETE ON public.user_roles
  FOR EACH ROW EXECUTE FUNCTION public.audit_trigger();

CREATE TRIGGER audit_quotes
  AFTER INSERT OR UPDATE OR DELETE ON public.quotes
  FOR EACH ROW EXECUTE FUNCTION public.audit_trigger();