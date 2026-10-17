/* حصن المسلم — Service Worker (يعمل فقط على الموقع المنشور، لا في التطوير ولا داخل إطار المعاينة)
   الاستراتيجيات:
   - الصفحات (HTML): الشبكة أولاً (network-first) مع بديل من الكاش عند انقطاع الاتصال
   - الملفات ذات الأسماء المتغيرة (hash مثل app-a1b2c3d4.js أو ?v=): التخزين أولاً (cache-first)
   - باقي الملفات الثابتة: stale-while-revalidate
   - مسارات تسجيل الدخول وروابط OAuth: تُستثنى تماماً (شبكة فقط دون تخزين) */
const VERSION = 'hisn-v5';
const SHELL_CACHE = VERSION + '-shell';
const PAGES_CACHE = VERSION + '-pages';
const ASSETS_CACHE = VERSION + '-assets';

const APP_SHELL = [
  'index.html',
  'quiz.html',
  'style.css',
  'app.js',
  'quiz.js',
  'install.js',
  'register-sw.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable.png',
  'icons/apple-touch-icon.png',
  'hisn-al-muslim.pdf' // الكتاب كاملاً: متاح دون اتصال
];

// مسارات تُستثنى من أي تخزين: تسجيل الدخول / التفويض / OAuth
const EXCLUDED_PATH = /(^|\/)(login|log-in|signin|sign-in|signup|sign-up|register|auth|oauth|authorize|callback|session)(\/|$|[?#])/i;
function isExcluded(url) {
  if (EXCLUDED_PATH.test(url.pathname)) return true;
  const q = url.searchParams;
  if (q.has('code') || q.has('state') || q.has('access_token') || q.has('id_token')) return true; // ردود OAuth
  if (/oauth/i.test(url.pathname + url.search)) return true;
  return false;
}

// الملفات ذات الأسماء المتغيرة (بصمة إصدار في الاسم أو استعلام إصدار)
const HASHED_FILE = /[.-][a-f0-9]{8,}\.[a-z0-9]+$/i;
function isVersioned(url) {
  if (HASHED_FILE.test(url.pathname)) return true;
  const q = url.searchParams;
  if (q.has('v') || q.has('ver') || q.has('version') || q.has('hash') || q.has('_')) return true;
  return false;
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.indexOf('hisn-') === 0 && k !== SHELL_CACHE && k !== PAGES_CACHE && k !== ASSETS_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// تخزين الاستجابة فقط إذا كانت سليمة (يمنع تسميم الكاش بصفحات البوابات والبروكسي)
async function putIfUseful(cache, request, response) {
  try {
    if (!response || !response.ok) return null;
    const buf = await response.arrayBuffer();
    if (!buf.byteLength) return null;
    const copy = new Response(buf, { status: response.status, statusText: response.statusText, headers: response.headers });
    await cache.put(request, copy.clone());
    return copy;
  } catch (err) { return null; }
}

async function networkFirst(request) {
  const cache = await caches.open(PAGES_CACHE);
  try {
    const fresh = await fetch(request);
    const ctype = (fresh.headers.get('content-type') || '').toLowerCase();
    if (!fresh.ok || ctype.indexOf('text/html') === -1) throw new Error('bad-gateway');
    const good = await putIfUseful(cache, request, fresh);
    if (!good) throw new Error('empty-response');
    return good;
  } catch (err) {
    const cached = await caches.match(request);
    return cached || caches.match('index.html');
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(ASSETS_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const fresh = await fetch(request);
    const good = await putIfUseful(cache, request, fresh);
    if (good) return good;
  } catch (err) {}
  return Response.error();
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(ASSETS_CACHE);
  const cached = await cache.match(request);
  const updating = fetch(request)
    .then((fresh) => putIfUseful(cache, request, fresh))
    .catch(() => null);
  if (cached) { updating.catch(() => null); return cached; }
  const fresh = await updating;
  return fresh || caches.match('index.html');
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // نطاقات خارجية: تُترك للمتصفح
  if (isExcluded(url)) return; // تسجيل الدخول وOAuth: شبكة فقط
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(networkFirst(request)); // الصفحات: الشبكة أولاً
    return;
  }
  if (isVersioned(url)) {
    event.respondWith(cacheFirst(request)); // أسماء متغيرة: التخزين أولاً
    return;
  }
  event.respondWith(staleWhileRevalidate(request));
});
