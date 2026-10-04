(function () {
  const data = window.ITINERARY;
  const days = data.days;
  const toneColor = {
    tokio: "#1f9bd7",
    koyasan: "#7a35a6",
    osaka: "#e3127c",
    kioto: "#ef8a00",
    nagoya: "#c49b00",
    fuji: "#14979f",
    hakone: "#2e8b57",
    cr: "#2d3b8e"
  };
  const tones = {
    "2026-10-05": "tokio",
    "2026-10-06": "tokio",
    "2026-10-07": "koyasan",
    "2026-10-08": "osaka",
    "2026-10-09": "osaka",
    "2026-10-10": "osaka",
    "2026-10-11": "osaka",
    "2026-10-12": "kioto",
    "2026-10-13": "kioto",
    "2026-10-14": "kioto",
    "2026-10-15": "nagoya",
    "2026-10-16": "fuji",
    "2026-10-17": "hakone",
    "2026-10-18": "tokio",
    "2026-10-19": "tokio",
    "2026-10-20": "tokio",
    "2026-10-21": "tokio",
    "2026-10-22": "tokio",
    "2026-10-23": "tokio",
    "2026-10-24": "cr"
  };
  const shortDays = {
    Lunes: "Lun",
    Martes: "Mar",
    Miércoles: "Mié",
    Jueves: "Jue",
    Viernes: "Vie",
    Sábado: "Sáb",
    Domingo: "Dom"
  };

  const el = {
    status: document.getElementById("status"),
    seg: document.getElementById("seg"),
    tabDay: document.getElementById("tab-day"),
    tabGuide: document.getElementById("tab-guide"),
    prev: document.getElementById("prev"),
    next: document.getElementById("next"),
    strip: document.getElementById("strip"),
    now: document.getElementById("now"),
    dayCard: document.getElementById("day-card"),
    screenDay: document.getElementById("screen-day"),
    screenGuide: document.getElementById("screen-guide"),
    screenShops: document.getElementById("screen-shops"),
    screenPhrases: document.getElementById("screen-phrases"),
    screenFood: document.getElementById("screen-food"),
    screenSos: document.getElementById("screen-sos"),
    screenYen: document.getElementById("screen-yen"),
    yenRate: document.getElementById("yen-rate"),
    usdRate: document.getElementById("usd-rate"),
    eurRate: document.getElementById("eur-rate"),
    yenAmount: document.getElementById("yen-amount"),
    crcAmount: document.getElementById("crc-amount"),
    usdAmount: document.getElementById("usd-amount"),
    eurAmount: document.getElementById("eur-amount"),
    yenCrcText: document.getElementById("yen-crc-text"),
    yenEq: document.getElementById("yen-eq"),
    timeCr: document.getElementById("time-cr"),
    timeJp: document.getElementById("time-jp"),
    timeCrDay: document.getElementById("time-cr-day"),
    timeJpDay: document.getElementById("time-jp-day"),
    timeNow: document.getElementById("time-now"),
    tempCr: document.getElementById("temp-cr"),
    tempHere: document.getElementById("temp-here"),
    herePlace: document.getElementById("here-place"),
    hereLocate: document.getElementById("here-locate"),
    toggleShops: document.getElementById("toggle-shops"),
    navDay: document.getElementById("nav-day"),
    navShops: document.getElementById("nav-shops"),
    navPhrases: document.getElementById("nav-phrases"),
    navFood: document.getElementById("nav-food"),
    navYen: document.getElementById("nav-yen"),
    navSos: document.getElementById("nav-sos"),
    modal: document.getElementById("phrase-modal"),
    modalKana: document.getElementById("modal-kana"),
    modalJp: document.getElementById("modal-jp"),
    modalEs: document.getElementById("modal-es"),
    modalPlay: document.getElementById("modal-play")
  };

  const params = new URLSearchParams(location.search);
  const demo = params.get("ahora");
  const savedPlace = demo ? null : loadPlace();
  let index = startIndex();
  if (savedPlace) {
    const found = days.findIndex(function (day) { return day.date === savedPlace.date; });
    if (found >= 0) index = found;
  }
  let view = savedPlace && ["day", "guide", "shops", "phrases", "food", "yen", "sos"].indexOf(savedPlace.view) >= 0 ? savedPlace.view : "day";
  let hideShops = loadHideShops();
  let foodCity = savedFoodCity(savedPlace);
  let phraseCat = savedPhraseCat(savedPlace);
  let doneShops = loadDoneShops();
  let phraseAudio = null;
  let phraseButton = null;
  let openPhrase = null;
  let spotMemory = null;
  let crStamp = 0;
  let clockLive = true;
  let clockWriting = false;
  let spotAsked = false;

  el.prev.addEventListener("click", function () { go(-1); });
  el.next.addEventListener("click", function () { go(1); });
  el.tabDay.addEventListener("click", function () { setView("day"); });
  el.tabGuide.addEventListener("click", function () { setView("guide"); });
  el.navDay.addEventListener("click", function () { setView("day"); });
  el.navShops.addEventListener("click", function () { setView("shops"); });
  el.navPhrases.addEventListener("click", function () { setView("phrases"); });
  el.navFood.addEventListener("click", function () { setView("food"); });
  el.navYen.addEventListener("click", function () { setView("yen"); });
  el.navSos.addEventListener("click", function () { setView("sos"); });
  el.yenRate.addEventListener("input", function () { paintYen("yen"); });
  el.usdRate.addEventListener("input", function () { paintYen("yen"); });
  el.eurRate.addEventListener("input", function () { paintYen("yen"); });
  el.yenAmount.addEventListener("input", function () {
    groupAmount(el.yenAmount);
    paintYen("yen");
  });
  el.crcAmount.addEventListener("input", function () {
    groupAmount(el.crcAmount);
    paintYen("crc");
  });
  el.usdAmount.addEventListener("input", function () {
    groupAmount(el.usdAmount);
    paintYen("usd");
  });
  el.eurAmount.addEventListener("input", function () {
    groupAmount(el.eurAmount);
    paintYen("eur");
  });
  el.yenRate.value = formatRate(loadYenRate());
  el.usdRate.value = formatRate(loadUsdRate());
  el.eurRate.value = formatRate(loadEurRate());
  el.hereLocate.addEventListener("click", function () { loadHereTemp(); });
  showCachedSpot();
  paintClocks();
  el.timeCr.addEventListener("input", function () { applyClock("cr"); });
  el.timeCr.addEventListener("change", function () { applyClock("cr"); });
  el.timeJp.addEventListener("input", function () { applyClock("jp"); });
  el.timeJp.addEventListener("change", function () { applyClock("jp"); });
  el.timeNow.addEventListener("click", function () {
    clockLive = true;
    paintClocks();
  });
  el.toggleShops.addEventListener("click", function () {
    hideShops = !hideShops;
    try { localStorage.setItem("japon-hide-shops", hideShops ? "1" : "0"); } catch (error) {}
    syncShopButton();
    if (view === "day") render({ keepScroll: true });
  });
  el.modal.addEventListener("click", function (event) {
    if (event.target !== el.modal) return;
    if (phraseButton === el.modalPlay) stopPhraseAudio();
    el.modal.hidden = true;
  });
  el.modalPlay.addEventListener("click", function () {
    if (openPhrase) playPhrase(openPhrase.audio, el.modalPlay);
  });

  document.addEventListener("keydown", function (event) {
    if (view !== "day") return;
    if (event.key === "ArrowLeft") { event.preventDefault(); go(1); }
    if (event.key === "ArrowRight") { event.preventDefault(); go(-1); }
  });

  let touchX = null;
  let touchY = null;
  el.dayCard.addEventListener("touchstart", function (event) {
    touchX = event.changedTouches[0].clientX;
    touchY = event.changedTouches[0].clientY;
  }, { passive: true });
  el.dayCard.addEventListener("touchend", function (event) {
    if (touchX == null || view !== "day") return;
    const dx = event.changedTouches[0].clientX - touchX;
    const dy = event.changedTouches[0].clientY - touchY;
    touchX = null;
    touchY = null;
    if (Math.abs(dx) < 64 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    go(dx > 0 ? -1 : 1);
  }, { passive: true });

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  syncShopButton();
  renderStrip();
  renderGuide();
  renderShops();
  renderPhrases();
  renderFood();
  renderSos();
  if (view === "day") render(savedPlace ? { keepScroll: true } : undefined);
  else setView(view, { keepScroll: true });
  restoreScroll();
  window.addEventListener("scroll", queueRemember, { passive: true });
  window.addEventListener("pagehide", remember);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") remember();
  });
  window.setInterval(paintClocks, 1000);
  window.setInterval(function () {
    paintStatus();
    if (view === "day") render({ keepScroll: true });
  }, 30000);

  if ("serviceWorker" in navigator) {
    var refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
    navigator.serviceWorker.register("sw.js").catch(function () {});
  }

  function toneFor(date) { return tones[date] || "tokio"; }
  function colorFor(date) { return toneColor[toneFor(date)]; }

  function loadPlace() {
    try {
      const raw = JSON.parse(localStorage.getItem("japon-place") || "null");
      if (!raw || typeof raw !== "object") return null;
      return raw;
    } catch (error) {
      return null;
    }
  }

  function savedFoodCity(place) {
    if (!place || typeof place.food !== "string") return "Todas";
    const cities = data.guide.restaurants.map(function (city) { return city.city; });
    return place.food === "Todas" || cities.indexOf(place.food) >= 0 ? place.food : "Todas";
  }

  function phraseCats() {
    const cats = [];
    data.guide.phrases.forEach(function (row) {
      if (cats.indexOf(row.cat) < 0) cats.push(row.cat);
    });
    return cats;
  }

  function savedPhraseCat(place) {
    if (!place || typeof place.phrase !== "string") return "Todas";
    return place.phrase === "Todas" || phraseCats().indexOf(place.phrase) >= 0 ? place.phrase : "Todas";
  }

  function remember() {
    try {
      localStorage.setItem("japon-place", JSON.stringify({
        date: days[index].date,
        view: view,
        food: foodCity,
        phrase: phraseCat,
        y: Math.round(window.scrollY)
      }));
    } catch (error) {}
  }

  let rememberTimer = null;
  function queueRemember() {
    if (rememberTimer) window.clearTimeout(rememberTimer);
    rememberTimer = window.setTimeout(remember, 200);
  }

  function restoreScroll() {
    if (!savedPlace || !(savedPlace.y > 0)) return;
    const y = savedPlace.y;
    window.requestAnimationFrame(function () {
      window.scrollTo(0, y);
      remember();
    });
  }

  function loadHideShops() {
    try { return localStorage.getItem("japon-hide-shops") === "1"; } catch (error) { return false; }
  }

  function loadDoneShops() {
    try { return JSON.parse(localStorage.getItem("japon-shops-done") || "[]"); } catch (error) { return []; }
  }

  function saveDoneShops() {
    try { localStorage.setItem("japon-shops-done", JSON.stringify(doneShops)); } catch (error) {}
  }

  function syncShopButton() {
    const showing = !hideShops;
    el.toggleShops.classList.toggle("is-on", showing);
    el.toggleShops.setAttribute("aria-checked", showing ? "true" : "false");
  }

  function shownEvents(day) {
    if (!hideShops) return day.events;
    return day.events.filter(function (event) { return event.type !== "tienda"; });
  }

  function startIndex() {
    const key = tokyoKey(tokyoNow());
    const found = days.findIndex(function (day) { return day.date === key; });
    return found >= 0 ? found : 0;
  }

  function tokyoNow() {
    if (demo) return new Date(demo + "+09:00");
    return new Date();
  }

  function tokyoKey(date) {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: data.timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(date);
  }

  function tokyoMinutes(date) {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: data.timezone,
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23"
    }).formatToParts(date);
    const bag = {};
    parts.forEach(function (part) { bag[part.type] = part.value; });
    return Number(bag.hour) * 60 + Number(bag.minute);
  }

  function minutesOf(hhmm) {
    const bits = hhmm.split(":");
    return Number(bits[0]) * 60 + Number(bits[1]);
  }

  function formatClock(hhmm) {
    const bits = hhmm.split(":");
    let hour = Number(bits[0]);
    const suffix = hour >= 12 ? "pm" : "am";
    hour = hour % 12 || 12;
    return hour + ":" + bits[1] + " " + suffix;
  }

  function formatGap(mins) {
    if (mins <= 0) return "menos de 1 min";
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    if (h && m) return h + " h " + m + " min";
    if (h) return h + " h";
    return m + " min";
  }

  function go(step) {
    const next = index + step;
    if (next < 0 || next >= days.length) return;
    index = next;
    window.scrollTo(0, 0);
    render();
    remember();
  }

  function setView(next, options) {
    const keep = options && options.keepScroll;
    view = next === "guide" ? "guide" : next;
    const onItinerary = view === "day" || view === "guide";
    el.seg.hidden = !onItinerary;
    el.tabDay.classList.toggle("on", view === "day");
    el.tabGuide.classList.toggle("on", view === "guide");
    el.tabDay.setAttribute("aria-pressed", view === "day" ? "true" : "false");
    el.tabGuide.setAttribute("aria-pressed", view === "guide" ? "true" : "false");
    el.screenDay.hidden = view !== "day";
    el.screenGuide.hidden = view !== "guide";
    el.screenShops.hidden = view !== "shops";
    el.screenPhrases.hidden = view !== "phrases";
    el.screenFood.hidden = view !== "food";
    el.screenYen.hidden = view !== "yen";
    el.screenSos.hidden = view !== "sos";
    el.navDay.classList.toggle("on", onItinerary);
    el.navShops.classList.toggle("on", view === "shops");
    el.navPhrases.classList.toggle("on", view === "phrases");
    el.navFood.classList.toggle("on", view === "food");
    el.navYen.classList.toggle("on", view === "yen");
    el.navSos.classList.toggle("on", view === "sos");
    if (view === "day") render(keep ? { keepScroll: true } : undefined);
    if (view === "yen") ensureSpot();
    if (!keep) window.scrollTo(0, 0);
    remember();
  }

  function paintStatus() {
    const key = tokyoKey(tokyoNow());
    const start = days[0].date;
    const end = days[days.length - 1].date;
    if (key < start) {
      const diff = Math.round((Date.parse(start + "T00:00:00Z") - Date.parse(key + "T00:00:00Z")) / 86400000);
      el.status.textContent = diff === 1 ? "Falta 1 día" : "Faltan " + diff + " días";
      return;
    }
    if (key > end) {
      el.status.textContent = "Viaje terminado";
      return;
    }
    const found = days.findIndex(function (day) { return day.date === key; });
    el.status.textContent = "Día " + (found + 1);
  }

  function render(options) {
    const keep = options && options.keepScroll;
    const y = keep ? window.scrollY : 0;
    const day = days[index];
    const live = day.date === tokyoKey(tokyoNow());
    const nowMin = live ? tokyoMinutes(tokyoNow()) : null;
    paintStatus();
    el.prev.disabled = index === 0;
    el.next.disabled = index === days.length - 1;
    el.prev.textContent = "‹ Día anterior";
    el.next.textContent = "Día siguiente ›";
    paintNow(day, live, nowMin);
    paintCard(day, live, nowMin);
    markStrip();
    if (keep) window.scrollTo(0, y);
    const current = el.dayCard.querySelector(".is-now");
    if (live && current && !keep) current.scrollIntoView({ block: "center" });
  }

  function paintNow(day, live, nowMin) {
    if (!live) {
      el.now.hidden = true;
      el.now.replaceChildren();
      return;
    }
    const timed = shownEvents(day).filter(function (event) { return event.time; });
    el.now.hidden = false;
    el.now.replaceChildren();
    const strong = document.createElement("strong");
    const span = document.createElement("span");
    if (!timed.length) {
      strong.textContent = "Hoy en Japón";
      span.textContent = "Este día no tiene horas fijas.";
    } else if (nowMin < minutesOf(timed[0].time)) {
      strong.textContent = "Hoy en Japón · el día empieza en " + formatGap(minutesOf(timed[0].time) - nowMin);
      span.textContent = formatClock(timed[0].time) + " · " + timed[0].title;
    } else {
      let current = timed[0];
      timed.forEach(function (event) {
        if (minutesOf(event.time) <= nowMin) current = event;
      });
      const later = timed.find(function (event) { return minutesOf(event.time) > nowMin; });
      strong.textContent = "Ahora · " + current.title;
      span.textContent = later
        ? "Faltan " + formatGap(minutesOf(later.time) - nowMin) + " para " + later.title
        : "No queda otra actividad con hora. Esta noche: " + day.lodging.name;
    }
    el.now.append(strong, span);
  }

  function paintCard(day, live, nowMin) {
    const color = colorFor(day.date);
    const events = shownEvents(day);
    const currentIndex = live ? currentEventIndex(events, nowMin) : -1;
    el.dayCard.style.setProperty("--c", color);
    el.dayCard.replaceChildren();

    const head = document.createElement("div");
    head.className = "dh";
    const box = document.createElement("div");
    box.className = "dbox";
    const week = document.createElement("small");
    week.textContent = (shortDays[day.weekday] || day.weekday).toUpperCase();
    const num = document.createElement("b");
    num.textContent = String(Number(day.date.slice(8)));
    const month = document.createElement("small");
    month.textContent = "OCT";
    box.append(week, num, month);
    const copy = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = day.summary;
    const who = document.createElement("p");
    who.textContent = day.who.join(" · ");
    const cities = document.createElement("div");
    cities.className = "cities";
    const chip = document.createElement("span");
    chip.textContent = day.city;
    cities.append(chip);
    copy.append(title, who, cities);
    head.append(box, copy);

    const meta = document.createElement("div");
    meta.className = "meta";
    const stay = document.createElement("div");
    stay.append(document.createTextNode("🏨 "));
    const stayName = document.createElement("b");
    stayName.textContent = day.lodging.name;
    stay.append(stayName);
    meta.append(stay);
    if (day.lodging.detail) {
      const detail = document.createElement("div");
      detail.textContent = day.lodging.detail;
      meta.append(detail);
    }
    if (day.lodging.maps) meta.append(mapsLink(day.lodging.maps, "Ver hospedaje en Maps"));
    if (day.pass) {
      const pass = document.createElement("div");
      pass.append(document.createTextNode("🎟️ Pase del día: "));
      const strong = document.createElement("b");
      strong.textContent = day.pass;
      pass.append(strong);
      meta.append(pass);
    }
    (day.tips || []).forEach(function (tip) {
      const line = document.createElement("div");
      line.textContent = tip;
      meta.append(line);
    });

    el.dayCard.append(head, meta);

    let lastArea = "";
    events.forEach(function (event, i) {
      if (event.area && event.area !== lastArea) {
        lastArea = event.area;
        const sec = document.createElement("div");
        sec.className = "sec";
        sec.textContent = event.area;
        el.dayCard.append(sec);
      }
      el.dayCard.append(eventRow(events, event, i, i === currentIndex));
    });
  }

  function eventRow(events, event, i, isNow) {
    const row = document.createElement("div");
    row.className = "it" + (event.type === "tienda" ? " is-shop" : "") + (isNow ? " is-now" : "");
    const time = document.createElement("div");
    time.className = "tm";
    time.textContent = event.time ? ((event.approx ? "≈ " : "") + formatClock(event.time)) : "—";
    const body = document.createElement("div");
    const name = document.createElement("div");
    name.className = "nm";
    name.textContent = event.title;
    body.append(name);
    if (event.detail) {
      const detail = document.createElement("div");
      detail.className = "dt";
      detail.textContent = event.detail;
      body.append(detail);
    }
    if (event.who || event.duration || event.price) {
      const extra = document.createElement("div");
      extra.className = "dt";
      extra.textContent = [event.who, event.duration, event.price].filter(Boolean).join(" · ");
      body.append(extra);
    }
    if (event.badges && event.badges.length) {
      const tags = document.createElement("div");
      tags.className = "tags";
      event.badges.forEach(function (label) {
        const tag = document.createElement("span");
        tag.className = "tg " + badgeClass(label);
        tag.textContent = label;
        tags.append(tag);
      });
      body.append(tags);
    }
    if (event.hint) {
      const hint = document.createElement("div");
      hint.className = "shop-note";
      hint.textContent = event.hint;
      body.append(hint);
    }
    const gapInfo = gapText(events, i);
    if (!gapInfo.soft) {
      const gap = document.createElement("p");
      gap.className = "gap";
      gap.textContent = gapInfo.text;
      body.append(gap);
    }
    const next = events[i + 1];
    const travel = event.type === "tren" || event.type === "traslado";
    if (travel && next && next.maps && event.maps) body.append(directionsLink(event.maps, next.maps));
    else if (event.mapsUrl || event.maps) body.append(mapsLink(event.maps, "Ver en Maps", event.mapsUrl));
    row.append(time, body);
    return row;
  }

  function currentEventIndex(events, nowMin) {
    let found = -1;
    events.forEach(function (event, i) {
      if (event.time && minutesOf(event.time) <= nowMin) found = i;
    });
    return found;
  }

  function gapText(events, i) {
    const event = events[i];
    const next = events[i + 1];
    if (!next || !event.time || !next.time) return { soft: true, text: "" };
    const delta = minutesOf(next.time) - minutesOf(event.time);
    const approx = event.approx || next.approx;
    return { soft: false, text: (approx ? "≈ " : "") + formatGap(delta) + " para " + next.title };
  }

  function badgeClass(label) {
    if (label.indexOf("Recomend") >= 0 || label.indexOf("Desvío") >= 0) return "reco";
    if (label.indexOf("Pagar") >= 0 || label.indexOf("Reservar") >= 0) return "pay";
    if (label.indexOf("Pagado") >= 0 || label.indexOf("Incluid") >= 0) return "ok";
    if (label.indexOf("Gratis") >= 0 || label.indexOf("Pase") >= 0 || label.indexOf("Pass") >= 0) return "free";
    return "";
  }

  function mapsLink(query, label, mapsUrl) {
    const a = document.createElement("a");
    a.className = "maps";
    a.href = mapsUrl || ("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query));
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = label;
    return a;
  }

  function directionsLink(origin, destination) {
    const a = document.createElement("a");
    a.className = "maps";
    a.href = "https://www.google.com/maps/dir/?api=1&origin=" +
      encodeURIComponent(origin) + "&destination=" + encodeURIComponent(destination) +
      "&travelmode=transit";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = "Cómo llegar";
    return a;
  }

  function renderStrip() {
    const today = tokyoKey(tokyoNow());
    days.forEach(function (day, i) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "stop";
      button.style.setProperty("--c", colorFor(day.date));
      button.setAttribute("aria-label", day.weekday + " " + Number(day.date.slice(8)) + " de octubre");
      if (day.date === today) button.classList.add("today");
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.textContent = String(Number(day.date.slice(8)));
      const wd = document.createElement("span");
      wd.className = "wd";
      wd.textContent = shortDays[day.weekday] || day.weekday.slice(0, 3);
      button.append(dot, wd);
      button.addEventListener("click", function () {
        index = i;
        window.scrollTo(0, 0);
        render();
        remember();
      });
      el.strip.append(button);
    });
  }

  function markStrip() {
    const buttons = el.strip.querySelectorAll(".stop");
    buttons.forEach(function (button, i) {
      button.classList.toggle("on", i === index);
      button.setAttribute("aria-pressed", i === index ? "true" : "false");
      if (i === index) button.scrollIntoView({ inline: "center", block: "nearest" });
    });
  }

  function renderGuide() {
    const guide = data.guide;
    const root = el.screenGuide;
    root.replaceChildren();
    const lead = document.createElement("p");
    lead.className = "lead";
    lead.textContent = "Los seis: " + data.travelers.join(", ") + ".";
    root.append(lead);
    root.append(listBlock("Hospedajes", guide.lodgings.map(function (row) {
      return rowCard(row.name, row.nights + " · " + row.city + " · " + row.who, sentence([row.price, row.cancel, "Reservó " + row.booked]));
    })));
    root.append(listBlock("Entradas ya compradas", guide.tickets.map(function (row) {
      return rowCard(row.name, row.when, row.who + (row.platform && row.platform !== "—" ? " · " + row.platform : ""));
    })));
    root.append(listBlock("Para pagar allá", guide.payOnSite.map(function (row) {
      return rowCard(row.place, row.day, row.price + " por persona");
    })));
    root.append(listBlock("Pases", guide.passes.map(function (row) {
      return rowCard(row.name, row.price, row.detail);
    })));
    const links = guide.links.map(function (row) {
      const card = document.createElement("article");
      card.className = "row";
      const a = document.createElement("a");
      a.href = row.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = row.name;
      card.append(a);
      return card;
    });
    root.append(listBlock("Sitios de trenes y pases", links));
    const apps = [];
    guide.apps.forEach(function (group) {
      group.items.forEach(function (row) {
        apps.push(rowCard(row.name, group.group, row.note));
      });
    });
    root.append(listBlock("Apps", apps));
  }

  function renderShops() {
    const root = el.screenShops;
    root.replaceChildren();
    const lead = document.createElement("p");
    lead.className = "lead";
    lead.textContent = "Marcá lo que ya visitaron. El interruptor Tiendas oculta estas paradas en el día.";
    root.append(lead);
    const list = document.createElement("div");
    list.className = "list";
    days.forEach(function (day) {
      const shops = day.events.filter(function (event) { return event.type === "tienda"; });
      if (!shops.length) return;
      const grp = document.createElement("div");
      grp.className = "grp";
      grp.textContent = Number(day.date.slice(8)) + " oct · " + day.city;
      list.append(grp);
      shops.forEach(function (shop) {
        const id = day.date + "|" + shop.title;
        const row = document.createElement("div");
        row.className = "shop" + (doneShops.indexOf(id) >= 0 ? " done" : "");
        const button = document.createElement("button");
        button.type = "button";
        button.className = "ck";
        button.setAttribute("aria-label", "Marcar " + shop.title);
        button.textContent = doneShops.indexOf(id) >= 0 ? "✓" : "";
        const body = document.createElement("div");
        const name = document.createElement("div");
        name.className = "nm";
        name.textContent = (shop.time ? formatClock(shop.time) + " · " : "") + shop.title;
        const sub = document.createElement("div");
        sub.className = "dt";
        sub.textContent = shop.detail || "";
        body.append(name, sub);
        if (shop.mapsUrl || shop.maps) body.append(mapsLink(shop.maps, "Maps", shop.mapsUrl));
        button.addEventListener("click", function () {
          const at = doneShops.indexOf(id);
          if (at >= 0) doneShops.splice(at, 1);
          else doneShops.push(id);
          saveDoneShops();
          renderShops();
        });
        row.append(button, body);
        list.append(row);
      });
    });
    root.append(list);
  }

  function renderPhrases() {
    const root = el.screenPhrases;
    root.replaceChildren();
    const cats = ["Todas"].concat(phraseCats());
    const chips = document.createElement("div");
    chips.className = "chips";
    cats.forEach(function (cat) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip" + (cat === phraseCat ? " on" : "");
      button.textContent = cat;
      button.addEventListener("click", function () {
        phraseCat = cat;
        renderPhrases();
        remember();
      });
      chips.append(button);
    });
    const search = document.createElement("div");
    search.className = "search";
    const input = document.createElement("input");
    input.type = "search";
    input.placeholder = "Buscar en japonés o español";
    input.setAttribute("aria-label", "Buscar en el vocabulario");
    input.enterKeyHint = "search";
    search.append(input);
    const count = document.createElement("p");
    count.className = "count";
    const list = document.createElement("div");
    list.className = "list";

    function paint() {
      const query = fold(input.value);
      const rows = data.guide.phrases.filter(function (row) {
        if (phraseCat !== "Todas" && row.cat !== phraseCat) return false;
        if (!query) return true;
        return fold([row.kana, row.jp, row.es, row.cat].join(" ")).indexOf(query) >= 0;
      });
      list.replaceChildren();
      if (!rows.length) {
        const empty = document.createElement("p");
        empty.className = "empty";
        empty.textContent = "Ninguna frase coincide.";
        list.append(empty);
      }
      let lastCat = "";
      rows.forEach(function (row) {
        if (phraseCat === "Todas" && !query && row.cat !== lastCat) {
          lastCat = row.cat;
          const grp = document.createElement("div");
          grp.className = "grp";
          grp.textContent = row.cat;
          list.append(grp);
        }
        const item = document.createElement("div");
        item.className = "voc";
        const play = document.createElement("button");
        play.type = "button";
        play.className = "play";
        play.setAttribute("aria-label", "Escuchar " + row.kana);
        play.textContent = "▶";
        play.addEventListener("click", function () { playPhrase(row.audio, play); });
        const main = document.createElement("button");
        main.type = "button";
        main.className = "voc-main";
        const jp = document.createElement("span");
        const kana = document.createElement("span");
        kana.className = "jp";
        kana.textContent = row.kana;
        const roma = document.createElement("span");
        roma.className = "roma";
        roma.textContent = row.jp;
        jp.append(kana, roma);
        const es = document.createElement("span");
        es.className = "es";
        es.textContent = row.es;
        const when = document.createElement("span");
        when.className = "vcat";
        when.textContent = row.cat;
        es.append(when);
        main.append(jp, es);
        main.addEventListener("click", function () { showPhrase(row); });
        item.append(play, main);
        list.append(item);
      });
      const n = rows.length;
      count.textContent = n === 1 ? "1 frase" : n + " frases";
    }

    input.addEventListener("input", paint);
    root.append(chips, search, count, list);
    paint();
  }

  function showPhrase(row) {
    openPhrase = row;
    el.modalKana.textContent = row.kana;
    el.modalJp.textContent = row.jp;
    el.modalEs.textContent = row.es;
    el.modal.hidden = false;
  }

  function stopPhraseAudio() {
    if (phraseAudio) {
      phraseAudio.pause();
      phraseAudio = null;
    }
    if (phraseButton) {
      phraseButton.classList.remove("is-on");
      phraseButton.textContent = phraseButton === el.modalPlay ? "Escuchar" : "▶";
      phraseButton = null;
    }
  }

  function playPhrase(src, button) {
    if (phraseButton === button && phraseAudio && !phraseAudio.paused) {
      stopPhraseAudio();
      return;
    }
    stopPhraseAudio();
    const audio = new Audio(src);
    phraseAudio = audio;
    phraseButton = button;
    button.classList.add("is-on");
    button.textContent = button === el.modalPlay ? "Pausa" : "■";
    audio.addEventListener("ended", function () {
      if (phraseAudio === audio) stopPhraseAudio();
    });
    audio.play().catch(function () {
      if (phraseAudio === audio) stopPhraseAudio();
    });
  }

  function fold(text) {
    return String(text).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function loadYenRate() {
    try {
      const saved = parseNum(localStorage.getItem("japon-yen-rate"), "rate");
      if (saved && saved > 0) return saved;
    } catch (error) {}
    return 2.9;
  }

  function saveYenRate(rate) {
    try { localStorage.setItem("japon-yen-rate", String(rate)); } catch (error) {}
  }

  function loadUsdRate() {
    try {
      const saved = parseNum(localStorage.getItem("japon-usd-rate"), "rate");
      if (saved && saved > 0) return saved;
    } catch (error) {}
    return 505;
  }

  function saveUsdRate(rate) {
    try { localStorage.setItem("japon-usd-rate", String(rate)); } catch (error) {}
  }

  function loadEurRate() {
    try {
      const saved = parseNum(localStorage.getItem("japon-eur-rate"), "rate");
      if (saved && saved > 0) return saved;
    } catch (error) {}
    return 517;
  }

  function saveEurRate(rate) {
    try { localStorage.setItem("japon-eur-rate", String(rate)); } catch (error) {}
  }

  function parseNum(value, mode) {
    const text = String(value == null ? "" : value).trim().replace(/\s/g, "");
    if (!text) return null;
    const hasComma = text.indexOf(",") >= 0;
    const dots = text.split(".").length - 1;
    let norm = text;
    if (hasComma || mode === "money") norm = text.replace(/\./g, "").replace(",", ".");
    else if (mode !== "rate" && (dots > 1 || (dots === 1 && /\.\d{3}$/.test(text)))) norm = text.replace(/\./g, "");
    const number = Number(norm);
    return Number.isFinite(number) ? number : null;
  }

  function formatAmount(number) {
    if (!Number.isFinite(number)) return "";
    const negative = number < 0;
    const rounded = Math.round(Math.abs(number) * 100) / 100;
    const bits = rounded.toFixed(2).split(".");
    const grouped = bits[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const tail = bits[1].replace(/0+$/, "");
    return (negative ? "-" : "") + grouped + (tail ? "," + tail : "");
  }

  function formatAmountText(raw) {
    const cleaned = String(raw).replace(/[^\d,]/g, "");
    const comma = cleaned.indexOf(",");
    let ints = comma >= 0 ? cleaned.slice(0, comma) : cleaned;
    const decs = comma >= 0 ? cleaned.slice(comma + 1).replace(/\D/g, "").slice(0, 2) : "";
    ints = ints.replace(/^0+(?=\d)/, "");
    if (!ints && comma < 0) return "";
    if (!ints) ints = "0";
    const grouped = ints.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return comma >= 0 ? grouped + "," + decs : grouped;
  }

  function groupAmount(input) {
    const formatted = formatAmountText(input.value);
    if (formatted === input.value) return;
    const start = input.selectionStart;
    const before = start == null ? "" : input.value.slice(0, start);
    const commaBefore = before.indexOf(",") >= 0;
    input.value = formatted;
    if (start == null || !input.setSelectionRange) return;
    let pos = formatted.length;
    if (commaBefore) {
      const commaAt = formatted.indexOf(",");
      const wanted = before.slice(before.indexOf(",") + 1).replace(/\D/g, "").length;
      let seen = 0;
      pos = commaAt + 1;
      for (let i = commaAt + 1; i <= formatted.length; i++) {
        if (seen === wanted) { pos = i; break; }
        if (i < formatted.length && /\d/.test(formatted.charAt(i))) seen++;
        pos = i + 1;
      }
    } else {
      const wanted = before.replace(/\D/g, "").length;
      let seen = 0;
      pos = 0;
      for (let i = 0; i < formatted.length; i++) {
        if (formatted.charAt(i) === ",") { pos = i; break; }
        if (/\d/.test(formatted.charAt(i))) seen++;
        pos = i + 1;
        if (seen === wanted) break;
      }
    }
    input.setSelectionRange(pos, pos);
  }

  function formatRate(number) {
    return new Intl.NumberFormat("es-CR", { minimumFractionDigits: 2, maximumFractionDigits: 4 }).format(number);
  }

  function formatMoney(number) {
    return formatAmount(number);
  }

  function readSpot() {
    if (spotMemory) return spotMemory;
    try { spotMemory = JSON.parse(localStorage.getItem("japon-spot") || "null"); } catch (error) { spotMemory = null; }
    return spotMemory;
  }

  function writeSpot(patch) {
    spotMemory = Object.assign(readSpot() || {}, patch);
    try { localStorage.setItem("japon-spot", JSON.stringify(spotMemory)); } catch (error) {}
  }

  function showCachedSpot() {
    const spot = readSpot();
    if (!spot) return;
    if (typeof spot.cr === "number") el.tempCr.textContent = spot.cr + "°";
    if (typeof spot.here === "number") el.tempHere.textContent = spot.here + "°";
    if (spot.name) paintHerePlace(spot.name);
  }

  function paintClocks() {
    if (!clockLive) return;
    writeClockInputs(new Date(), "");
  }

  function applyClock(source) {
    if (clockWriting) return;
    const input = source === "cr" ? el.timeCr : el.timeJp;
    const bits = String(input.value || "").split(":");
    if (bits.length < 2) return;
    const hour = Number(bits[0]);
    const minute = Number(bits[1]);
    if (!Number.isFinite(hour) || !Number.isFinite(minute)) return;
    clockLive = false;
    const zone = source === "cr" ? "America/Costa_Rica" : (data.timezone || "Asia/Tokyo");
    const today = zoneParts(new Date(), zone);
    writeClockInputs(dateInZone(zone, today, hour, minute), source);
  }

  function writeClockInputs(date, skip) {
    const crZone = "America/Costa_Rica";
    const jpZone = data.timezone || "Asia/Tokyo";
    const cr = zoneParts(date, crZone);
    const jp = zoneParts(date, jpZone);
    clockWriting = true;
    if (skip !== "cr") el.timeCr.value = hhmm(cr);
    if (skip !== "jp") el.timeJp.value = hhmm(jp);
    clockWriting = false;
    const crKey = cr.year + cr.month + cr.day;
    const jpKey = jp.year + jp.month + jp.day;
    el.timeCrDay.textContent = dayRelation(date, crZone, crKey, jpKey);
    el.timeJpDay.textContent = dayRelation(date, jpZone, jpKey, crKey);
  }

  function zoneParts(date, zone) {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23"
    }).formatToParts(date);
    const bag = {};
    parts.forEach(function (part) { bag[part.type] = part.value; });
    return bag;
  }

  function hhmm(parts) {
    const hour = parts.hour === "24" ? "00" : parts.hour;
    return hour.padStart(2, "0") + ":" + parts.minute.padStart(2, "0");
  }

  function dateInZone(zone, today, hour, minute) {
    const wanted = Date.UTC(Number(today.year), Number(today.month) - 1, Number(today.day), hour, minute);
    let utc = wanted;
    for (let i = 0; i < 3; i++) {
      const seen = zoneParts(new Date(utc), zone);
      const got = Date.UTC(Number(seen.year), Number(seen.month) - 1, Number(seen.day), Number(seen.hour === "24" ? "0" : seen.hour), Number(seen.minute));
      utc += wanted - got;
    }
    return new Date(utc);
  }

  function dayRelation(date, zone, key, otherKey) {
    const weekday = new Intl.DateTimeFormat("es-CR", { timeZone: zone, weekday: "short" }).format(date);
    if (key > otherKey) return weekday + " · día siguiente";
    if (key < otherKey) return weekday + " · día anterior";
    return weekday + " · mismo día";
  }

  function ensureSpot() {
    paintClocks();
    showCachedSpot();
    loadCrTemp();
    if (!spotAsked) {
      spotAsked = true;
      loadHereTemp();
    }
  }

  function readTemp(lat, lon) {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=" +
      encodeURIComponent(lat) + "&longitude=" + encodeURIComponent(lon) +
      "&current=temperature_2m";
    return fetch(url).then(function (response) {
      if (!response.ok) throw new Error("weather");
      return response.json();
    }).then(function (body) {
      const value = body && body.current && body.current.temperature_2m;
      if (typeof value !== "number") throw new Error("weather");
      return Math.round(value);
    });
  }

  function paintHerePlace(name) {
    el.herePlace.textContent = name || "";
    el.herePlace.hidden = !name;
  }

  function readPlace(lat, lon) {
    const url = "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
      encodeURIComponent(lat) + "&longitude=" + encodeURIComponent(lon) +
      "&localityLanguage=es";
    return fetch(url).then(function (response) {
      if (!response.ok) throw new Error("place");
      return response.json();
    }).then(function (body) {
      if (!body) return "";
      return body.city || body.locality || body.principalSubdivision || "";
    }).catch(function () { return ""; });
  }

  function loadCrTemp() {
    if (Date.now() - crStamp < 600000) return;
    crStamp = Date.now();
    readTemp(9.9281, -84.0907).then(function (temp) {
      el.tempCr.textContent = temp + "°";
      writeSpot({ cr: temp });
    }).catch(function () {
      crStamp = 0;
      if (el.tempCr.textContent === "—") el.tempCr.textContent = "Sin señal";
    });
  }

  function loadHereTemp() {
    if (!navigator.geolocation) {
      el.tempHere.textContent = "Sin GPS";
      return;
    }
    el.hereLocate.textContent = "Buscando…";
    navigator.geolocation.getCurrentPosition(function (pos) {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      readTemp(lat, lon).then(function (temp) {
        el.tempHere.textContent = temp + "°";
        writeSpot({ here: temp });
        el.hereLocate.textContent = "Actualizar";
      }).catch(function () {
        el.hereLocate.textContent = "Reintentar";
        if (el.tempHere.textContent === "—") el.tempHere.textContent = "Sin señal";
      });
      readPlace(lat, lon).then(function (name) {
        if (!name) return;
        paintHerePlace(name);
        writeSpot({ name: name });
      });
    }, function (error) {
      el.hereLocate.textContent = "Ubicar";
      el.tempHere.textContent = error && error.code === 1 ? "Sin permiso" : "Sin señal";
    }, { enableHighAccuracy: false, timeout: 12000, maximumAge: 300000 });
  }

  function paintYen(source) {
    const yenRate = parseNum(el.yenRate.value, "rate");
    const usdRate = parseNum(el.usdRate.value, "rate");
    const eurRate = parseNum(el.eurRate.value, "rate");
    if (yenRate && yenRate > 0) saveYenRate(yenRate);
    if (usdRate && usdRate > 0) saveUsdRate(usdRate);
    if (eurRate && eurRate > 0) saveEurRate(eurRate);
    const yen = parseNum(el.yenAmount.value, "money");
    const crc = parseNum(el.crcAmount.value, "money");
    const usd = parseNum(el.usdAmount.value, "money");
    const eur = parseNum(el.eurAmount.value, "money");
    if (!yenRate || yenRate <= 0 || !usdRate || usdRate <= 0 || !eurRate || eurRate <= 0) {
      el.yenCrcText.textContent = "₡0";
      el.yenEq.textContent = "Escribí el cambio";
      return;
    }

    let nextYen = null;
    let nextCrc = null;
    let nextUsd = null;
    let nextEur = null;

    if (source === "crc") {
      if (crc == null) {
        el.yenAmount.value = "";
        el.usdAmount.value = "";
        el.eurAmount.value = "";
        el.yenCrcText.textContent = "₡0";
        el.yenEq.textContent = "¥0 · $0 · €0";
        return;
      }
      nextCrc = crc;
      nextYen = crc / yenRate;
      nextUsd = crc / usdRate;
      nextEur = crc / eurRate;
      el.yenAmount.value = formatAmount(nextYen);
      el.usdAmount.value = formatAmount(nextUsd);
      el.eurAmount.value = formatAmount(nextEur);
    } else if (source === "usd") {
      if (usd == null) {
        el.yenAmount.value = "";
        el.crcAmount.value = "";
        el.eurAmount.value = "";
        el.yenCrcText.textContent = "₡0";
        el.yenEq.textContent = "¥0 · $0 · €0";
        return;
      }
      nextUsd = usd;
      nextCrc = usd * usdRate;
      nextYen = nextCrc / yenRate;
      nextEur = nextCrc / eurRate;
      el.crcAmount.value = formatAmount(nextCrc);
      el.yenAmount.value = formatAmount(nextYen);
      el.eurAmount.value = formatAmount(nextEur);
    } else if (source === "eur") {
      if (eur == null) {
        el.yenAmount.value = "";
        el.crcAmount.value = "";
        el.usdAmount.value = "";
        el.yenCrcText.textContent = "₡0";
        el.yenEq.textContent = "¥0 · $0 · €0";
        return;
      }
      nextEur = eur;
      nextCrc = eur * eurRate;
      nextYen = nextCrc / yenRate;
      nextUsd = nextCrc / usdRate;
      el.crcAmount.value = formatAmount(nextCrc);
      el.yenAmount.value = formatAmount(nextYen);
      el.usdAmount.value = formatAmount(nextUsd);
    } else {
      if (yen == null) {
        el.crcAmount.value = "";
        el.usdAmount.value = "";
        el.eurAmount.value = "";
        el.yenCrcText.textContent = "₡0";
        el.yenEq.textContent = "¥0 · $0 · €0";
        return;
      }
      nextYen = yen;
      nextCrc = yen * yenRate;
      nextUsd = nextCrc / usdRate;
      nextEur = nextCrc / eurRate;
      el.crcAmount.value = formatAmount(nextCrc);
      el.usdAmount.value = formatAmount(nextUsd);
      el.eurAmount.value = formatAmount(nextEur);
    }

    el.yenCrcText.textContent = "₡" + formatMoney(nextCrc);
    el.yenEq.textContent = "¥" + formatMoney(nextYen) + " · $" + formatMoney(nextUsd) + " · €" + formatMoney(nextEur);
  }

  function renderFood() {
    const root = el.screenFood;
    root.replaceChildren();
    const cities = ["Todas"].concat(data.guide.restaurants.map(function (city) { return city.city; }));
    const chips = document.createElement("div");
    chips.className = "chips";
    cities.forEach(function (city) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chip" + (city === foodCity ? " on" : "");
      button.textContent = city;
      button.addEventListener("click", function () {
        foodCity = city;
        renderFood();
        remember();
      });
      chips.append(button);
    });
    root.append(chips);
    data.guide.restaurants.forEach(function (city) {
      if (foodCity !== "Todas" && city.city !== foodCity) return;
      const heading = document.createElement("h3");
      heading.className = "h3";
      heading.textContent = city.city;
      root.append(heading);
      city.groups.forEach(function (group) {
        const list = document.createElement("div");
        list.className = "list";
        const grp = document.createElement("div");
        grp.className = "grp";
        grp.textContent = group.title;
        list.append(grp);
        group.items.forEach(function (row) {
          const item = document.createElement("article");
          item.className = "rest";
          const name = document.createElement("div");
          name.className = "nm";
          name.textContent = row.name;
          const meta = document.createElement("div");
          meta.className = "rz";
          meta.textContent = [row.kind, row.area].filter(Boolean).join(" · ");
          item.append(name, meta);
          list.append(item);
        });
        root.append(list);
      });
    });
  }

  function renderSos() {
    const root = el.screenSos;
    const bag = data.emergencies || {};
    root.replaceChildren();
    const lead = document.createElement("p");
    lead.className = "lead";
    lead.textContent = "Tocá el número para llamar.";
    root.append(lead);

    const official = document.createElement("div");
    official.className = "sos-grid";
    official.append(listBlock("En Japón", (bag.japan || []).map(callCard)));
    official.append(listBlock("Embajada", (bag.embassy || []).map(callCard)));
    const insure = bag.insurance || [];
    if (insure[0]) official.append(listBlock("Póliza INS Japón", [callCard(insure[0])]));
    if (insure[1]) official.append(listBlock("Póliza INS USA", [callCard(insure[1])]));
    root.append(official);

    const peopleWrap = document.createElement("div");
    peopleWrap.className = "sos-people";
    const peopleTitle = document.createElement("h2");
    peopleTitle.className = "sos-title";
    peopleTitle.textContent = "Contacto de emergencia";
    const people = document.createElement("div");
    people.className = "sos-grid";
    (bag.people || []).forEach(function (person) {
      const cards = (person.contacts || []).map(callCard);
      if (!cards.length) {
        const empty = document.createElement("article");
        empty.className = "row call";
        const miss = document.createElement("div");
        miss.className = "dt";
        miss.textContent = "Falta contacto";
        empty.append(miss);
        cards.push(empty);
      }
      if (person.policy) {
        const pol = document.createElement("article");
        pol.className = "row call";
        const meta = document.createElement("div");
        meta.className = "dt";
        meta.textContent = person.policy;
        pol.append(meta);
        cards.push(pol);
      }
      people.append(listBlock(person.who, cards, person.files));
    });
    peopleWrap.append(peopleTitle, people);
    root.append(peopleWrap);
  }

  function callCard(row) {
    const card = document.createElement("article");
    card.className = "row call";
    const head = document.createElement("div");
    head.className = "nm";
    head.textContent = row.name;
    card.append(head);
    if (row.dial && row.phone) {
      const link = document.createElement("a");
      link.className = "call-btn";
      link.href = "tel:" + row.dial;
      link.textContent = row.phone;
      link.setAttribute("aria-label", "Llamar a " + row.name + " " + row.phone);
      card.append(link);
    }
    if (row.note) {
      const tip = document.createElement("button");
      tip.type = "button";
      tip.className = "call-info";
      tip.setAttribute("aria-label", "Más info de " + row.name);
      tip.setAttribute("aria-expanded", "false");
      tip.textContent = "i";
      const note = document.createElement("div");
      note.className = "call-tag";
      note.hidden = true;
      note.textContent = row.note;
      tip.addEventListener("click", function (event) {
        event.preventDefault();
        const open = note.hidden;
        el.screenSos.querySelectorAll(".call-tag").forEach(function (tag) {
          tag.hidden = true;
        });
        el.screenSos.querySelectorAll(".call-info").forEach(function (btn) {
          btn.setAttribute("aria-expanded", "false");
          btn.classList.remove("on");
        });
        if (open) {
          note.hidden = false;
          tip.setAttribute("aria-expanded", "true");
          tip.classList.add("on");
        }
      });
      card.append(tip, note);
    }
    return card;
  }

  function listBlock(title, cards, files) {
    const block = document.createElement("section");
    const head = document.createElement("div");
    head.className = "h3-row";
    const h = document.createElement("h3");
    h.className = "h3";
    h.textContent = title;
    head.append(h);
    if (files && files.length) {
      const docs = document.createElement("div");
      docs.className = "h3-files";
      files.forEach(function (file) {
        const a = document.createElement("a");
        a.href = file.url;
        a.download = "";
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = file.name;
        docs.append(a);
      });
      head.append(docs);
    }
    const list = document.createElement("div");
    list.className = "list";
    cards.forEach(function (card) { list.append(card); });
    block.append(head, list);
    return block;
  }

  function rowCard(title, meta, detail) {
    const card = document.createElement("article");
    card.className = "row";
    const h = document.createElement("div");
    h.className = "nm";
    h.textContent = title;
    card.append(h);
    if (meta) {
      const p = document.createElement("div");
      p.className = "dt";
      p.textContent = meta;
      card.append(p);
    }
    if (detail) {
      const p = document.createElement("div");
      p.className = "dt";
      p.textContent = detail;
      card.append(p);
    }
    return card;
  }

  function sentence(parts) {
    return parts
      .filter(Boolean)
      .map(function (part) { return String(part).replace(/\.+\s*$/, ""); })
      .join(". ") + ".";
  }
})();
