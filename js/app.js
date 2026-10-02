(function () {
  const data = window.ITINERARY;
  const days = data.days;

  const el = {
    tabDay: document.getElementById("tab-day"),
    tabGuide: document.getElementById("tab-guide"),
    dayHead: document.getElementById("day-head"),
    prev: document.getElementById("prev"),
    next: document.getElementById("next"),
    weekday: document.getElementById("weekday"),
    dateLabel: document.getElementById("date-label"),
    city: document.getElementById("city-label"),
    who: document.getElementById("who-label"),
    strip: document.getElementById("strip"),
    now: document.getElementById("now"),
    screenDay: document.getElementById("screen-day"),
    screenGuide: document.getElementById("screen-guide"),
    summary: document.getElementById("summary"),
    stay: document.getElementById("stay"),
    tips: document.getElementById("tips"),
    timeline: document.getElementById("timeline"),
    swipe: document.getElementById("swipe-zone")
  };

  const params = new URLSearchParams(location.search);
  const demo = params.get("ahora");
  let index = startIndex();
  let mode = "day";
  let timer = 0;

  const kinds = {
    vuelo: "Vuelo",
    tren: "Tren",
    traslado: "Traslado",
    comida: "Comida",
    actividad: "Actividad",
    hospedaje: "Hospedaje"
  };

  el.prev.addEventListener("click", function () { go(-1); });
  el.next.addEventListener("click", function () { go(1); });
  el.tabDay.addEventListener("click", function () { setMode("day"); });
  el.tabGuide.addEventListener("click", function () { setMode("guide"); });

  document.addEventListener("keydown", function (event) {
    if (mode !== "day") return;
    if (event.key === "ArrowUp") { event.preventDefault(); go(-1); }
    if (event.key === "ArrowDown") { event.preventDefault(); go(1); }
  });

  let touchY = null;
  el.swipe.addEventListener("touchstart", function (event) {
    touchY = event.changedTouches[0].clientY;
  }, { passive: true });
  el.swipe.addEventListener("touchend", function (event) {
    if (touchY == null || mode !== "day") return;
    const dy = event.changedTouches[0].clientY - touchY;
    if (dy > 48) go(-1);
    else if (dy < -48) go(1);
    touchY = null;
  }, { passive: true });

  renderStrip();
  renderGuide();
  render();
  timer = window.setInterval(function () {
    if (mode === "day") render({ keepScroll: true });
  }, 30000);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(function () {});
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
    return String(Number(bits[0])) + ":" + bits[1];
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
  }

  function setMode(next) {
    mode = next;
    const dayOn = next === "day";
    el.tabDay.classList.toggle("is-on", dayOn);
    el.tabGuide.classList.toggle("is-on", !dayOn);
    el.tabDay.setAttribute("aria-pressed", dayOn ? "true" : "false");
    el.tabGuide.setAttribute("aria-pressed", dayOn ? "false" : "true");
    el.dayHead.hidden = !dayOn;
    el.screenDay.hidden = !dayOn;
    el.screenGuide.hidden = dayOn;
    el.next.hidden = !dayOn;
    if (dayOn) render();
    window.scrollTo(0, 0);
  }

  function render(options) {
    const keep = options && options.keepScroll;
    const y = keep ? window.scrollY : 0;
    const day = days[index];
    const live = day.date === tokyoKey(tokyoNow());
    const nowMin = live ? tokyoMinutes(tokyoNow()) : null;

    el.weekday.textContent = day.weekday;
    el.dateLabel.textContent = Number(day.date.slice(8)) + " de octubre";
    el.city.textContent = day.city;
    el.who.textContent = day.who.join(" · ");
    el.summary.textContent = day.summary;
    el.prev.disabled = index === 0;
    el.next.disabled = index === days.length - 1;
    el.prev.textContent = index === 0
      ? "Inicio del viaje"
      : "↑ " + days[index - 1].weekday + " " + Number(days[index - 1].date.slice(8));
    el.next.textContent = index === days.length - 1
      ? "Fin del viaje"
      : days[index + 1].weekday + " " + Number(days[index + 1].date.slice(8)) + " ↓";

    paintStay(day);
    paintTips(day);
    paintNow(day, live, nowMin);
    paintTimeline(day, live, nowMin);
    markStrip();

    if (keep) window.scrollTo(0, y);
    const current = el.timeline.querySelector(".is-now");
    if (live && current && !keep) {
      current.scrollIntoView({ block: "center" });
    }
  }

  function paintStay(day) {
    el.stay.replaceChildren();
    const title = document.createElement("strong");
    title.textContent = "Esta noche · " + day.lodging.name;
    const detail = document.createElement("p");
    detail.textContent = day.lodging.detail;
    el.stay.append(title, detail);
    if (day.pass) {
      const pass = document.createElement("p");
      pass.textContent = "Pase · " + day.pass;
      el.stay.append(pass);
    }
    el.stay.append(mapsLink(day.lodging.maps, "Ver hospedaje en Maps", false));
  }

  function paintTips(day) {
    el.tips.replaceChildren();
    day.tips.forEach(function (tip) {
      const li = document.createElement("li");
      li.textContent = tip;
      el.tips.append(li);
    });
  }

  function paintNow(day, live, nowMin) {
    if (!live) {
      el.now.hidden = true;
      el.now.replaceChildren();
      return;
    }
    const timed = day.events
      .map(function (event, i) { return { event: event, index: i }; })
      .filter(function (row) { return row.event.time; });

    el.now.hidden = false;
    el.now.replaceChildren();
    const strong = document.createElement("strong");
    const span = document.createElement("span");

    if (!timed.length) {
      strong.textContent = "Hoy en Japón";
      span.textContent = "Este día no tiene horas fijas.";
    } else if (nowMin < minutesOf(timed[0].event.time)) {
      const wait = minutesOf(timed[0].event.time) - nowMin;
      strong.textContent = "Hoy en Japón · el día empieza en " + formatGap(wait);
      span.textContent = formatClock(timed[0].event.time) + " · " + timed[0].event.title;
    } else {
      let current = timed[0];
      for (let i = 0; i < timed.length; i += 1) {
        if (minutesOf(timed[i].event.time) <= nowMin) current = timed[i];
      }
      const later = timed.find(function (row) { return minutesOf(row.event.time) > nowMin; });
      strong.textContent = "Ahora · " + current.event.title;
      if (later) {
        span.textContent = "Faltan " + formatGap(minutesOf(later.event.time) - nowMin) + " para " + later.event.title;
      } else {
        span.textContent = "No queda otra actividad con hora. Esta noche: " + day.lodging.name;
      }
    }
    el.now.append(strong, span);
  }

  function paintTimeline(day, live, nowMin) {
    el.timeline.replaceChildren();
    const currentIndex = live ? currentEventIndex(day, nowMin) : -1;

    day.events.forEach(function (event, i) {
      const li = document.createElement("li");
      li.className = "event" + (i === currentIndex ? " is-now" : "");

      const card = document.createElement("article");
      card.className = "card";

      if (event.area && (i === 0 || day.events[i - 1].area !== event.area)) {
        const area = document.createElement("p");
        area.className = "area";
        area.textContent = event.area;
        card.append(area);
      }

      const when = document.createElement("div");
      when.className = "when";
      const time = document.createElement("p");
      time.className = "time";
      time.textContent = clockLabel(event);
      const kind = document.createElement("p");
      kind.className = "kind";
      kind.textContent = kinds[event.type] || "Actividad";
      when.append(time, kind);

      const title = document.createElement("h2");
      title.textContent = event.title;

      card.append(when, title);

      if (event.detail) {
        const detail = document.createElement("p");
        detail.className = "detail";
        detail.textContent = event.detail;
        card.append(detail);
      }
      if (event.who) {
        const who = document.createElement("p");
        who.className = "who-line";
        who.textContent = event.who;
        card.append(who);
      }
      if (event.duration) {
        const duration = document.createElement("p");
        duration.className = "duration";
        duration.textContent = "Duración · " + event.duration;
        card.append(duration);
      }
      if (event.price) {
        const price = document.createElement("p");
        price.className = "duration";
        price.textContent = "Por persona · " + event.price;
        card.append(price);
      }

      const badges = document.createElement("div");
      badges.className = "badges";
      (event.badges || []).forEach(function (label) {
        const badge = document.createElement("span");
        badge.className = "badge " + badgeClass(label);
        badge.textContent = label;
        badges.append(badge);
      });
      if (badges.childNodes.length) card.append(badges);

      const gap = document.createElement("p");
      const gapInfo = gapText(day.events, i);
      gap.className = "gap" + (gapInfo.soft ? " soft" : "");
      gap.textContent = gapInfo.text;
      card.append(gap);

      const next = day.events[i + 1];
      const travel = event.type === "tren" || event.type === "traslado";
      if (travel && next && next.maps && event.maps) {
        card.append(directionsLink(event.maps, next.maps));
      } else if (event.maps) {
        card.append(mapsLink(event.maps, "Ver en Maps", true));
      }

      li.append(card);
      el.timeline.append(li);
    });
  }

  function currentEventIndex(day, nowMin) {
    let found = -1;
    day.events.forEach(function (event, i) {
      if (event.time && minutesOf(event.time) <= nowMin) found = i;
    });
    return found;
  }

  function clockLabel(event) {
    if (!event.time) return "A continuación";
    const start = (event.approx ? "≈ " : "") + formatClock(event.time);
    if (!event.timeEnd) return start;
    return start + "–" + formatClock(event.timeEnd);
  }

  function gapText(events, i) {
    const event = events[i];
    const next = events[i + 1];
    if (!next) return { soft: true, text: "Cierra el día" };
    if (!event.time || !next.time) {
      return { soft: true, text: "Siguiente · " + next.title };
    }
    const delta = minutesOf(next.time) - minutesOf(event.time);
    const approx = event.approx || next.approx;
    return {
      soft: false,
      text: (approx ? "≈ " : "") + formatGap(delta) + " para " + next.title
    };
  }

  function badgeClass(label) {
    if (label.indexOf("Pagar") >= 0 || label.indexOf("Reservar") >= 0) return "pay";
    if (label.indexOf("Pagado") >= 0 || label.indexOf("Incluid") >= 0) return "ok";
    if (label.indexOf("Gratis") >= 0 || label.indexOf("Pase") >= 0 || label.indexOf("Pass") >= 0) return "free";
    return "";
  }

  function mapsLink(query, label) {
    const a = document.createElement("a");
    a.className = "maps";
    a.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
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
      button.textContent = String(Number(day.date.slice(8)));
      button.setAttribute("aria-label", day.weekday + " " + Number(day.date.slice(8)) + " de octubre");
      if (day.date === today) button.classList.add("is-today");
      button.addEventListener("click", function () {
        index = i;
        window.scrollTo(0, 0);
        render();
      });
      el.strip.append(button);
    });
  }

  function markStrip() {
    const buttons = el.strip.querySelectorAll("button");
    buttons.forEach(function (button, i) {
      button.classList.toggle("is-on", i === index);
      if (i === index) button.scrollIntoView({ inline: "center", block: "nearest" });
    });
  }

  function renderGuide() {
    const guide = data.guide;
    const root = el.screenGuide;
    root.className = "guide";
    root.replaceChildren();

    const title = document.createElement("h2");
    title.textContent = "Guía del viaje";
    const lead = document.createElement("p");
    lead.className = "lead";
    lead.textContent = "Hospedajes, entradas, restaurantes, apps y frases. Los seis: " + data.travelers.join(", ") + ".";
    root.append(title, lead);

    const chips = document.createElement("div");
    chips.className = "chips";
    [
      ["hospedajes", "Hospedajes"],
      ["entradas", "Entradas"],
      ["pases", "Pases"],
      ["restaurantes", "Restaurantes"],
      ["apps", "Apps"],
      ["frases", "Frases"]
    ].forEach(function (item) {
      const a = document.createElement("a");
      a.href = "#guia-" + item[0];
      a.textContent = item[1];
      chips.append(a);
    });
    root.append(chips);

    root.append(section("guia-hospedajes", "Hospedajes", guide.lodgings.map(function (row) {
      return itemCard(
        row.name,
        row.nights + " · " + row.city + " · " + row.who,
        sentence([row.price, row.cancel, "Reservó " + row.booked])
      );
    })));

    root.append(section("guia-entradas", "Entradas ya compradas", guide.tickets.map(function (row) {
      return itemCard(row.name, row.when, row.who + (row.platform && row.platform !== "—" ? " · " + row.platform : ""));
    })));

    const payTitle = document.createElement("h3");
    payTitle.textContent = "Para pagar allá";
    const payBlock = document.createElement("div");
    guide.payOnSite.forEach(function (row) {
      payBlock.append(itemCard(row.place, row.day, row.price + " por persona"));
    });
    root.lastChild.append(payTitle, payBlock);

    root.append(section("guia-pases", "Pases", guide.passes.map(function (row) {
      return itemCard(row.name, row.price, row.detail);
    })));

    const food = document.createElement("section");
    food.className = "block";
    food.id = "guia-restaurantes";
    const foodTitle = document.createElement("h3");
    foodTitle.textContent = "Restaurantes";
    food.append(foodTitle);
    guide.restaurants.forEach(function (city) {
      const h = document.createElement("h3");
      h.textContent = city.city;
      food.append(h);
      city.groups.forEach(function (group) {
        const sub = document.createElement("p");
        sub.className = "duration";
        sub.textContent = group.title;
        food.append(sub);
        group.items.forEach(function (row) {
          food.append(itemCard(row.name, row.kind, row.area));
        });
      });
    });
    root.append(food);

    const apps = document.createElement("section");
    apps.className = "block";
    apps.id = "guia-apps";
    const appsTitle = document.createElement("h3");
    appsTitle.textContent = "Apps";
    apps.append(appsTitle);
    guide.apps.forEach(function (group) {
      const sub = document.createElement("p");
      sub.className = "duration";
      sub.textContent = group.group;
      apps.append(sub);
      group.items.forEach(function (row) {
        apps.append(itemCard(row.name, "", row.note));
      });
    });
    const linksTitle = document.createElement("h3");
    linksTitle.textContent = "Sitios de trenes";
    apps.append(linksTitle);
    guide.links.forEach(function (row) {
      const card = document.createElement("article");
      card.className = "item";
      const a = document.createElement("a");
      a.href = row.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = row.name;
      card.append(a);
      apps.append(card);
    });
    root.append(apps);

    const phrases = document.createElement("section");
    phrases.className = "block";
    phrases.id = "guia-frases";
    const phrasesTitle = document.createElement("h3");
    phrasesTitle.textContent = "Frases";
    phrases.append(phrasesTitle);
    guide.phrases.forEach(function (row) {
      const card = document.createElement("article");
      card.className = "item phrase";
      const jp = document.createElement("b");
      jp.textContent = row.jp;
      const es = document.createElement("span");
      es.textContent = row.es;
      const when = document.createElement("p");
      when.textContent = row.when;
      card.append(jp, es, when);
      phrases.append(card);
    });
    root.append(phrases);
  }

  function sentence(parts) {
    return parts
      .filter(Boolean)
      .map(function (part) { return String(part).replace(/\.+\s*$/, ""); })
      .join(". ") + ".";
  }

  function section(id, title, cards) {
    const block = document.createElement("section");
    block.className = "block";
    block.id = id;
    const h = document.createElement("h3");
    h.textContent = title;
    block.append(h);
    cards.forEach(function (card) { block.append(card); });
    return block;
  }

  function itemCard(title, meta, detail) {
    const card = document.createElement("article");
    card.className = "item";
    const h = document.createElement("h4");
    h.textContent = title;
    card.append(h);
    if (meta) {
      const p = document.createElement("p");
      p.textContent = meta;
      card.append(p);
    }
    if (detail) {
      const p = document.createElement("p");
      p.textContent = detail;
      card.append(p);
    }
    return card;
  }
})();
