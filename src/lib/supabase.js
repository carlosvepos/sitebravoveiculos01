import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://whbfxdpdhjhdmufazqif.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoYmZ4ZHBkaGpoZG11ZmF6cWlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMzQzNjgsImV4cCI6MjA2OTkxMDM2OH0.MydmeGPdjKW6i6Qjex5lLqaMmD2BrEYBo2vVWfQdxBg'

export const supabase = createClient(supabaseUrl, supabaseKey)
