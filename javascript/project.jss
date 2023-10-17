document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Basic validation (you can add more complex validation)
        if (name && email && message) {
            // You can send the email here using a server-side language (e.g., Node.js with Nodemailer)
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
