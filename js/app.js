document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        successMsg.style.display = 'block';
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    }).catch(error => {
      console.error('There was a problem sending your message:', error);
      alert('There was a problem sending your message.');
    });

  });

  // Hamburger toggle (keep this too)
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('nav ul');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});


// FAQ toggle
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
