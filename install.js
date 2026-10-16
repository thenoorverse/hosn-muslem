/* نافذة اقتراح تثبيت الموقع كتطبيق (PWA) — تظهر عند زيارة الموقع فقط:
   لا تظهر داخل إطار المعاينة، ولا إذا كان التطبيق مثبتاً مسبقاً */
(function () {
  try {
    if (window.self !== window.top) return; // داخل إطار المعاينة
    var popup = document.getElementById('installPopup');
    var btnInstall = document.getElementById('btnInstall');
    var btnLater = document.getElementById('btnInstallLater');
    var iosHint = document.getElementById('iosHint');
    if (!popup || !btnInstall || !btnLater) return;

    var standalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || navigator.standalone;
    if (standalone) return; // مثبت مسبقاً: لا حاجة للنافذة
    if (sessionStorage.getItem('hisn-install-dismissed')) return;

    var isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    var deferredPrompt = null;

    function show() { popup.classList.remove('hidden'); }
    function hide() { popup.classList.add('hidden'); }

    if (isIOS) {
      // الآيفون لا يدعم beforeinstallprompt: إرشاد يدوي
      if (iosHint) iosHint.classList.remove('hidden');
      btnInstall.textContent = 'كيف أثبّته؟';
      show();
    }

    window.addEventListener('beforeinstallprompt', function (e) {
      e.preventDefault();
      deferredPrompt = e;
      if (iosHint) iosHint.classList.add('hidden');
      btnInstall.textContent = 'تثبيت التطبيق';
      show();
    });

    btnInstall.addEventListener('click', async function () {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        try { await deferredPrompt.userChoice; } catch (err) {}
        deferredPrompt = null;
        hide();
      } else if (iosHint) {
        iosHint.classList.toggle('hidden'); // إظهار/إخفاء إرشادات الآيفون
      }
    });

    btnLater.addEventListener('click', function () {
      try { sessionStorage.setItem('hisn-install-dismissed', '1'); } catch (err) {}
      hide();
    });

    window.addEventListener('appinstalled', function () { hide(); });
  } catch (e) { /* تجاهل بصمت */ }
})();
