-- Drop existing policies to recreate them properly
DROP POLICY IF EXISTS "Allow anonymous quote submissions" ON public.quotes;
DROP POLICY IF EXISTS "Enable select for admins" ON public.quotes;
DROP POLICY IF EXISTS "Enable update for admins" ON public.quotes;

-- Create policy to allow anyone to insert quotes (anonymous submissions)
CREATE POLICY "Allow public quote submissions" 
ON public.quotes 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow admins to view all quotes
CREATE POLICY "Admins can view quotes" 
ON public.quotes 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create policy to allow admins to update quotes
CREATE POLICY "Admins can update quotes" 
ON public.quotes 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));