const SUPABASE_URL = 'https://fnzkhfcimqpuoqslozho.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuemtoZmNpbXFwdW9xc2xvemhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NDAxMzcsImV4cCI6MjA4MTIxNjEzN30.kwEPC8EnmVJ9LnV-L8rkeIfjbF3j4HBCgWDhnDFUzpE';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.onload = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        window.location.href = 'dashboard.html';
    }
}