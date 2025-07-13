-- Check and fix RLS configuration for quotes table
-- First ensure RLS is enabled
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies and recreate them properly
DROP POLICY IF EXISTS "Anyone can create quotes" ON public.quotes;
DROP POLICY IF EXISTS "Admins can view all quotes" ON public.quotes;  
DROP POLICY IF EXISTS "Admins can update quotes" ON public.quotes;

-- Create proper policies
CREATE POLICY "Enable insert for all users" ON public.quotes
FOR INSERT TO public
WITH CHECK (true);

CREATE POLICY "Enable select for admins" ON public.quotes
FOR SELECT TO public
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Enable update for admins" ON public.quotes
FOR UPDATE TO public
USING (has_role(auth.uid(), 'admin'::app_role));

-- Grant necessary permissions to public role
GRANT INSERT ON public.quotes TO public;
GRANT SELECT ON public.quotes TO public;