-- Fix the RLS policy for quotes table to allow anonymous inserts
DROP POLICY IF EXISTS "Anyone can create quotes" ON public.quotes;

CREATE POLICY "Anyone can create quotes" 
ON public.quotes 
FOR INSERT 
TO public
WITH CHECK (true);