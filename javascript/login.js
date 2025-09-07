const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");

    // Toggle forms
    showRegister.addEventListener("click", () => {
      loginForm.classList.add("hidden");
      registerForm.classList.remove("hidden");
    });

    showLogin.addEventListener("click", () => {
      registerForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
    });

    // Handle login
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();
      const msg = document.getElementById("loginMessage");

      if (email && password) {
        msg.textContent = "✅ Logged in successfully!";
        msg.style.color = "green";
      } else {
        msg.textContent = "⚠️ Please fill all fields.";
        msg.style.color = "red";
      }
    });

    // Handle register
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value.trim();
      const msg = document.getElementById("registerMessage");

      if (name && email && password) {
        msg.textContent = "✅ Registered successfully!";
        msg.style.color = "green";
      } else {
        msg.textContent = "⚠️ Please fill all fields.";
        msg.style.color = "red";
      }
    });