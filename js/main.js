// Zarnethub · interaksi kecil: menu HP, header, tombol jasa & form → WhatsApp, tombol WA melayang.
(function () {
  var WA_NUMBER = '6289531295151';
  var waUrl = function (text) { return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text); };

  // Menu HP
  var menuBtn = document.querySelector('.menu-btn');
  var mobileNav = document.getElementById('mobile-nav');
  function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu');
    mobileNav.hidden = !open;
  }
  menuBtn.addEventListener('click', function () { setMenu(mobileNav.hidden); });
  mobileNav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menuBtn.focus(); } });

  // Garis header & tombol WA melayang muncul setelah hero
  var head = document.querySelector('.site-head');
  var fab = document.getElementById('fab');
  var hero = document.querySelector('.hero');
  function onScroll() {
    var y = window.scrollY;
    head.classList.toggle('scrolled', y > 8);
    var pastHero = y > hero.offsetTop + hero.offsetHeight - 200;
    var nearContact = document.getElementById('kontak').getBoundingClientRect().top < window.innerHeight * 0.6;
    fab.dataset.hidden = String(!pastHero || nearContact);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Tombol "Tanya paket ini" → pesan WA terisi
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    a.href = waUrl('Halo Zarnethub, saya mau tanya soal paket ' + a.dataset.wa + '.');
    a.target = '_blank';
    a.rel = 'noopener';
  });

  // Form brief → WhatsApp
  var form = document.getElementById('brief');
  var done = document.getElementById('form-done');
  var waLink = document.getElementById('wa-link');
  function setError(id, msg) {
    var input = document.getElementById('f-' + id);
    document.getElementById('e-' + id).textContent = msg;
    input.closest('.field').classList.toggle('invalid', !!msg);
    if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
    return !msg;
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nama = form.nama.value.trim();
    var butuh = form.butuh.value;
    var cerita = form.cerita.value.trim();
    var ok = setError('nama', nama ? '' : 'Isi nama dulu ya.');
    ok = setError('butuh', butuh ? '' : 'Pilih kebutuhanmu.') && ok;
    if (!ok) { (nama ? form.butuh : form.nama).focus(); return; }
    var text = 'Halo Zarnethub, saya ' + nama + '.\nKebutuhan: ' + butuh + (cerita ? '\nCerita singkat: ' + cerita : '');
    var url = waUrl(text);
    waLink.href = url;
    done.hidden = false;
    var win = window.open(url, '_blank', 'noopener');
    if (win) win.opener = null;
  });
  ['nama', 'butuh'].forEach(function (id) {
    document.getElementById('f-' + id).addEventListener('input', function () { setError(id, ''); });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
