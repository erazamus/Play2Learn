    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function(e) {
      e.preventDefault(); // stop page refresh

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Basic validation
      if (!name || !email || !message) {
        formMessage.textContent = "⚠️ Please fill in all fields.";
        formMessage.style.color = "red";
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        formMessage.textContent = "⚠️ Please enter a valid email.";
        formMessage.style.color = "red";
        return;
      }

      // Show success (in real case, send data to server here)
      formMessage.textContent = "✅ Thank you! Your message has been sent.";
      formMessage.style.color = "green";

      // Reset form
      form.reset();
    });