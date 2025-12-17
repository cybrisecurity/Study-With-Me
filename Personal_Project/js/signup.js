const supabase = supabase.createClient("https://fnzkhfcimqpuoqslozho.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuemtoZmNpbXFwdW9xc2xvemhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NDAxMzcsImV4cCI6MjA4MTIxNjEzN30.kwEPC8EnmVJ9LnV-L8rkeIfjbF3j4HBCgWDhnDFUzpE");

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;

    // 1. this should sign up the user
    const { user, session, error: signupError } = await supabase.auth.signUp({
      email,
      password
    });
    if (signupError) {
      console.error("Signup error:", signupError);
      alert("Signup failed: " + signupError.message);
      return;
    }

    // 2. this should insert profile after user exists
    const { data, error: profileError } = await supabase
      .from('profiles')
      .insert([{ id: user.id, fullname: fullname, username: username }]);

    if (profileError) {
      console.error("Profile insert error:", profileError);
      alert("Profile creation failed: " + profileError.message);
      return;
    }

    console.log("Signup + profile success!", data);
    alert("Account created successfully!");
  });
});
