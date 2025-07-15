document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });


  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' }
      }).then(r => {
        if (r.ok) {
          successMsg.style.display = 'block';
          form.reset();
        } else {
          alert('Something went wrong. Please try again.');
        }
      }).catch(err => {
        console.error(err);
        alert('There was a problem sending your message.');
      });
    });
  }


  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      btn.classList.toggle('active');

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

});
