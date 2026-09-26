// Lucide icons, vendored locally under ISC. See static/icons/LICENSE.
const icons = {
  phone:
    '<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />',
  arrow: '<path d="M5 12h14" />\n  <path d="m12 5 7 7-7 7" />',
  upRight: '<path d="M7 7h10v10" />\n  <path d="M7 17 17 7" />',
  car: '<path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />\n  <path d="M7 14h.01" />\n  <path d="M17 14h.01" />\n  <rect width="18" height="8" x="3" y="10" rx="2" />\n  <path d="M5 18v2" />\n  <path d="M19 18v2" />',
  shield:
    '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />\n  <path d="m9 12 2 2 4-4" />',
  exchange:
    '<path d="m16 3 4 4-4 4" />\n  <path d="M20 7H4" />\n  <path d="m8 21-4-4 4-4" />\n  <path d="M4 17h16" />',
  wallet:
    '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />\n  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />',
  search: '<path d="m21 21-4.34-4.34" />\n  <circle cx="11" cy="11" r="8" />',
  pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />\n  <circle cx="12" cy="10" r="3" />',
  clock: '<circle cx="12" cy="12" r="10" />\n  <path d="M12 6v6l4 2" />',
  check: '<path d="M20 6 9 17l-5-5" />',
  menu: '<path d="M4 5h16" />\n  <path d="M4 12h16" />\n  <path d="M4 19h16" />',
  telegram:
    '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />\n  <path d="m21.854 2.147-10.94 10.939" />',
  max: '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /><path d="M8 12h.01M12 12h.01M16 12h.01" />',
  plus: '<path d="M5 12h14" />\n  <path d="M12 5v14" />',
  settings:
    '<path d="M10 5H3" />\n  <path d="M12 19H3" />\n  <path d="M14 3v4" />\n  <path d="M16 17v4" />\n  <path d="M21 12h-9" />\n  <path d="M21 19h-5" />\n  <path d="M21 5h-7" />\n  <path d="M8 10v4" />\n  <path d="M8 12H3" />',
  eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />\n  <circle cx="12" cy="12" r="3" />',
  close: '<path d="M18 6 6 18" />\n  <path d="m6 6 12 12" />',
  left: '<path d="m12 19-7-7 7-7" />\n  <path d="M19 12H5" />',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />',
  trash:
    '<path d="M10 11v6" />\n  <path d="M14 11v6" />\n  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />\n  <path d="M3 6h18" />\n  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />',
};
const icon = (name) =>
  `<svg class="lucide-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${icons[name] || icons.car}</svg>`;
const esc = (text) =>
  String(text ?? "")
    .replace(/\u0451/g, "е")
    .replace(/\u0401/g, "Е")
    .replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
const money = (value) =>
  typeof value === "number"
    ? new Intl.NumberFormat("ru-RU").format(value) + " ₽"
    : "Цена по запросу";
const number = (value) => new Intl.NumberFormat("ru-RU").format(value);
const app = document.querySelector("#app");
let user = null,
  site = {},
  definitions = [],
  cars = [],
  nextOffset = null,
  total = 0,
  currentStatus = "sale";
let gallery = [],
  galleryIndex = 0,
  editor = null,
  saveTimer = null,
  savePromise = null,
  editGeneration = 0,
  savedGeneration = 0,
  saveFailed = false;
const isStaff = () => !!user;
const isAdmin = () => user?.role === "admin";
const valueOf = (car, key) => car.values.find((v) => v.key === key)?.value;
const displayValue = (v) =>
  typeof v.value === "boolean"
    ? v.value
      ? "Да"
      : "Нет"
    : typeof v.value === "number" && v.key !== "year"
      ? number(v.value)
      : String(v.value);
const mainPhoto = (car) => car.photos.find((p) => p.main) || car.photos[0];
function renderIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((el) => {
    el.innerHTML = icon(el.dataset.icon);
  });
}
function csrf() {
  return (
    document.cookie
      .split("; ")
      .find((x) => x.startsWith("csrftoken="))
      ?.split("=")[1] || ""
  );
}
async function api(path) {
          const url = new URL(path, 'https://static.invalid/');
          if (url.pathname === '/site/') return PUBLIC_DATA.site;
          if (url.pathname === '/session/') return {user:null};
          if (/^\/cars\/\d+\/$/.test(url.pathname)) {
            const car = PUBLIC_DATA.cars.find(c => c.id === Number(url.pathname.split('/')[2]));
            if (!car) throw new Error('Автомобиль не найден');
            return car;
          }
          if (url.pathname === '/cars/') {
            const p = url.searchParams;
            const items = PUBLIC_DATA.cars.filter(c => {
              const price = valueOf(c, 'price');
              return (!p.get('brand') || valueOf(c,'brand') === p.get('brand')) &&
                (!p.get('body') || valueOf(c,'body') === p.get('body')) &&
                (!p.get('price_min') || typeof price === 'number' && price >= Number(p.get('price_min'))) &&
                (!p.get('price_max') || typeof price === 'number' && price <= Number(p.get('price_max')));
            });
            const offset = Number(p.get('offset') || 0);
            return {items:items.slice(offset,offset+4),total:items.length,next:offset+4<items.length?offset+4:null,
              brands:[...new Set(PUBLIC_DATA.cars.map(c=>valueOf(c,'brand')).filter(Boolean))].sort()};
          }
          throw new Error('В статической версии это действие недоступно');
        }
        function toast(message, error = false) {
  const node = document.querySelector("#toast");
  node.textContent = message;
  node.className = "visible" + (error ? " error" : "");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => (node.className = ""), 5000);
}
function contacts(compact = false) {
  const phone = site.phone?.replace(/[^+\d]/g, "") || "+79619245710";
  return `<a class="button ${compact ? "small" : ""}" href="tel:${esc(phone)}">${icon("phone")} Позвонить</a>${site.telegram ? `<a class="button secondary messenger" aria-label="Написать в Telegram" href="https://t.me/${esc(site.telegram.replace("@", ""))}" target="_blank" rel="noopener">${icon("telegram")}<span>Telegram</span></a>` : ""}${site.max_url ? `<a class="button secondary messenger" aria-label="Написать в MAX" href="${esc(site.max_url)}" target="_blank" rel="noopener">${icon("max")}<span>MAX</span></a>` : `<button class="button secondary messenger" type="button" disabled title="Ссылка на профиль MAX пока не добавлена" aria-label="MAX — ссылка пока не добавлена">${icon("max")}<span>MAX</span></button>`}`;
}
function staffBar() {
  const node = document.querySelector("#staff-bar");
  if (!user) {
    node.innerHTML = "";
    return;
  }
  node.innerHTML = `<div class="container staff-inner"><span class="staff-identity"><i></i>${esc(user.name)} <small>${isAdmin() ? "Администратор" : "Менеджер"}</small></span><div><a href="/staff/">Мои автомобили</a><button id="new-car">${icon("plus")} Добавить авто</button>${isAdmin() ? '<a href="/staff/settings/">Настройки</a>' : ""}<button id="logout">Выйти</button></div></div>`;
  node.querySelector("#new-car").onclick = createCar;
  node.querySelector("#logout").onclick = async () => {
    try {
      await api("logout/", { method: "POST" });
      location.href = "/";
    } catch (e) {
      toast(e.message, true);
    }
  };
}
async function createCar() {
  try {
    const car = await api("cars/", { method: "POST" });
    location.href = `/staff/cars/${car.id}/edit/`;
  } catch (e) {
    toast(e.message, true);
  }
}
function servicesMarkup() {
  const symbol = ["car", "exchange", "wallet", "shield"];
  return site.services
    .map(
      (s, i) =>
        `<a class="service" href="#contacts"><span class="service-icon">${icon(symbol[i % 4])}</span><div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div>${icon("upRight")}</a>`,
    )
    .join("");
}
function home() {
  app.innerHTML = `<section class="hero hero--scene"><div class="container hero-media-frame"><div class="hero-media"><img class="hero-scene" src="./static_images_hero-scene-v2.png" alt="Зеленый автомобиль на светлой площадке на фоне города и фирменных диагоналей" fetchpriority="high"></div></div><div class="container hero-inner"><div class="hero-copy"><h1>Надежные автомобили<br>с пробегом</h1><p class="hero-subtitle">Для жизни и движения вперед</p><p>${esc(site.hero_text)}</p><div class="hero-actions"><a class="button" href="#catalog">Смотреть автомобили</a><a class="button secondary" href="#contacts">Обсудить trade-in</a></div></div></div></section>
  <section class="container services" id="services">${servicesMarkup()}</section>
  <section class="catalog-section" id="catalog"><div class="container"><div class="section-heading"><div><h2>Автомобили<span class="count" id="car-count"></span></h2></div><span class="section-note">Каждый автомобиль —<br>начало новой истории</span></div>
<form id="filters" class="filter-panel"><label><span>Марка автомобиля</span><select name="brand" id="brand-filter"><option value="">Все марки</option></select></label><label><span>Тип кузова</span><select name="body"><option value="">Любой кузов</option><option>Седан</option><option>Лифтбек</option><option>Кроссовер</option><option>Хэтчбек</option></select></label><fieldset class="budget-filter"><legend>Бюджет, ₽</legend><div class="budget-fields"><label><span>От</span><input id="price-min" name="price_min" type="number" min="0" max="1000000000000" step="1" inputmode="numeric" placeholder="Любая" aria-label="Бюджет от"></label><label><span>До</span><input id="price-max" name="price_max" type="number" min="0" max="1000000000000" step="1" inputmode="numeric" placeholder="Любая" aria-label="Бюджет до"></label></div><div class="budget-slider"><span class="budget-track"></span><input id="budget-min-range" type="range" min="0" max="10000000" step="50000" value="0" aria-label="Минимальная цена"><input id="budget-max-range" type="range" min="0" max="10000000" step="50000" value="10000000" aria-label="Максимальная цена"></div></fieldset><button class="button" type="submit">${icon("search")} Найти автомобиль</button><button class="filter-reset" type="reset">Сбросить фильтры</button></form>
  <div class="catalog-meta"><span id="results-label">Загружаем автомобили…</span><span>Сначала новые поступления ${icon("arrow")}</span></div><div id="car-list" class="car-list"></div><div class="load-more-wrap"><button id="load-more" class="button secondary" hidden>Показать еще ${icon("plus")}</button></div><p class="demo-note">Демонстрационная витрина · цены и характеристики приведены для примера</p></div></section>
  <section class="container buyout-banner"><div><h2>Ваш автомобиль может стать<br>первым шагом к новому.</h2><p>Обсудим выкуп или обмен. Просто свяжитесь с Дмитрием.</p><a class="button" href="tel:${esc(site.phone.replace(/[^+\d]/g, ""))}">Обсудить мой автомобиль ${icon("upRight")}</a></div><div class="banner-art">${icon("exchange")}<span>TRADE<br><em>IN.</em></span></div></section>
  <section class="container contact-section" id="contacts"><div><h2>Хороший автомобиль.<br>Живой разговор.</h2><p>Расскажите, какой автомобиль ищете.<br>Поможем разобраться и договоримся о встрече.</p><div class="contact-actions">${contacts()}</div></div><div class="contact-card"><span class="contact-monogram">ДК</span><div><small>Ваш контакт в DK-AUTO</small><h3>${esc(site.contact_name)}</h3><a href="tel:${esc(site.phone.replace(/[^+\d]/g, ""))}">${esc(site.phone)}</a></div><div class="contact-info">${icon("clock")}<span>${esc(site.hours)}</span></div><div class="contact-info">${icon("pin")}<span>${esc(site.address || "Адрес площадки уточняйте по телефону")}</span></div></div></section>`;
  if (site.hero_title !== "Ваш следующий автомобиль. Уже здесь.")
    app.querySelector("h1").textContent = site.hero_title;
  document.querySelector("#filters").onsubmit = (e) => {
    e.preventDefault();
    loadCars(true);
  };
  document.querySelector("#filters").onreset = () =>
    setTimeout(() => {
      syncBudget();
      loadCars(true);
    }, 0);
  initBudget();
  document.querySelector("#load-more").onclick = () => loadCars(false);
  currentStatus = "sale";
  loadCars(true);
}
function syncBudget() {
  const low = document.querySelector("#price-min");
  const high = document.querySelector("#price-max");
  const a = document.querySelector("#budget-min-range");
  const b = document.querySelector("#budget-max-range");
  const ceiling = Math.max(
    10000000,
    Math.ceil(Math.max(Number(low.value), Number(high.value)) / 1000000) *
      1000000,
  );
  a.max = b.max = ceiling;
  a.value = low.value || 0;
  b.value = high.value || ceiling;
  const crossed =
    low.value !== "" &&
    high.value !== "" &&
    Number(low.value) > Number(high.value);
  high.setCustomValidity(
    crossed ? "Цена до должна быть не меньше цены от" : "",
  );
  const track = document.querySelector(".budget-slider");
  track.style.setProperty(
    "--budget-from",
    `${(Number(a.value) / ceiling) * 100}%`,
  );
  track.style.setProperty(
    "--budget-to",
    `${(Number(b.value) / ceiling) * 100}%`,
  );
  a.setAttribute("aria-valuetext", money(Number(a.value)));
  b.setAttribute(
    "aria-valuetext",
    high.value === "" ? "Без ограничения" : money(Number(b.value)),
  );
}
function initBudget() {
  const low = document.querySelector("#price-min");
  const high = document.querySelector("#price-max");
  const a = document.querySelector("#budget-min-range");
  const b = document.querySelector("#budget-max-range");
  low.oninput = high.oninput = syncBudget;
  a.oninput = () => {
    low.value = Math.min(Number(a.value), Number(b.value));
    syncBudget();
  };
  b.oninput = () => {
    high.value = Math.max(Number(a.value), Number(b.value));
    syncBudget();
  };
  syncBudget();
}
function card(car) {
  const photo = mainPhoto(car);
  const specs = ["year", "mileage", "engine", "transmission", "drive"]
    .map((k) => {
      const v = car.values.find((v) => v.key === k);
      if (!v || v.value === "") return "";
      return `<div><small>${esc(v.name)}</small><strong>${esc(displayValue(v))}${v.unit ? " " + esc(v.unit) : ""}</strong></div>`;
    })
    .join("");
  return `<article class="car-card"><a class="car-image" href="${car.url}">${photo ? `<img src="${photo.thumb}" alt="${esc(car.title)}" loading="lazy">` : `<div class="photo-placeholder">${icon("car")}</div>`}<span class="photo-count">${car.photos.length} фото</span>${isStaff() ? `<span class="status-badge ${car.status}">${statusName(car.status)}</span>` : ""}</a><div class="car-info"><a class="car-title" href="${car.url}">${esc(car.title || "Новый автомобиль")}</a><strong class="car-price">${money(valueOf(car, "price"))}</strong><div class="car-specs">${specs}</div><p class="car-description">${esc(car.description || "Описание пока не добавлено")}</p><div class="car-card-bottom"><a class="detail-link" href="${car.url}">Подробнее ${icon("arrow")}</a></div>${isStaff() ? `<div class="card-staff-actions"><a href="/staff/cars/${car.id}/edit/">Редактировать</a><button data-archive="${car.id}" data-action="${car.status === "archive" ? "restore" : "archive"}">${car.status === "archive" ? "Вернуть в продажу" : "В архив"}</button></div>` : ""}</div></article>`;
}
const statusName = (status) =>
  ({ sale: "В продаже", draft: "Черновик", archive: "В архиве" })[status];
async function loadCars(reset) {
  const list = document.querySelector("#car-list");
  if (!list) return;
  const params = new URLSearchParams(
    document.querySelector("#filters")
      ? new FormData(document.querySelector("#filters"))
      : [],
  );
  params.set("status", currentStatus);
  params.set("offset", reset ? 0 : nextOffset || 0);
  const button = document.querySelector("#load-more");
  button.disabled = true;
  try {
    const data = await api("cars/?" + params);
    cars = reset ? data.items : [...cars, ...data.items];
    nextOffset = data.next;
    total = data.total;
    list.innerHTML = cars.length
      ? cars.map(card).join("")
      : `<div class="empty-state small-empty">${icon("car")}<h3>${isStaff() ? "Здесь пока нет автомобилей" : "Таких автомобилей пока нет"}</h3><p>${isStaff() ? "Добавьте автомобиль или выберите другой раздел." : "Измените фильтры или позвоните — обсудим другие варианты."}</p></div>`;
    button.hidden = nextOffset === null;
    document.querySelector("#results-label").textContent =
      `${total} ${total === 1 ? "автомобиль" : total >= 2 && total <= 4 ? "автомобиля" : "автомобилей"} · показано ${cars.length}`;
    const count = document.querySelector("#car-count");
    if (count) count.textContent = total;
    const brands = document.querySelector("#brand-filter");
    if (brands && brands.options.length === 1)
      data.brands.forEach((b) => brands.add(new Option(b, b)));
    list.querySelectorAll("[data-archive]").forEach(
      (b) =>
        (b.onclick = async () => {
          try {
            await api(`cars/${b.dataset.archive}/${b.dataset.action}/`, {
              method: "POST",
            });
            loadCars(true);
          } catch (e) {
            toast(e.message, true);
          }
        }),
    );
  } catch (e) {
    list.innerHTML = `<div class="empty-state"><h3>Не удалось загрузить каталог</h3><p>${esc(e.message)}</p><button class="button" id="retry-catalog">Повторить</button></div>`;
    list.querySelector("#retry-catalog").onclick = () => loadCars(true);
  } finally {
    button.disabled = false;
  }
}
async function detail(id) {
  try {
    const initial = document.querySelector("#initial-car");
    const car = initial
      ? JSON.parse(initial.textContent)
      : await api(`cars/${id}/`);
    gallery = car.photos;
    galleryIndex = Math.max(
      0,
      gallery.findIndex((p) => p.main),
    );
    app.innerHTML = `<section class="container detail-page"><a class="back-link" href="./#catalog">${icon("arrow")} Все автомобили</a><div class="detail-heading"><div><h1>${esc(car.title)}</h1></div></div><div class="detail-grid"><div><div class="gallery-main">${gallery.length ? `<button id="open-gallery" aria-label="Открыть фотографии"><img id="gallery-photo" src="${gallery[galleryIndex].url}" alt="${esc(car.title)}"><span>${icon("eye")} Посмотреть фотографии</span></button>` : `<div class="photo-placeholder">${icon("car")}<span>Фотографии пока не добавлены</span></div>`}</div><div class="gallery-thumbs">${gallery.map((p, i) => `<button data-gallery="${i}" class="${i === galleryIndex ? "active" : ""}" aria-label="Фотография ${i + 1}"><img src="${p.thumb}" alt="${esc(car.title)} — фото ${i + 1}"></button>`).join("")}</div><section class="detail-block"><h2>Об автомобиле</h2><p class="multiline">${esc(car.description || "Описание пока не добавлено.")}</p></section>${car.videos.length ? `<section class="detail-block"><h2>Видеообзор</h2>${car.videos.map((v) => `<iframe class="video-frame" src="${esc(v.embed_url)}" title="Видеообзор ${esc(car.title)}" loading="lazy" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`).join("")}</section>` : ""}</div><aside><div class="detail-summary"><strong class="detail-price">${money(valueOf(car, "price"))}</strong><div class="detail-contact"><p>Заинтересовал автомобиль?</p><span>Дмитрий ответит на ваши вопросы</span><div>${contacts(true)}</div></div><h3>Характеристики</h3><dl class="spec-table">${car.values
      .filter((v) => v.key !== "price" && v.value !== "" && v.value !== null)
      .map(
        (v) =>
          `<div><dt>${esc(v.name)}${!v.public ? '<span class="private-label">Внутреннее</span>' : ""}</dt><dd>${esc(displayValue(v))} ${esc(v.unit)}</dd></div>`,
      )
      .join(
        "",
      )}</dl>${isStaff() ? `<div class="detail-staff"><a class="button secondary" href="/staff/cars/${car.id}/edit/">Редактировать автомобиль</a><button class="button secondary" id="generate-pdf">Создать QR-ценник</button></div>` : ""}</div></aside></div></section><div class="mobile-contact-bar">${contacts(true)}</div>`;
    document.querySelectorAll("[data-gallery]").forEach(
      (b) =>
        (b.onclick = () => {
          galleryIndex = Number(b.dataset.gallery);
          document.querySelector("#gallery-photo").src =
            gallery[galleryIndex].url;
          document
            .querySelectorAll("[data-gallery]")
            .forEach((x) => x.classList.toggle("active", x === b));
        }),
    );
    const open = document.querySelector("#open-gallery");
    if (open) open.onclick = () => openLightbox(galleryIndex);
    const pdf = document.querySelector("#generate-pdf");
    if (pdf) pdf.onclick = () => generatePdf(car.id, pdf);
  } catch (e) {
    app.innerHTML = `<section class="container empty-state"><h1>${esc(e.message)}</h1><a class="button" href="./#catalog">Посмотреть автомобили</a></section>`;
  }
}
function openLightbox(index) {
  galleryIndex = index;
  const dialog = document.querySelector("#lightbox");
  updateLightbox();
  dialog.showModal();
}
function updateLightbox() {
  const p = gallery[galleryIndex];
  if (!p) return;
  document.querySelector("#lightbox img").src = p.url;
  document.querySelector(".lightbox-counter").textContent =
    `${galleryIndex + 1} / ${gallery.length}`;
}
document.querySelector(".lightbox-close").onclick = () =>
  document.querySelector("#lightbox").close();
document.querySelector(".lightbox-prev").onclick = () => {
  galleryIndex = (galleryIndex - 1 + gallery.length) % gallery.length;
  updateLightbox();
};
document.querySelector(".lightbox-next").onclick = () => {
  galleryIndex = (galleryIndex + 1) % gallery.length;
  updateLightbox();
};
document.querySelector("#lightbox").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) e.currentTarget.close();
});
document.addEventListener("keydown", (e) => {
  if (!document.querySelector("#lightbox").open) return;
  if (e.key === "ArrowRight") document.querySelector(".lightbox-next").click();
  if (e.key === "ArrowLeft") document.querySelector(".lightbox-prev").click();
});

        async function initStatic() {
          site=PUBLIC_DATA.site; user=null; renderIcons();
          document.querySelector('.menu-toggle').onclick = e => {
            const nav=document.querySelector('.mobile-nav'); nav.hidden=!nav.hidden;
            e.currentTarget.setAttribute('aria-expanded',String(!nav.hidden));
          };
          const id=new URLSearchParams(location.search).get('car');
          if(id) await detail(Number(id)); else home();
          renderIcons();
          if(location.hash) requestAnimationFrame(()=>document.querySelector(location.hash)?.scrollIntoView());
        }
        initStatic();
        