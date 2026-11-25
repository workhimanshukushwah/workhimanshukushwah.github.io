(function () {
  var site = window.SITE || {};
  document.querySelectorAll('[data-site="name"]').forEach(function (el) { el.textContent = site.name || 'Himanshu Kushwah'; });
  var email = site.email || '';
  document.querySelectorAll('[data-link="email"]').forEach(function (el) { el.href = 'mailto:' + email; el.textContent = email; });
  document.querySelectorAll('[data-link="linkedin"]').forEach(function (el) { el.href = site.linkedin || '#'; });
  var year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
  var button = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  if (button && nav) {
    button.addEventListener('click', function () { var open = nav.classList.toggle('open'); button.setAttribute('aria-expanded', String(open)); });
    nav.addEventListener('click', function (event) { if (event.target.closest('a')) { nav.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); } });
  }
})();
