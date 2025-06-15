// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zkfuyzodvbgfiraryijh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprZnV5em9kdmJnZmlyYXJ5aWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5OTUxNDUsImV4cCI6MjA2NTU3MTE0NX0.6rCzqY5rylZgGBBZSZWR-4pbML3KOemrouPOkWprmek';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
