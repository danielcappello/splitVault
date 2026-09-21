/* ============================== SUPABASE CONFIG ==============================
   Fill these in once and both index.html and signup.html will pick them up
   (they both load this file). You'll find both values in your Supabase project
   under Settings -> API:
     - SUPABASE_URL     -> "Project URL"
     - SUPABASE_ANON_KEY -> "anon" "public" key (NOT the service_role key —
       that one must never appear in client-side code)

   Before this works you also need to create the saved_views table and its
   row-level security policies — see SUPABASE_SETUP.md for the exact SQL to run.
================================================================================ */
const SUPABASE_URL = 'https://hhwghaltyoeebexrlbpz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhod2doYWx0eW9lZWJleHJsYnB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5ODMxMzQsImV4cCI6MjEwNTU1OTEzNH0.zbtBy_HGes1cYDyRw1w2nC9h_8sWu9i9Y6wg5OfScEM';
const SUPABASE_CONFIGURED = SUPABASE_URL.indexOf('YOUR_SUPABASE_URL') === -1
  && SUPABASE_ANON_KEY.indexOf('YOUR_SUPABASE_ANON_KEY') === -1
  && SUPABASE_URL.length > 0 && SUPABASE_ANON_KEY.length > 0;
