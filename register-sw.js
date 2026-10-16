/* تسجيل عامل الخدمة — يعمل فقط على الموقع المنشور:
   لا يُسجَّل في بيئة التطوير (localhost) ولا عبر file:// ولا داخل إطار المعاينة (iframe) */
(function () {
  try {
    if (!('serviceWorker' in navigator)) return;
    if (window.self !== window.top) return; // داخل إطار المعاينة
    var protocol = location.protocol;
    if (protocol !== 'http:' && protocol !== 'https:') return; // file:// وأمثالها
    var host = location.hostname;
    if (host === '' || host === 'localhost' || host === '127.0.0.1' || host === '::1') return; // بيئة التطوير
    if (new URLSearchParams(location.search).get('no-sw') !== null) return; // تعطيل يدوي للاختبار
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js', { scope: './' }).catch(function () {});
    });
  } catch (e) { /* تجاهل بصمت */ }
})();
