const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const company = document.getElementById("company").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Please complete the required fields.";
      formStatus.style.color = "#fca5a5";
      return;
    }

    const subject = encodeURIComponent(`Migration Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\n\nProject Requirements:\n${message}`
    );

    window.location.href = `mailto:contact@psyaara.com?subject=${subject}&body=${body}`;
    formStatus.textContent = "Your email app has been opened. Please send the message to complete your inquiry.";
    formStatus.style.color = "#bbf7d0";
    contactForm.reset();
  });
}
