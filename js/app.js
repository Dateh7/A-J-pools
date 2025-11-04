document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navOverlay = document.getElementById('nav-overlay');

  if (hamburger && navLinks) {
    const toggleNav = force => {
      const isOpen = typeof force === 'boolean' ? force : !navLinks.classList.contains('active');
      navLinks.classList.toggle('active', isOpen);
      navLinks.setAttribute('aria-hidden', (!isOpen).toString());
      hamburger.setAttribute('aria-expanded', isOpen.toString());
      body.classList.toggle('mobile-nav-open', isOpen);
      if (navOverlay) {
        navOverlay.classList.toggle('is-open', isOpen);
      }
    };

    toggleNav(false);

    hamburger.addEventListener('click', () => toggleNav());

    if (navOverlay) {
      navOverlay.addEventListener('click', () => toggleNav(false));
    }

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleNav(false));
    });

    document.addEventListener('keydown', evt => {
      if (evt.key === 'Escape') {
        toggleNav(false);
      }
    });
  }

  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' }
      })
        .then(r => {
          if (r.ok) {
            if (successMsg) {
              successMsg.style.display = 'block';
            }
            form.reset();
          } else {
            alert('Something went wrong. Please try again.');
          }
        })
        .catch(err => {
          console.error(err);
          alert('There was a problem sending your message.');
        });
    });
  }

  document.querySelectorAll('.faq-item').forEach((item, index) => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    const answerId = answer.id || `faq-answer-${index + 1}`;
    answer.id = answerId;
    btn.setAttribute('aria-controls', answerId);
    btn.setAttribute('aria-expanded', 'false');
    answer.setAttribute('aria-hidden', 'true');

    btn.addEventListener('click', () => {
      const isOpen = !btn.classList.contains('active');
      btn.classList.toggle('active', isOpen);
      btn.setAttribute('aria-expanded', isOpen.toString());
      answer.classList.toggle('open', isOpen);
      answer.setAttribute('aria-hidden', (!isOpen).toString());
      if (isOpen) {
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
});
