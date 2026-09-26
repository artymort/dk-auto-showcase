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
async function api(path, options = {}) {
  const headers = { "X-CSRFToken": csrf(), ...(options.headers || {}) };
  if (options.body && !(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(options.body);
  }
  const response = await fetch("/api/" + path, {
    ...options,
    headers,
    credentials: "same-origin",
  });
  const data = response.headers
    .get("content-type")
    ?.includes("application/json")
    ? await response.json()
    : { error: "Не удалось выполнить запрос. Обновите страницу и повторите." };
  if (!response.ok)
    throw new Error(data.error || "Не удалось выполнить действие");
  return data;
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
  app.innerHTML = `<section class="hero hero--scene"><div class="container hero-media-frame"><div class="hero-media"><img class="hero-scene" src="/static_images_hero-scene-v2.png" alt="Зеленый автомобиль на светлой площадке на фоне города и фирменных диагоналей" fetchpriority="high"></div></div><div class="container hero-inner"><div class="hero-copy"><h1>Надежные автомобили<br>с пробегом</h1><p class="hero-subtitle">Для жизни и движения вперед</p><p>${esc(site.hero_text)}</p><div class="hero-actions"><a class="button" href="#catalog">Смотреть автомобили</a><a class="button secondary" href="#contacts">Обсудить trade-in</a></div></div></div></section>
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
    app.innerHTML = `<section class="container detail-page"><a class="back-link" href="/#catalog">${icon("arrow")} Все автомобили</a><div class="detail-heading"><div><h1>${esc(car.title)}</h1></div></div><div class="detail-grid"><div><div class="gallery-main">${gallery.length ? `<button id="open-gallery" aria-label="Открыть фотографии"><img id="gallery-photo" src="${gallery[galleryIndex].url}" alt="${esc(car.title)}"><span>${icon("eye")} Посмотреть фотографии</span></button>` : `<div class="photo-placeholder">${icon("car")}<span>Фотографии пока не добавлены</span></div>`}</div><div class="gallery-thumbs">${gallery.map((p, i) => `<button data-gallery="${i}" class="${i === galleryIndex ? "active" : ""}" aria-label="Фотография ${i + 1}"><img src="${p.thumb}" alt="${esc(car.title)} — фото ${i + 1}"></button>`).join("")}</div><section class="detail-block"><h2>Об автомобиле</h2><p class="multiline">${esc(car.description || "Описание пока не добавлено.")}</p></section>${car.videos.length ? `<section class="detail-block"><h2>Видеообзор</h2>${car.videos.map((v) => `<iframe class="video-frame" src="${esc(v.embed_url)}" title="Видеообзор ${esc(car.title)}" loading="lazy" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`).join("")}</section>` : ""}</div><aside><div class="detail-summary"><strong class="detail-price">${money(valueOf(car, "price"))}</strong><div class="detail-contact"><p>Заинтересовал автомобиль?</p><span>Дмитрий ответит на ваши вопросы</span><div>${contacts(true)}</div></div><h3>Характеристики</h3><dl class="spec-table">${car.values
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
    app.innerHTML = `<section class="container empty-state"><h1>${esc(e.message)}</h1><a class="button" href="/#catalog">Посмотреть автомобили</a></section>`;
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
async function generatePdf(id, button) {
  button.disabled = true;
  button.textContent = "Создаем PDF…";
  try {
    const data = await api(`cars/${id}/pdf/`, { method: "POST" });
    const link = document.createElement("a");
    link.href = data.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.click();
    toast("QR-ценник готов");
  } catch (e) {
    toast(e.message, true);
  } finally {
    button.disabled = false;
    button.textContent = "Создать QR-ценник";
  }
}
function loginPage() {
  app.innerHTML = `<section class="login-page container"><div class="login-intro"><h1>Ваша витрина.<br><em>Под вашим управлением.</em></h1><p>Добавляйте автомобили, загружайте фотографии и публикуйте объявления прямо с телефона.</p></div><form class="panel login-form" id="login-form"><span class="form-symbol">${icon("shield")}</span><h2>Вход для сотрудников</h2><p>Используйте учетную запись, выданную администратором.</p><label>Логин<input name="username" autocomplete="username" required></label><label>Пароль<input name="password" type="password" autocomplete="current-password" required></label><p class="form-error" id="login-error" role="alert"></p><button class="button" type="submit">Войти ${icon("arrow")}</button><a class="back-link" href="/">Вернуться на сайт</a></form></section>`;
  document.querySelector("#login-form").onsubmit = async (e) => {
    e.preventDefault();
    const b = e.target.querySelector("button");
    b.disabled = true;
    try {
      await api("login/", {
        method: "POST",
        body: Object.fromEntries(new FormData(e.target)),
      });
      location.href = "/staff/";
    } catch (err) {
      document.querySelector("#login-error").textContent = err.message;
    } finally {
      b.disabled = false;
    }
  };
}
function staffPage() {
  app.innerHTML = `<section class="container staff-page"><div class="section-heading"><div><h1>Ваши автомобили</h1></div><button class="button" id="add-car">${icon("plus")} Добавить авто</button></div><div class="tabs"><button class="active" data-status="sale">В продаже</button><button data-status="draft">Черновики</button><button data-status="archive">Архив</button></div><div class="catalog-meta"><span id="results-label"></span></div><div id="car-list" class="car-list"></div><div class="load-more-wrap"><button id="load-more" class="button secondary" hidden>Показать еще ${icon("plus")}</button></div></section>`;
  document.querySelector("#add-car").onclick = createCar;
  document.querySelectorAll("[data-status]").forEach(
    (b) =>
      (b.onclick = () => {
        currentStatus = b.dataset.status;
        document
          .querySelectorAll("[data-status]")
          .forEach((x) => x.classList.toggle("active", x === b));
        loadCars(true);
      }),
  );
  document.querySelector("#load-more").onclick = () => loadCars(false);
  loadCars(true);
}
function characteristicField(d, v) {
  let input;
  const value = v?.value ?? "";
  if (d.type === "select" || d.type === "boolean") {
    const options =
      d.type === "boolean"
        ? [
            { value: "true", text: "Да" },
            { value: "false", text: "Нет" },
          ]
        : d.options.map((x) => ({ value: x, text: x }));
    input = `<select data-value="${d.id}"><option value="">Не выбрано</option>${options.map((o) => `<option value="${esc(o.value)}" ${String(value) === o.value ? "selected" : ""}>${esc(o.text)}</option>`).join("")}</select>`;
  } else
    input = `<input data-value="${d.id}" type="${d.type === "number" ? "number" : "text"}" ${d.type === "number" ? 'min="0" step="any"' : ""} value="${esc(value)}" placeholder="${esc(d.unit || d.name)}">`;
  return `<div class="characteristic-field" data-definition="${d.id}"><label>${esc(d.name)}${d.required ? '<span class="required">*</span>' : ""}${input}</label><label class="visibility-toggle"><input type="checkbox" data-public="${d.id}" ${v?.public === false ? "" : "checked"}> Показывать покупателю</label>${!d.required ? `<button class="remove-characteristic" data-remove="${d.id}" aria-label="Убрать ${esc(d.name)}">${icon("close")}</button>` : ""}</div>`;
}
async function editPage(id) {
  try {
    const [car, defs] = await Promise.all([
      api(`cars/${id}/`),
      api("characteristics/"),
    ]);
    editor = car;
    definitions = defs.items.filter((x) => x.active);
    const chosen = definitions.filter(
      (d) => d.required || car.values.some((v) => v.id === d.id),
    );
    app.innerHTML = `<section class="container editor-page"><a class="back-link" href="/staff/">${icon("arrow")} К моим автомобилям</a><div class="editor-heading"><div><h1>${car.title ? "Редактирование автомобиля" : "Новый автомобиль"}</h1></div><span id="save-state" class="save-state saved">${icon("check")} Сохранено</span></div><div class="editor-grid"><div><section class="panel"><h2>Основная информация</h2><label>Название автомобиля <span class="required">*</span><input id="car-title" maxlength="160" value="${esc(car.title)}" placeholder="Например, Škoda Octavia RS"></label><label>Описание<textarea id="car-description" rows="6" placeholder="Расскажите о состоянии, комплектации и особенностях автомобиля">${esc(car.description)}</textarea></label></section><section class="panel"><div class="panel-heading"><h2>Фотографии</h2><span>JPEG, PNG, WebP · до 15 МБ</span></div><label class="upload-area">${icon("plus")}<strong>Добавить фотографии</strong><span>С телефона или компьютера</span><input type="file" id="photo-upload" accept="image/jpeg,image/png,image/webp" multiple></label><div id="editor-photos" class="editor-photos"></div></section><section class="panel"><div class="panel-heading"><h2>Характеристики</h2><span>* Обязательны для публикации</span></div><div id="characteristic-fields" class="characteristic-fields">${chosen
      .map((d) =>
        characteristicField(
          d,
          car.values.find((v) => v.id === d.id),
        ),
      )
      .join(
        "",
      )}</div><div class="add-characteristic"><select id="add-definition"><option value="">Добавить характеристику…</option>${definitions
      .filter((d) => !chosen.some((c) => c.id === d.id))
      .map((d) => `<option value="${d.id}">${esc(d.name)}</option>`)
      .join(
        "",
      )}</select><button class="button secondary" id="add-characteristic">${icon("plus")} Добавить</button></div></section><section class="panel"><h2>Видеообзоры</h2><p class="muted">До двух ссылок на YouTube или Rutube. Видео на сервер не загружается.</p><label>Первое видео<input data-video="0" value="${esc(car.videos[0]?.url || "")}" placeholder="https://www.youtube.com/watch?v=…"></label><label>Второе видео<input data-video="1" value="${esc(car.videos[1]?.url || "")}" placeholder="https://rutube.ru/video/…"></label></section></div><aside class="editor-sidebar"><section class="panel"><h3>${statusName(car.status)}</h3><p>Изменения сохраняются автоматически. Публикация доступна после заполнения обязательных полей.</p><button class="button full" id="publish-car">${car.status === "sale" ? "Проверить публикацию" : car.status === "archive" ? "Вернуть в продажу" : "Опубликовать"} ${icon("arrow")}</button><a class="button secondary full" href="${car.url}" id="preview-car">Открыть карточку ${icon("eye")}</a><button class="button secondary full" id="editor-pdf">Создать QR-ценник</button>${car.status !== "archive" ? '<button class="text-button" id="archive-car">Отправить в архив</button>' : ""}${isAdmin() ? '<button class="text-button danger" id="delete-car">Удалить навсегда</button>' : ""}<p id="editor-error" class="form-error" role="alert"></p></section><div class="editor-tip">${icon("shield")}<p>Внутренние характеристики видны только сотрудникам. Проверяйте переключатель «Показывать покупателю».</p></div></aside></div></section>`;
    renderEditorPhotos();
    document
      .querySelectorAll("#car-title,#car-description,[data-video]")
      .forEach((x) => x.addEventListener("input", scheduleSave));
    bindCharacteristicFields();
    document.querySelector("#add-characteristic").onclick = () => {
      const select = document.querySelector("#add-definition"),
        d = definitions.find((x) => x.id === Number(select.value));
      if (!d) return;
      document
        .querySelector("#characteristic-fields")
        .insertAdjacentHTML("beforeend", characteristicField(d));
      select.selectedOptions[0].remove();
      select.value = "";
      bindCharacteristicFields();
      scheduleSave();
    };
    document.querySelector("#photo-upload").onchange = uploadPhotos;
    document.querySelector("#publish-car").onclick = () =>
      stateAction(car.status === "archive" ? "restore" : "publish");
    const archive = document.querySelector("#archive-car");
    if (archive) archive.onclick = () => stateAction("archive");
    document.querySelector("#editor-pdf").onclick = async (e) => {
      try {
        await flushSave();
        await generatePdf(id, e.currentTarget);
      } catch (err) {
        toast(err.message, true);
      }
    };
    const del = document.querySelector("#delete-car");
    if (del)
      del.onclick = async () => {
        if (
          !confirm(
            "Автомобиль и все связанные фотографии, миниатюры и PDF будут удалены без возможности восстановления. Продолжить?",
          )
        )
          return;
        try {
          await flushSave();
          await api(`cars/${id}/`, {
            method: "DELETE",
            body: { confirm: true },
          });
          location.href = "/staff/";
        } catch (e) {
          toast(e.message, true);
        }
      };
    window.addEventListener("beforeunload", (e) => {
      if (editGeneration !== savedGeneration || savePromise) {
        e.preventDefault();
        e.returnValue = "";
      }
    });
    document.querySelector("#preview-car").onclick = async (e) => {
      e.preventDefault();
      try {
        await flushSave();
        location.href = car.url;
      } catch (err) {
        toast(err.message, true);
      }
    };
  } catch (e) {
    app.innerHTML = `<section class="container empty-state"><h1>${esc(e.message)}</h1><a href="/staff/">Вернуться</a></section>`;
  }
}
function bindCharacteristicFields() {
  document
    .querySelectorAll("[data-value],[data-public]")
    .forEach((x) => (x.oninput = scheduleSave));
  document.querySelectorAll("[data-remove]").forEach(
    (b) =>
      (b.onclick = () => {
        const d = definitions.find((x) => x.id === Number(b.dataset.remove));
        document.querySelector(`[data-definition="${d.id}"]`).remove();
        document.querySelector("#add-definition").add(new Option(d.name, d.id));
        scheduleSave();
      }),
  );
}
function collectEditor() {
  return {
    revision: editor.revision,
    title: document.querySelector("#car-title").value,
    description: document.querySelector("#car-description").value,
    values: [...document.querySelectorAll("[data-value]")].map((x) => {
      const d = definitions.find((d) => d.id === Number(x.dataset.value));
      return {
        id: d.id,
        value:
          x.value === ""
            ? ""
            : d.type === "boolean"
              ? x.value === "true"
              : d.type === "number"
                ? Number(x.value)
                : x.value,
        public: document.querySelector(`[data-public="${d.id}"]`).checked,
      };
    }),
    videos: [...document.querySelectorAll("[data-video]")]
      .map((x) => x.value.trim())
      .filter(Boolean),
  };
}
function saveState(message, state) {
  const node = document.querySelector("#save-state");
  if (node) {
    node.className = "save-state " + state;
    node.innerHTML = (state === "saved" ? icon("check") : "") + esc(message);
  }
}
function scheduleSave() {
  editGeneration++;
  saveFailed = false;
  saveState("Изменения не сохранены", "pending");
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => saveEditor().catch(() => {}), 650);
}
async function saveEditor() {
  if (savePromise) {
    await savePromise;
    if (editGeneration !== savedGeneration) return saveEditor();
    return;
  }
  if (editGeneration === savedGeneration) return;
  const generation = editGeneration;
  saveState("Сохранение…", "saving");
  savePromise = (async () => {
    try {
      const result = await api(`cars/${editor.id}/`, {
        method: "PATCH",
        body: collectEditor(),
      });
      editor.revision = result.revision;
      savedGeneration = generation;
      saveFailed = false;
      saveState(
        editGeneration === savedGeneration
          ? "Сохранено"
          : "Есть новые изменения",
        editGeneration === savedGeneration ? "saved" : "pending",
      );
      document.querySelector("#editor-error").textContent = "";
    } catch (e) {
      saveFailed = true;
      saveState("Не сохранено — повторить", "failed");
      document.querySelector("#save-state").onclick = () =>
        saveEditor().catch(() => {});
      document.querySelector("#editor-error").textContent = e.message;
      throw e;
    } finally {
      savePromise = null;
    }
  })();
  await savePromise;
  if (editGeneration !== savedGeneration && !saveFailed) return saveEditor();
}
async function flushSave() {
  clearTimeout(saveTimer);
  await saveEditor();
  if (saveFailed) throw new Error("Изменения не сохранены. Исправьте ошибку.");
}
async function stateAction(action) {
  try {
    await flushSave();
    const result = await api(`cars/${editor.id}/${action}/`, {
      method: "POST",
    });
    editor = result;
    toast(
      action === "archive"
        ? "Автомобиль отправлен в архив"
        : "Автомобиль опубликован",
    );
    location.href = "/staff/";
  } catch (e) {
    document.querySelector("#editor-error").textContent = e.message;
    toast(e.message, true);
  }
}
function renderEditorPhotos() {
  document.querySelector("#editor-photos").innerHTML = editor.photos
    .map(
      (p, i) =>
        `<div class="editor-photo"><img src="${p.thumb}" alt="Фото ${i + 1}"><button class="photo-main ${p.main ? "active" : ""}" data-photo-main="${p.id}">${icon("star")} ${p.main ? "Главная" : "Сделать главной"}</button><div class="photo-controls"><button data-move="${i}" data-direction="-1" ${i === 0 ? "disabled" : ""} aria-label="Переместить фото раньше">${icon("left")}</button><button data-move="${i}" data-direction="1" ${i === editor.photos.length - 1 ? "disabled" : ""} aria-label="Переместить фото позже">${icon("arrow")}</button><button data-photo-delete="${p.id}" aria-label="Удалить фотографию">Удалить</button></div></div>`,
    )
    .join("");
  document
    .querySelectorAll("[data-photo-main]")
    .forEach(
      (b) =>
        (b.onclick = () => photoAction({ main: Number(b.dataset.photoMain) })),
    );
  document.querySelectorAll("[data-photo-delete]").forEach(
    (b) =>
      (b.onclick = () => {
        if (confirm("Удалить фотографию?"))
          photoAction({ delete: Number(b.dataset.photoDelete) });
      }),
  );
  document.querySelectorAll("[data-move]").forEach(
    (b) =>
      (b.onclick = () => {
        const ids = editor.photos.map((p) => p.id),
          a = Number(b.dataset.move),
          z = a + Number(b.dataset.direction);
        [ids[a], ids[z]] = [ids[z], ids[a]];
        photoAction({ order: ids });
      }),
  );
}
async function photoAction(body) {
  try {
    await flushSave();
    const result = await api(`cars/${editor.id}/photo-settings/`, {
      method: "POST",
      body,
    });
    editor.photos = result.photos;
    renderEditorPhotos();
    saveState("Сохранено", "saved");
  } catch (e) {
    toast(e.message, true);
  }
}
async function uploadPhotos(e) {
  const input = e.target;
  if (!input.files.length) return;
  const data = new FormData();
  for (const f of input.files) data.append("photos", f);
  input.disabled = true;
  saveState("Загрузка фотографий…", "saving");
  try {
    await flushSave();
    const result = await api(`cars/${editor.id}/photos/`, {
      method: "POST",
      body: data,
    });
    editor.photos = result.photos;
    renderEditorPhotos();
    saveState("Сохранено", "saved");
  } catch (err) {
    saveState("Фотографии не загружены", "failed");
    toast(err.message, true);
  } finally {
    input.disabled = false;
    input.value = "";
  }
}
async function settingsPage() {
  try {
    const [defs, users] = await Promise.all([
      api("characteristics/"),
      api("users/"),
    ]);
    definitions = defs.items;
    app.innerHTML = `<section class="container settings-page"><a class="back-link" href="/staff/">${icon("arrow")} К автомобилям</a><h1>Настройки DK-AUTO</h1><div class="tabs"><button class="active" data-setting="site-settings">Компания и услуги</button><button data-setting="definition-settings">Характеристики</button><button data-setting="user-settings">Сотрудники</button></div><section id="site-settings" class="settings-tab panel"><h2>Компания и контакты</h2><form id="site-form"><div class="form-grid">${[
      ["name", "Название"],
      ["phone", "Телефон"],
      ["contact_name", "Контактное лицо"],
      ["address", "Адрес площадки"],
      ["hours", "Время работы"],
      ["telegram", "Telegram — имя пользователя"],
      ["max_url", "MAX — ссылка на профиль https://max.ru/…"],
      ["hero_title", "Заголовок главного экрана"],
    ]
      .map(
        ([key, label]) =>
          `<label>${label}<input name="${key}" value="${esc(site[key])}"></label>`,
      )
      .join(
        "",
      )}</div><label>Текст главного экрана<textarea name="hero_text" rows="3">${esc(site.hero_text)}</textarea></label><h3>Услуги</h3><div id="service-fields">${site.services.map((s, i) => `<div class="service-edit"><label>Название<input data-service-title="${i}" value="${esc(s.title)}"></label><label>Описание<input data-service-text="${i}" value="${esc(s.text)}"></label></div>`).join("")}</div><button class="button" type="submit">Сохранить настройки</button><p class="form-error"></p></form></section><section id="definition-settings" class="settings-tab panel" hidden><div class="panel-heading"><h2>Справочник характеристик</h2><button class="button secondary small" id="new-definition">${icon("plus")} Добавить</button></div><div id="definition-list"></div><form id="definition-form" class="subform" hidden><h3 id="definition-form-title">Новая характеристика</h3><input name="id" type="hidden"><div class="form-grid"><label>Название<input name="name" required maxlength="100"></label><label>Ключ (латиницей)<input name="key" required pattern="[a-z0-9_-]+"></label><label>Тип<select name="type"><option value="text">Текст</option><option value="number">Число</option><option value="boolean">Да / Нет</option><option value="select">Список</option></select></label><label>Единица измерения<input name="unit"></label><label>Порядок<input name="position" type="number" min="0" value="0"></label><label>Варианты списка (через запятую)<input name="options"></label></div><label class="checkbox-label"><input name="required" type="checkbox"> Обязательная для публикации</label><label class="checkbox-label"><input name="active" type="checkbox" checked> Активная</label><button class="button" type="submit">Сохранить характеристику</button><p class="form-error"></p></form></section><section id="user-settings" class="settings-tab panel" hidden><div class="panel-heading"><h2>Сотрудники</h2><button class="button secondary small" id="new-user">${icon("plus")} Добавить</button></div><div id="user-list"></div><form id="user-form" class="subform" hidden><h3>Учетная запись сотрудника</h3><input name="id" type="hidden"><div class="form-grid"><label>Имя<input name="name"></label><label>Логин<input name="username" required></label><label>Роль<select name="role"><option value="manager">Менеджер</option><option value="admin">Администратор</option></select></label><label>Пароль (от 10 символов)<input name="password" type="password" autocomplete="new-password"></label></div><label class="checkbox-label"><input type="checkbox" name="active" checked> Учетная запись активна</label><button class="button" type="submit">Сохранить сотрудника</button><p class="form-error"></p></form></section></section>`;
    document.querySelectorAll("[data-setting]").forEach(
      (b) =>
        (b.onclick = () => {
          document
            .querySelectorAll(".settings-tab")
            .forEach((s) => (s.hidden = s.id !== b.dataset.setting));
          document
            .querySelectorAll("[data-setting]")
            .forEach((x) => x.classList.toggle("active", x === b));
        }),
    );
    document.querySelector("#site-form").onsubmit = async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      data.services = [
        ...document.querySelectorAll("[data-service-title]"),
      ].map((x) => ({
        title: x.value,
        text: document.querySelector(
          `[data-service-text="${x.dataset.serviceTitle}"]`,
        ).value,
      }));
      try {
        site = await api("site/", { method: "PATCH", body: data });
        toast("Настройки сохранены");
      } catch (err) {
        e.target.querySelector(".form-error").textContent = err.message;
      }
    };
    const defForm = document.querySelector("#definition-form");
    const showDefinition = (d) => {
      defForm.hidden = false;
      defForm.reset();
      for (const key of ["id", "name", "key", "type", "unit", "position"])
        defForm.elements[key].value =
          d?.[key] ?? (key === "position" ? 0 : key === "type" ? "text" : "");
      defForm.elements.options.value = d?.options.join(", ") || "";
      defForm.elements.required.checked = !!d?.required;
      defForm.elements.active.checked = d?.active ?? true;
      defForm.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    function drawDefinitions() {
      document.querySelector("#definition-list").innerHTML = definitions
        .map(
          (d) =>
            `<div class="settings-row"><div><strong>${esc(d.name)}</strong><small>${esc(d.key)} · ${esc(d.type)}${d.required ? " · Обязательная" : ""}${!d.active ? " · Неактивная" : ""}</small></div><button class="button secondary small" data-edit-definition="${d.id}">Изменить</button></div>`,
        )
        .join("");
      document
        .querySelectorAll("[data-edit-definition]")
        .forEach(
          (b) =>
            (b.onclick = () =>
              showDefinition(
                definitions.find(
                  (d) => d.id === Number(b.dataset.editDefinition),
                ),
              )),
        );
    }
    drawDefinitions();
    document.querySelector("#new-definition").onclick = () => showDefinition();
    defForm.onsubmit = async (e) => {
      e.preventDefault();
      const f = e.target,
        data = Object.fromEntries(new FormData(f));
      data.required = f.elements.required.checked;
      data.active = f.elements.active.checked;
      data.position = Number(data.position);
      data.options = data.options
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean);
      if (data.id) data.id = Number(data.id);
      else delete data.id;
      try {
        const result = await api("characteristics/", {
          method: data.id ? "PATCH" : "POST",
          body: data,
        });
        definitions = result.items;
        drawDefinitions();
        f.hidden = true;
        toast("Характеристика сохранена");
      } catch (err) {
        f.querySelector(".form-error").textContent = err.message;
      }
    };
    let employees = users.items;
    const userForm = document.querySelector("#user-form");
    function showUser(u) {
      userForm.hidden = false;
      userForm.reset();
      for (const key of ["id", "name", "username", "role"])
        userForm.elements[key].value =
          u?.[key] ?? (key === "role" ? "manager" : "");
      userForm.elements.username.readOnly = !!u;
      userForm.elements.active.checked = u?.active ?? true;
    }
    function drawUsers() {
      document.querySelector("#user-list").innerHTML = employees
        .map(
          (u) =>
            `<div class="settings-row"><div><strong>${esc(u.name)}</strong><small>${esc(u.username)} · ${u.role === "admin" ? "Администратор" : "Менеджер"}${!u.active ? " · Отключен" : ""}</small></div><button class="button secondary small" data-edit-user="${u.id}">Изменить</button></div>`,
        )
        .join("");
      document
        .querySelectorAll("[data-edit-user]")
        .forEach(
          (b) =>
            (b.onclick = () =>
              showUser(
                employees.find((u) => u.id === Number(b.dataset.editUser)),
              )),
        );
    }
    drawUsers();
    document.querySelector("#new-user").onclick = () => showUser();
    userForm.onsubmit = async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      data.active = e.target.elements.active.checked;
      if (data.id) data.id = Number(data.id);
      else delete data.id;
      try {
        const result = await api("users/", {
          method: data.id ? "PATCH" : "POST",
          body: data,
        });
        employees = result.items;
        drawUsers();
        e.target.hidden = true;
        toast("Сотрудник сохранен");
      } catch (err) {
        e.target.querySelector(".form-error").textContent = err.message;
      }
    };
  } catch (e) {
    app.innerHTML = `<section class="container empty-state"><h1>${esc(e.message)}</h1></section>`;
  }
}
async function init() {
  renderIcons();
  document.querySelector(".menu-toggle").onclick = (e) => {
    const nav = document.querySelector(".mobile-nav");
    nav.hidden = !nav.hidden;
    e.currentTarget.setAttribute("aria-expanded", String(!nav.hidden));
  };
  try {
    const [session, settings] = await Promise.all([
      api("session/"),
      api("site/"),
    ]);
    user = session.user;
    site = settings;
    staffBar();
    const path = location.pathname;
    const unavailable = JSON.parse(
      document.querySelector("#page-state").textContent,
    ).unavailable;
    if (unavailable) return;
    if (path === "/login/") loginPage();
    else if (/^\/staff\/cars\/\d+\/edit\/$/.test(path))
      await editPage(Number(path.split("/")[3]));
    else if (/^\/staff\/cars\/\d+\/print\/$/.test(path)) await detail(Number(path.split("/")[3]));
    else if (path === "/staff/settings/") await settingsPage();
    else if (path === "/staff/") staffPage();
    else if (/^\/cars\/\d+\/$/.test(path))
      await detail(Number(path.split("/")[2]));
    else home();
    renderIcons();
    if (location.hash)
      setTimeout(
        () => document.querySelector(location.hash)?.scrollIntoView(),
        100,
      );
  } catch (e) {
    app.innerHTML = `<section class="container empty-state"><h1>Не удалось открыть сайт</h1><p>${esc(e.message)}</p><button class="button" onclick="location.reload()">Повторить</button></section>`;
  }
}
init();
// Cloudflare stores normalized JPEGs in D1. Resize on device, strip EXIF, upload one at a time.
const originalApi=api;
api=async function(path,options={}) {
  const result=await originalApi(path,options);
  if(path==='site/') {
    const phone=result.phone.replace(/[^+\d]/g,'');
    for(const link of document.querySelectorAll('.header-phone,.footer-phone')){link.href='tel:'+phone;const span=link.querySelector('span:last-child');if(span)span.textContent=result.phone;else link.textContent=result.phone;}
    const details=document.querySelector('.footer-top > div:last-child > span');if(details)details.textContent=result.contact_name+' · '+result.hours;
  }return result;
};
async function preparePhoto(file) {
  if (!['image/jpeg','image/png','image/webp'].includes(file.type) || file.size>15*1024*1024) throw new Error('Выберите JPEG, PNG или WebP до 15 МБ');
  const bitmap=await createImageBitmap(file);
  try {
    if(bitmap.width*bitmap.height>50000000)throw new Error('Слишком большое разрешение фотографии');
    const scale=Math.min(1,1600/Math.max(bitmap.width,bitmap.height));
    const canvas=document.createElement('canvas');canvas.width=Math.round(bitmap.width*scale);canvas.height=Math.round(bitmap.height*scale);
    const context=canvas.getContext('2d');context.fillStyle='#fff';context.fillRect(0,0,canvas.width,canvas.height);context.drawImage(bitmap,0,0,canvas.width,canvas.height);
    let blob;for(const quality of [.82,.7,.55,.4]){blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/jpeg',quality));if(blob&&blob.size<=750000)return blob;}
    throw new Error('Не удалось уменьшить фото. Выберите другое изображение.');
  } finally {bitmap.close();}
}
uploadPhotos = async function(e) {
  const input=e.target,files=Array.from(input.files);if(!files.length)return;input.disabled=true;
  try {await flushSave();for(let i=0;i<files.length;i++){
    saveState(`Загрузка фото ${i+1} из ${files.length}…`,'saving');const data=new FormData();data.append('photos',await preparePhoto(files[i]),'photo.jpg');
    const result=await api(`cars/${editor.id}/photos/`,{method:'POST',body:data});editor.photos=result.photos;editor.revision=result.revision;renderEditorPhotos();
  }saveState('Сохранено','saved');}catch(err){saveState('Фото не загружено','failed');toast(err.message,true);}finally{input.disabled=false;input.value='';}
};
// Keep print sheets local to the browser; the URL stays protected by the server.
const originalDetail=detail;
detail = async function(id) {
  await originalDetail(id);
  if(/^\/staff\/cars\/\d+\/print\/$/.test(location.pathname)) {
    const car=await api(`cars/${id}/`);
    const qr=await QRCode.toDataURL(location.origin+car.url,{width:320,margin:3,errorCorrectionLevel:'M'});
    app.innerHTML=`<section class="container print-sheet"><h1>DK-AUTO</h1><h2>${esc(car.title)}</h2><p class="car-price">${money(valueOf(car,'price'))}</p><img src="${qr}" alt="QR-код карточки автомобиля" width="320" height="320"><p>${esc(site.phone)}</p><p><a href="${car.url}">${esc(location.origin+car.url)}</a></p><p>Фотографии и характеристики по ссылке</p><button class="button" onclick="window.print()">Сохранить в PDF / Печать</button></section>`;
  }
};
