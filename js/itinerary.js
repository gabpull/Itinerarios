/* Itinerario Japón · 5–24 octubre 2026. Datos tomados del PDF del viaje. */
window.ITINERARY = {
  timezone: "Asia/Tokyo",
  title: "Japón",
  range: "5–24 octubre 2026",
  travelers: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
  days: [
    {
      date: "2026-10-05",
      weekday: "Lunes",
      city: "Tokio",
      summary: "Llega Dani a las 5:00. El resto del grupo todavía no está.",
      who: ["Dani"],
      lodging: {
        name: "Plat Hostel Keikyu Asakusa Station",
        detail: "Solo Dani esta noche. Booking a su nombre.",
        maps: "Plat Hostel Keikyu Asakusa Station, Tokyo"
      },
      pass: null,
      tips: ["El itinerario no detalla más actividades este día."],
      events: [
        {
          time: "05:00",
          type: "vuelo",
          area: "Llegada",
          title: "Llega Dani a Tokio",
          detail: "Siguiente paso: Plat Hostel Keikyu Asakusa Station.",
          maps: "Plat Hostel Keikyu Asakusa Station, Tokyo",
          badges: []
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Dormir en Plat Hostel Keikyu Asakusa",
          detail: "Asakusa. Cancelación gratis hasta el 3 de octubre.",
          maps: "Plat Hostel Keikyu Asakusa Station, Tokyo",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-06",
      weekday: "Martes",
      city: "Tokio",
      summary: "Dani ya está en Asakusa. Chente y Marco llegan a las 20:00.",
      who: ["Dani", "Chente", "Marco"],
      lodging: {
        name: "Plat Hostel Keikyu Asakusa Station",
        detail: "Dani, Chente y Marco. Dos reservas de Booking.",
        maps: "Plat Hostel Keikyu Asakusa Station, Tokyo"
      },
      pass: null,
      tips: ["De día el PDF no marca actividades: la cita fija es la llegada de la noche."],
      events: [
        {
          time: "20:00",
          type: "vuelo",
          area: "Llegada",
          title: "Llegan Chente y Marco",
          detail: "Van a Plat Hostel Keikyu Asakusa, donde ya está Dani.",
          maps: "Plat Hostel Keikyu Asakusa Station, Tokyo",
          badges: []
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Noche en Plat Hostel, Asakusa",
          detail: "Mañana salen los tres a las 6:00 desde Tokyo Station.",
          maps: "Plat Hostel Keikyu Asakusa Station, Tokyo",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-07",
      weekday: "Miércoles",
      city: "Koyasan",
      summary: "Shinkansen a las 6:00, Okunoin por la tarde y noche en el templo.",
      who: ["Dani", "Chente", "Marco"],
      lodging: {
        name: "Templo Shukubo Komyoin",
        detail: "Incluye cena y desayuno shojin ryori. Noche del 7 al 8.",
        maps: "Shukubo Komyoin, Koyasan"
      },
      pass: "Koyasan World Heritage Ticket · 2 días · ¥3.980",
      tips: [
        "En el Shinkansen, asiento E: lado del Monte Fuji.",
        "El Limited Express Nankai cobra ¥790 extra. El pase cubre el tren regular.",
        "Si el pase es voucher, canjearlo en la taquilla Nankai de Namba antes del torniquete."
      ],
      events: [
        {
          time: "06:00",
          type: "tren",
          area: "Desde Tokio",
          title: "Shinkansen Tokio–Osaka",
          detail: "Salida desde Tokyo Station. Unos 2 h 30 min. Boletos pagados (Chente, para Dani y Marco).",
          duration: "Unos 2 h 30 min",
          maps: "Tokyo Station",
          badges: ["Pagado"]
        },
        {
          time: "08:30",
          approx: true,
          type: "tren",
          area: "Desde Tokio",
          title: "Shin-Osaka → Namba",
          detail: "Tren local. Unos 15–20 min.",
          duration: "15–20 min",
          maps: "Shin-Osaka Station",
          badges: []
        },
        {
          time: "09:00",
          approx: true,
          type: "tren",
          area: "Desde Tokio",
          title: "Nankai: Namba → Gokurakubashi",
          detail: "Tren regular, unos 1 h 40 min. Incluido en el Koyasan World Heritage Ticket.",
          duration: "Unos 1 h 40 min",
          maps: "Namba Station, Osaka",
          badges: ["Pase Koyasan"]
        },
        {
          type: "traslado",
          area: "Desde Tokio",
          title: "Cable car y bus a Koyasan",
          detail: "Gokurakubashi–Koyasan y bus local. 20–30 min en total. Incluido en el pase.",
          duration: "20–30 min",
          maps: "Gokurakubashi Station",
          badges: ["Pase Koyasan"]
        },
        {
          time: "11:00",
          timeEnd: "11:30",
          type: "actividad",
          area: "Koyasan",
          title: "Llegada al Monte Koya",
          detail: "Ir directo al templo Komyoin y confirmar la hora de la cena.",
          maps: "Shukubo Komyoin, Koyasan",
          badges: []
        },
        {
          time: "12:15",
          approx: true,
          type: "comida",
          area: "Koyasan",
          title: "Almuerzo ligero",
          detail: "Algo rápido. La cena del templo es temprano, cerca de las 18:00, y es completa.",
          maps: "Koyasan",
          badges: []
        },
        {
          time: "14:30",
          type: "actividad",
          area: "Koyasan",
          title: "Cementerio Okunoin",
          detail: "Hasta el mausoleo de Kukai. Calcular 1 h 30 min–2 h. El bus entra en el pase.",
          duration: "1 h 30 min–2 h",
          maps: "Okunoin Cemetery, Koyasan",
          badges: ["Gratis"]
        },
        {
          time: "17:00",
          type: "hospedaje",
          area: "Koyasan",
          title: "Regreso a Komyoin",
          detail: "Check-in formal, ducha y jardines del templo.",
          maps: "Shukubo Komyoin, Koyasan",
          badges: []
        },
        {
          time: "18:00",
          type: "comida",
          area: "Noche",
          title: "Cena shojin ryori",
          detail: "Incluida en el templo. Varios platitos: tofu, verduras, setas, arroz, sopa y tempura vegetal.",
          maps: "Shukubo Komyoin, Koyasan",
          badges: ["Incluida"]
        }
      ]
    },
    {
      date: "2026-10-08",
      weekday: "Jueves",
      city: "Koyasan → Osaka",
      summary: "Mañana en el templo y regreso a Osaka. Llegan Mary, Nath y Caro.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Mini family trip Osaka rsg401",
        detail: "Esta noche duerme todo el grupo. Mary, Nath y Caro llegan directo a Osaka.",
        maps: "Namba, Osaka"
      },
      pass: "Koyasan World Heritage Ticket (vuelta incluida)",
      tips: [
        "20 % de descuento con el pase en Kongobuji, Kondo, Konpon Daito y Reihokan.",
        "Mary, Nath y Caro no suben a Koyasan: llegan a Osaka a dormir."
      ],
      events: [
        {
          time: "06:30",
          type: "actividad",
          area: "Koyasan",
          title: "Ceremonia matutina",
          detail: "Oración budista en el templo. Solo Dani, Chente y Marco.",
          who: "Dani, Chente y Marco",
          maps: "Shukubo Komyoin, Koyasan",
          badges: []
        },
        {
          time: "07:15",
          type: "actividad",
          area: "Koyasan",
          title: "Jardines de Komyoin",
          detail: "Antes del desayuno.",
          maps: "Shukubo Komyoin, Koyasan",
          badges: []
        },
        {
          time: "08:00",
          type: "comida",
          area: "Koyasan",
          title: "Desayuno shojin ryori",
          detail: "Incluido. Más simple que la cena: arroz, sopa, tofu y vegetales.",
          maps: "Shukubo Komyoin, Koyasan",
          badges: ["Incluido"]
        },
        {
          time: "09:00",
          type: "actividad",
          area: "Koyasan",
          title: "Kongobu-ji",
          detail: "Templo principal. También Kondo (Golden Hall) y Konpon Daito (pagoda).",
          maps: "Kongobuji, Koyasan",
          badges: ["Pase −20 %"]
        },
        {
          time: "10:00",
          type: "actividad",
          area: "Koyasan",
          title: "Danjo Garan",
          detail: "Recinto elevado de Kongobu-ji.",
          maps: "Danjo Garan, Koyasan",
          badges: ["Pase −20 %"]
        },
        {
          time: "11:00",
          type: "actividad",
          area: "Koyasan",
          title: "Puerta Daimon",
          detail: "Entrada gratis.",
          maps: "Daimon Gate, Koyasan",
          badges: ["Gratis"]
        },
        {
          time: "11:30",
          type: "comida",
          area: "Koyasan",
          title: "Almuerzo en Hanabishi",
          detail: "Shojin ryori. Conviene tener reserva.",
          maps: "Hanabishi, Koyasan",
          badges: ["Reservar"]
        },
        {
          type: "tren",
          area: "Hacia Osaka",
          title: "Regreso a Osaka",
          detail: "La vuelta entra en el pase. En Osaka se juntan con Mary, Nath y Caro.",
          maps: "Namba Station, Osaka",
          badges: ["Pase Koyasan"]
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Noche en Osaka",
          detail: "Mini family trip Osaka rsg401. Primera noche de los seis juntos. Reserva no reembolsable.",
          maps: "Namba, Osaka",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-09",
      weekday: "Viernes",
      city: "Osaka",
      summary: "Osaka centro desde las 6:30: castillo, Kuromon, Umeda y Dotonbori.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Mini family trip Osaka rsg401",
        detail: "Misma base hasta el 12 de octubre.",
        maps: "Namba, Osaka"
      },
      pass: "Osaka Amazing Pass · se usa el 9 y el 10",
      tips: ["Lleva efectivo para restaurantes pequeños.", "El almuerzo en Kuromon conviene dejarlo en 45–60 min."],
      events: [
        {
          time: "06:30",
          type: "actividad",
          area: "Mañana",
          title: "Namba Yasaka Shrine",
          detail: "Yasaka-jinja / Namba-jinja. Fundado en el 723. El santuario del gato gigante.",
          maps: "Namba Yasaka Shrine, Osaka",
          badges: ["Gratis"]
        },
        {
          time: "09:00",
          type: "actividad",
          area: "Mañana",
          title: "Castillo de Osaka",
          detail: "Hay mucho que ver. Con el pase, horario de referencia 9:00–18:00.",
          maps: "Osaka Castle",
          badges: ["Osaka Amazing Pass"]
        },
        {
          type: "actividad",
          area: "Mañana",
          title: "Paseo en barco Osaka-jo Gozabune",
          detail: "Con el pase, de 10:00 a 16:30. Sin hora fija en el itinerario: va después del castillo.",
          maps: "Osaka Castle Gozabune",
          badges: ["Osaka Amazing Pass"]
        },
        {
          time: "12:30",
          type: "comida",
          area: "Almuerzo",
          title: "Kuromon Ichiba Market",
          detail: "Mercado de comida. Dejarlo en 45–60 min.",
          maps: "Kuromon Ichiba Market, Osaka",
          badges: ["Gratis"]
        },
        {
          time: "13:30",
          type: "traslado",
          area: "Tarde",
          title: "Traslado a Umeda",
          detail: "Hacia el mirador del Umeda Sky Building.",
          maps: "Umeda Station, Osaka",
          badges: []
        },
        {
          time: "14:30",
          type: "actividad",
          area: "Tarde",
          title: "Umeda Sky Building",
          detail: "Mirador. Con el pase, 9:30–15:00. Entrar antes de las 15:00.",
          maps: "Umeda Sky Building, Osaka",
          badges: ["Osaka Amazing Pass"]
        },
        {
          time: "16:00",
          type: "actividad",
          area: "Tarde",
          title: "Daimaru Shinsaibashi",
          detail: "Tienda Pokémon, One Piece, MoMA Design Store y Pokémon Café.",
          maps: "Daimaru Shinsaibashi, Osaka",
          badges: []
        },
        {
          time: "19:30",
          type: "actividad",
          area: "Noche",
          title: "Dotonbori",
          detail: "El barrio y los alrededores.",
          maps: "Dotonbori, Osaka",
          badges: ["Gratis"]
        },
        {
          time: "20:30",
          type: "comida",
          area: "Noche",
          title: "Cena en Hozenji Yokocho",
          detail: "Barrio Ukiyo Koji / Hozenji Yokocho y templo Hozen-ji.",
          maps: "Hozenji Yokocho, Osaka",
          badges: []
        },
        {
          type: "actividad",
          area: "Noche",
          title: "Tombori River Cruise",
          detail: "Con el pase, de 11:00 a 21:00. Sin hora fija: cabe de noche, cerca de Dotonbori.",
          maps: "Tombori River Cruise, Osaka",
          badges: ["Osaka Amazing Pass"]
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Volver al hospedaje en Osaka",
          detail: "Mini family trip Osaka rsg401.",
          maps: "Namba, Osaka",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-10",
      weekday: "Sábado",
      city: "Osaka",
      summary: "Mañana en Tamba-Sasayama y noche en teamLab Botanical Garden.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Mini family trip Osaka rsg401",
        detail: "Se sale y se vuelve a Osaka. No se cambia de hospedaje.",
        maps: "Namba, Osaka"
      },
      pass: "Osaka Amazing Pass · segundo día",
      tips: [
        "Sasayama está a 1 h 30 min–2 h de Osaka centro.",
        "La entrada común de 4 sitios de Sasayama se paga allá: ¥1.000 por persona."
      ],
      events: [
        {
          time: "06:30",
          type: "traslado",
          area: "Tamba-Sasayama",
          title: "Salida hacia Tamba-Sasayama",
          detail: "Desde Osaka centro. El viaje es de 1 h 30 min a 2 h.",
          duration: "1 h 30 min–2 h",
          maps: "Osaka Station",
          badges: []
        },
        {
          time: "08:30",
          type: "actividad",
          area: "Tamba-Sasayama",
          title: "Castillo de Sasayama",
          detail: "Oshoin Hall. La entrada común de 4 sitios (¥1.000) cubre castillo, Aoyama, la ciudad y Anma.",
          price: "¥1.000",
          maps: "Sasayama Castle, Tambasasayama",
          badges: ["Pagar allá"]
        },
        {
          time: "09:30",
          type: "actividad",
          area: "Tamba-Sasayama",
          title: "Aoyama Historical Village",
          detail: "Incluido en la entrada común.",
          maps: "Aoyama Historical Village, Tambasasayama",
          badges: ["Entrada común"]
        },
        {
          time: "10:30",
          type: "actividad",
          area: "Tamba-Sasayama",
          title: "Residencia samurái y archivo Anma",
          detail: "Tamba-Sasayama City y Anma Family Archives. Incluido en la entrada común.",
          maps: "Tamba Sasayama Samurai Residence",
          badges: ["Entrada común"]
        },
        {
          time: "11:30",
          type: "traslado",
          area: "Tamba-Sasayama",
          title: "Regreso a Osaka",
          detail: "De vuelta hacia Shinsekai para almorzar.",
          maps: "Shinsekai, Osaka",
          badges: []
        },
        {
          time: "13:00",
          type: "comida",
          area: "Almuerzo",
          title: "Mercado Shinsekai",
          detail: "Dejar el almuerzo en 45–60 min.",
          maps: "Shinsekai, Osaka",
          badges: ["Gratis"]
        },
        {
          time: "14:00",
          type: "actividad",
          area: "Tarde",
          title: "Shitennō-ji",
          detail: "Con el pase, horario de referencia 8:30–16:00.",
          maps: "Shitennoji, Osaka",
          badges: ["Osaka Amazing Pass"]
        },
        {
          time: "14:30",
          type: "actividad",
          area: "Tarde",
          title: "Templo Isshinji",
          detail: "Entrada gratis.",
          maps: "Isshinji Temple, Osaka",
          badges: ["Gratis"]
        },
        {
          time: "15:00",
          type: "actividad",
          area: "Tarde",
          title: "Barrio Shinsekai",
          detail: "Barrio retro, neones.",
          maps: "Shinsekai, Osaka",
          badges: ["Gratis"]
        },
        {
          time: "15:30",
          type: "actividad",
          area: "Tarde",
          title: "Torre Tsutenkaku",
          detail: "Con el pase, 9:00–21:45 (última entrada 21:15).",
          maps: "Tsutenkaku Tower, Osaka",
          badges: ["Osaka Amazing Pass"]
        },
        {
          type: "actividad",
          area: "Tarde",
          title: "Tower Slider",
          detail: "En Tsutenkaku. Con el pase, 9:30–20:30 (última entrada 20:00). Sin hora fija.",
          maps: "Tsutenkaku Tower, Osaka",
          badges: ["Osaka Amazing Pass"]
        },
        {
          time: "18:00",
          type: "actividad",
          area: "Tarde",
          title: "Nipponbashi Denden Town",
          detail: "Tiendas de anime, videojuegos y manga.",
          maps: "Nipponbashi Denden Town, Osaka",
          badges: ["Gratis"]
        },
        {
          time: "18:30",
          type: "actividad",
          area: "Noche",
          title: "teamLab Botanical Garden",
          detail: "Abre de 18:45 a 21:30. Entradas de Nath para los 6.",
          maps: "teamLab Botanical Garden Osaka",
          badges: ["Pagado"]
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Volver al hospedaje en Osaka",
          detail: "Mini family trip Osaka rsg401.",
          maps: "Namba, Osaka",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-11",
      weekday: "Domingo",
      city: "Osaka",
      summary: "Día completo en Universal Studios Japan.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Mini family trip Osaka rsg401",
        detail: "Última noche completa en Osaka. Mañana temprano sale el grupo hacia Nara.",
        maps: "Namba, Osaka"
      },
      pass: null,
      tips: ["No hay horario interno en el PDF: es un día entero de parque."],
      events: [
        {
          type: "actividad",
          area: "Día completo",
          title: "Universal Studios Japan",
          detail: "Entrada de 1 día. Marco compró 3 y Nath compró 3.",
          maps: "Universal Studios Japan",
          badges: ["Pagado"]
        },
        {
          type: "actividad",
          area: "Día completo",
          title: "Express Pass",
          detail: "Nath compró 3 pases express.",
          who: "Tres personas (Nath)",
          maps: "Universal Studios Japan",
          badges: ["Pagado"]
        },
        {
          type: "actividad",
          area: "Día completo",
          title: "One Piece",
          detail: "Entrada de Dani para Dani y Marco.",
          who: "Dani y Marco",
          maps: "Universal Studios Japan",
          badges: ["Pagado"]
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Última noche en Osaka",
          detail: "Mini family trip Osaka rsg401. El 12 por la mañana se va a Nara y por la tarde a Kioto.",
          maps: "Namba, Osaka",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-12",
      weekday: "Lunes",
      city: "Nara → Kioto",
      summary: "Mañana en Nara y tarde en Toei Studios, con el festival yokai.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Casa en Kioto (Airbnb)",
        detail: "Primera noche en Kioto. Base hasta el 16.",
        maps: "Kyoto Station"
      },
      pass: "Randen 1-Day Pass por la tarde en Kioto",
      tips: [
        "Nara: Namba → línea Kintetsu Nara (rapid express, unos 40 min) y bus amarillo especial #2 al parque.",
        "Entradas de Nara, por persona: Isui-en ¥1.200 · Todai-ji ¥800 · Kasuga-taisha interior ¥700.",
        "También sirve el Kyoto City Subway and Bus 1 Day Ticket (un poco menos de $8) para metro y buses de la ciudad."
      ],
      events: [
        {
          type: "traslado",
          area: "Nara",
          title: "Namba → Nara",
          detail: "Kintetsu Nara Line, rapid express, unos 40 min. Luego el bus amarillo #2 a Nara Park. El PDF no fija la hora de salida: es la mañana.",
          duration: "Unos 40 min + bus",
          maps: "Kintetsu Namba Station",
          badges: []
        },
        {
          time: "09:30",
          type: "actividad",
          area: "Nara",
          title: "Jardín Isui-en",
          detail: "Abre 9:30–16:30. Hay casa de té. La visita es por la mañana, antes de ir a Kioto.",
          price: "¥1.200",
          maps: "Isuien Garden, Nara",
          badges: ["Pagar allá"]
        },
        {
          type: "actividad",
          area: "Nara",
          title: "Nara Park",
          detail: "Parque de los ciervos. Entrada gratis.",
          maps: "Nara Park",
          badges: ["Gratis"]
        },
        {
          type: "actividad",
          area: "Nara",
          title: "Todai-ji",
          detail: "Templo del Gran Buda.",
          price: "¥800",
          maps: "Todai-ji, Nara",
          badges: ["Pagar allá"]
        },
        {
          type: "actividad",
          area: "Nara",
          title: "Kasuga-taisha",
          detail: "El exterior es gratis. El interior se paga.",
          price: "¥700 interior",
          maps: "Kasuga Taisha, Nara",
          badges: ["Pagar allá"]
        },
        {
          type: "comida",
          area: "Nara",
          title: "Comer en Nara",
          detail: "Opciones del PDF: Parko (okonomiyaki), Maguro Koya (tuna bowls) y Sakura (dulces). Nakatanidou vende mochi de ¥180 a ¥450 y abre 10:00–19:00.",
          maps: "Nakatanidou, Nara",
          badges: []
        },
        {
          time: "13:30",
          timeEnd: "14:00",
          type: "actividad",
          area: "Kioto",
          title: "Toei Studios",
          detail: "Parque de atracciones. Entradas de Nath para los 6. Pase del día: Randen 1-Day Pass.",
          maps: "Toei Kyoto Studio Park",
          badges: ["Pagado"]
        },
        {
          time: "18:00",
          timeEnd: "20:00",
          type: "actividad",
          area: "Kioto",
          title: "Yokai Festival",
          detail: "Yaokai. De 18:00 a 20:00.",
          maps: "Toei Kyoto Studio Park",
          badges: []
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Primera noche en la casa de Kioto",
          detail: "Airbnb. Primera parte del pago ya hecha.",
          maps: "Kyoto Station",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-13",
      weekday: "Martes",
      city: "Kioto",
      summary: "Kurama-dera por la mañana, Heian y el Philosopher's Path al atardecer.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Casa en Kioto (Airbnb)",
        detail: "Misma casa hasta el 16.",
        maps: "Kyoto Station"
      },
      pass: "Kurama/Kibune Day Trip Ticket · ¥2.100",
      tips: ["Pase: Subway & Eizan Railway, Kurama/Kibune Day Trip Ticket."],
      events: [
        {
          time: "08:00",
          type: "traslado",
          area: "Mañana",
          title: "Traslado a Kurama",
          detail: "Con el Kurama/Kibune Day Trip Ticket.",
          maps: "Kurama Station, Kyoto",
          badges: ["Pase del día"]
        },
        {
          time: "09:00",
          type: "actividad",
          area: "Mañana",
          title: "Kurama-dera",
          detail: "Escultura gigante de Daitengu en la estación, puerta Niomon, Yuki Shrine, subida en teleférico, salón principal y hexagrama Kongosho. Opcional: museo Reihoden y Okuno-in Maoden.",
          price: "¥500",
          maps: "Kurama-dera, Kyoto",
          badges: ["Pagar allá"]
        },
        {
          time: "13:30",
          type: "traslado",
          area: "Tarde",
          title: "Regreso a Higashiyama",
          detail: "De vuelta a Kioto, distrito Higashiyama.",
          maps: "Higashiyama, Kyoto",
          badges: []
        },
        {
          time: "14:30",
          type: "actividad",
          area: "Tarde",
          title: "Heian Jingu",
          detail: "El templo es gratis. El jardín se paga.",
          price: "¥600 jardín",
          maps: "Heian Jingu, Kyoto",
          badges: ["Pagar allá"]
        },
        {
          time: "15:30",
          type: "actividad",
          area: "Tarde",
          title: "Nanzen-ji y acueducto Suirokaku",
          detail: "El templo y el acueducto son gratis. Tenjuan, si se entra, cuesta ¥500. Está marcado como parada secundaria.",
          price: "¥500 Tenjuan",
          maps: "Nanzen-ji, Kyoto",
          badges: ["Gratis"]
        },
        {
          time: "18:00",
          type: "actividad",
          area: "Noche",
          title: "Philosopher's Path",
          detail: "Para cenar: Myodai Omen (udon), pizza en Monk o cocina casera en Okariba.",
          maps: "Philosopher's Path, Kyoto",
          badges: ["Gratis"]
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Volver a la casa de Kioto",
          detail: "Airbnb.",
          maps: "Kyoto Station",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-14",
      weekday: "Miércoles",
      city: "Kioto",
      summary: "Fushimi Inari muy temprano, Kiyomizu-dera, Gion y Pontocho.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Casa en Kioto (Airbnb)",
        detail: "Misma casa.",
        maps: "Kyoto Station"
      },
      pass: null,
      tips: ["En Fushimi Inari subir solo hasta el mirador de la mitad: 1 h 30 min–2 h como máximo."],
      events: [
        {
          time: "06:30",
          timeEnd: "08:15",
          type: "actividad",
          area: "Mañana",
          title: "Fushimi Inari Taisha",
          detail: "Subir solo hasta la mitad, al mirador. Máximo 1 h 30 min–2 h.",
          duration: "1 h 30 min–2 h",
          maps: "Fushimi Inari Taisha, Kyoto",
          badges: ["Gratis"]
        },
        {
          time: "08:15",
          timeEnd: "09:00",
          type: "traslado",
          area: "Mañana",
          title: "Traslado a Kiyomizu-dera",
          detail: "Hacia Higashiyama.",
          maps: "Kiyomizu-dera, Kyoto",
          badges: []
        },
        {
          time: "09:00",
          type: "actividad",
          area: "Mañana",
          title: "Kiyomizu-dera",
          detail: "Templo con terraza sobre la ciudad.",
          price: "¥500",
          maps: "Kiyomizu-dera, Kyoto",
          badges: ["Pagar allá"]
        },
        {
          time: "10:30",
          timeEnd: "12:30",
          type: "actividad",
          area: "Mañana",
          title: "Sannenzaka, Ninenzaka y pagoda Hokan-ji",
          detail: "Las calles son gratis. La pagoda Yasaka (Hokan-ji) cuesta ¥400.",
          price: "¥400 pagoda",
          maps: "Sannenzaka, Kyoto",
          badges: ["Pagar allá"]
        },
        {
          time: "12:30",
          type: "actividad",
          area: "Tarde",
          title: "Kodai-ji y Nene-no-Michi",
          detail: "Nene-no-Michi es gratis. Kodai-ji cuesta ¥600. Parada marcada como secundaria.",
          price: "¥600",
          maps: "Kodai-ji, Kyoto",
          badges: ["Pagar allá"]
        },
        {
          time: "13:15",
          timeEnd: "14:00",
          type: "comida",
          area: "Tarde",
          title: "Almuerzo en Higashiyama",
          detail: "Comer en la zona antes de seguir hacia Yasaka.",
          maps: "Higashiyama, Kyoto",
          badges: []
        },
        {
          time: "14:00",
          type: "actividad",
          area: "Tarde",
          title: "Yasaka Shrine",
          detail: "Santuario entre Higashiyama y Gion.",
          maps: "Yasaka Shrine, Kyoto",
          badges: ["Gratis"]
        },
        {
          time: "14:30",
          type: "actividad",
          area: "Tarde",
          title: "Gion (Hanami-koji)",
          detail: "Después, si da el tiempo: Gion Tsujiri, la tienda de matcha.",
          maps: "Hanamikoji Street, Gion, Kyoto",
          badges: ["Gratis"]
        },
        {
          time: "16:00",
          type: "actividad",
          area: "Tarde",
          title: "Canal Shirakawa",
          detail: "Shirakawa Canal y santuario Tatsumi Daimyojin.",
          maps: "Shirakawa Canal, Gion, Kyoto",
          badges: ["Gratis"]
        },
        {
          time: "18:30",
          type: "comida",
          area: "Noche",
          title: "Pontocho y río Kamo",
          detail: "Izakayas y nomikai. Desde las 18:30.",
          maps: "Pontocho, Kyoto",
          badges: ["Gratis"]
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Volver a la casa de Kioto",
          detail: "Airbnb.",
          maps: "Kyoto Station",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-15",
      weekday: "Jueves",
      city: "Nagoya",
      summary: "Excursión de un día a Ghibli Park. Se duerme otra vez en Kioto.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Casa en Kioto (Airbnb)",
        detail: "No se cambia de hospedaje. Nagoya es ida y vuelta.",
        maps: "Kyoto Station"
      },
      pass: null,
      tips: ["El Nozomi es el shinkansen más rápido y no hace transbordo. Kioto–Nagoya son unos 40 min."],
      events: [
        {
          time: "06:00",
          approx: true,
          type: "tren",
          area: "Ida",
          title: "Nozomi Shinkansen a Nagoya",
          detail: "Llegada aproximada a las 6:40. Sin transbordos.",
          duration: "Unos 40 min",
          maps: "Kyoto Station",
          badges: []
        },
        {
          time: "07:00",
          type: "comida",
          area: "Nagoya",
          title: "Desayuno de cafetería",
          detail: "Cultura morning: pides café y dan pan y huevo. Komeda's Coffee o Doutor. Abren a las 7:00.",
          maps: "Komeda's Coffee Nagoya Station",
          badges: []
        },
        {
          time: "08:40",
          timeEnd: "17:00",
          type: "actividad",
          area: "Nagoya",
          title: "Ghibli Park",
          detail: "Tour contratado. Hasta las 17:00.",
          maps: "Ghibli Park, Nagakute",
          badges: ["Pagado"]
        },
        {
          type: "tren",
          area: "Vuelta",
          title: "Regreso a Kioto",
          detail: "Después de las 17:00. El PDF no fija el tren de vuelta.",
          maps: "Nagoya Station",
          badges: []
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Noche otra vez en Kioto",
          detail: "Casa Airbnb. Mañana es Arashiyama muy temprano y luego Monte Fuji.",
          maps: "Kyoto Station",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-16",
      weekday: "Viernes",
      city: "Kioto → Monte Fuji",
      summary: "Arashiyama al amanecer, castillos por la tarde y noche en Fujikawaguchiko.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Hospedaje en Fujikawaguchiko",
        detail: "El PDF no trae el nombre en letras latinas. Llegar a cenar y dormir.",
        maps: "Kawaguchiko Station"
      },
      pass: "Kyoto/Arashiyama 1-Day Pass · ¥1.400 (solo la mañana)",
      tips: [
        "El pase de Arashiyama sirve solo para la primera mitad del día.",
        "A partir de esta noche entra la zona del Fuji Hakone Pass (¥11.100, 3 días / 2 noches)."
      ],
      events: [
        {
          time: "06:30",
          type: "actividad",
          area: "Arashiyama",
          title: "Bosque de bambú de Arashiyama",
          detail: "Muy temprano, antes de la gente.",
          maps: "Arashiyama Bamboo Grove, Kyoto",
          badges: ["Gratis"]
        },
        {
          time: "07:30",
          timeEnd: "08:30",
          type: "traslado",
          area: "Arashiyama",
          title: "Traslado a Tenryu-ji",
          detail: "Dentro de Arashiyama.",
          maps: "Tenryu-ji, Kyoto",
          badges: []
        },
        {
          time: "08:30",
          type: "actividad",
          area: "Arashiyama",
          title: "Tenryu-ji",
          detail: "Templo y jardín junto al bosque.",
          price: "¥500",
          maps: "Tenryu-ji, Kyoto",
          badges: ["Pagar allá"]
        },
        {
          time: "09:30",
          type: "actividad",
          area: "Arashiyama",
          title: "Adashino Nenbutsuji",
          detail: "Parada marcada como secundaria.",
          price: "¥500",
          maps: "Adashino Nenbutsuji, Kyoto",
          badges: ["Pagar allá"]
        },
        {
          time: "10:40",
          type: "actividad",
          area: "Arashiyama",
          title: "Otagi Nenbutsuji",
          detail: "Templo de las estatuas de piedra.",
          price: "¥300",
          maps: "Otagi Nenbutsuji, Kyoto",
          badges: ["Pagar allá"]
        },
        {
          time: "11:30",
          timeEnd: "13:00",
          type: "comida",
          area: "Mediodía",
          title: "Almuerzo y traslado",
          detail: "Comer y moverse hacia el norte de la ciudad.",
          maps: "Kinkaku-ji, Kyoto",
          badges: []
        },
        {
          time: "13:00",
          type: "actividad",
          area: "Tarde",
          title: "Kinkaku-ji",
          detail: "El pabellón de oro.",
          price: "¥500",
          maps: "Kinkaku-ji, Kyoto",
          badges: ["Pagar allá"]
        },
        {
          time: "14:30",
          type: "traslado",
          area: "Tarde",
          title: "Traslado a Nijo",
          detail: "Hacia el castillo. Cierra a las 17:00.",
          maps: "Nijo Castle, Kyoto",
          badges: []
        },
        {
          time: "15:15",
          type: "actividad",
          area: "Tarde",
          title: "Castillo Nijo",
          detail: "Cierra a las 17:00. Conviene no llegar justo al cierre.",
          price: "¥800",
          maps: "Nijo Castle, Kyoto",
          badges: ["Pagar allá"]
        },
        {
          type: "traslado",
          area: "Hacia el Fuji",
          title: "Traslado a Fujikawaguchiko",
          detail: "Salir de Kioto para llegar a cenar y dormir. El PDF no fija el tren.",
          maps: "Kawaguchiko Station",
          badges: []
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Noche junto al lago Kawaguchi",
          detail: "Hospedaje en Fujikawaguchiko. Cancelación gratis hasta el 10 de octubre.",
          maps: "Kawaguchiko Station",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-17",
      weekday: "Sábado",
      city: "Monte Fuji → Hakone",
      summary: "Mañana en el lago Kawaguchi y tarde en Hakone, con onsen.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Ajisai Ryokan Onsen",
        detail: "Hakone. Noche del 17 al 18.",
        maps: "Ajisai Ryokan, Hakone"
      },
      pass: "Fuji Hakone Pass · ¥11.100 por persona",
      tips: [
        "El pase cubre buses, trenes, botes, teleféricos y telecabinas en Fuji y Hakone.",
        "Kachi Kachi Ropeway no entra en el pase: ¥1.000 ida y vuelta, o ¥600 solo ida."
      ],
      events: [
        {
          time: "07:00",
          type: "actividad",
          area: "Monte Fuji",
          title: "Pagoda Chureito",
          detail: "Arakurayama Sengen Park. La postal del Fuji.",
          maps: "Chureito Pagoda, Fujiyoshida",
          badges: ["Fuji Hakone Pass"]
        },
        {
          time: "09:00",
          type: "actividad",
          area: "Monte Fuji",
          title: "Oishi Park",
          detail: "Lado norte del lago Kawaguchi.",
          maps: "Oishi Park, Kawaguchiko",
          badges: ["Fuji Hakone Pass"]
        },
        {
          time: "10:00",
          type: "actividad",
          area: "Monte Fuji",
          title: "Kachi Kachi Ropeway",
          detail: "Parada secundaria. Ida y vuelta ¥1.000. Solo ida ¥600.",
          price: "¥1.000",
          maps: "Kachi Kachi Ropeway, Kawaguchiko",
          badges: ["Pagar allá"]
        },
        {
          time: "11:30",
          type: "actividad",
          area: "Monte Fuji",
          title: "Oshino Hakkai",
          detail: "Las ocho pozas de la aldea.",
          maps: "Oshino Hakkai",
          badges: ["Fuji Hakone Pass"]
        },
        {
          time: "12:15",
          type: "traslado",
          area: "Hakone",
          title: "Traslado a Hakone",
          detail: "Con el Fuji Hakone Pass.",
          maps: "Hakone-Yumoto Station",
          badges: ["Fuji Hakone Pass"]
        },
        {
          time: "14:30",
          type: "actividad",
          area: "Hakone",
          title: "Owakudani",
          detail: "Teleférico sobre el valle volcánico.",
          maps: "Owakudani, Hakone",
          badges: ["Fuji Hakone Pass"]
        },
        {
          time: "15:30",
          type: "actividad",
          area: "Hakone",
          title: "Hakone Shrine y lago Ashi",
          detail: "El crucero turístico suele ser el barco pirata.",
          maps: "Hakone Shrine",
          badges: ["Fuji Hakone Pass"]
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Ajisai Ryokan y onsen",
          detail: "Check-in y onsen. Desayuno mañana entre 7:30 y 8:30.",
          maps: "Ajisai Ryokan, Hakone",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-18",
      weekday: "Domingo",
      city: "Hakone → Kamakura → Shinjuku",
      summary: "Museo al aire libre, el Gran Buda y llegada a Shinjuku sobre las 14:30.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "RSC Yoyogi",
        detail: "Shinjuku. Noche del 18 al 19.",
        maps: "RSC Hotel Yoyogi, Tokyo"
      },
      pass: "Fuji Hakone Pass (último tramo)",
      tips: [
        "De Hakone a Kamakura hay cerca de 1 h 45 min.",
        "Shinjuku Gyoen: última entrada 16:00, cierra 16:30."
      ],
      events: [
        {
          time: "07:30",
          timeEnd: "08:30",
          type: "comida",
          area: "Hakone",
          title: "Desayuno en el ryokan",
          detail: "Ajisai Ryokan.",
          maps: "Ajisai Ryokan, Hakone",
          badges: []
        },
        {
          time: "08:30",
          timeEnd: "09:00",
          type: "hospedaje",
          area: "Hakone",
          title: "Check-out y maletas",
          detail: "Dejar el equipaje listo antes del museo.",
          maps: "Ajisai Ryokan, Hakone",
          badges: []
        },
        {
          time: "09:00",
          timeEnd: "10:00",
          type: "actividad",
          area: "Hakone",
          title: "Hakone Open-Air Museum",
          detail: "Museo de escultura al aire libre.",
          maps: "Hakone Open-Air Museum",
          badges: ["Fuji Hakone Pass"]
        },
        {
          time: "12:00",
          type: "actividad",
          area: "Kamakura",
          title: "Gran Buda de Kamakura",
          detail: "Kamakura Daibutsu, templo Kotoku-in. El traslado desde Hakone es de unos 1 h 45 min.",
          price: "¥300",
          duration: "Traslado ~1 h 45 min",
          maps: "Kotoku-in, Kamakura",
          badges: ["Pagar allá"]
        },
        {
          time: "13:00",
          type: "comida",
          area: "Kamakura",
          title: "Almuerzo en Komachi-dori",
          detail: "Shop and Eat, la calle comercial de la estación.",
          maps: "Komachi-dori, Kamakura",
          badges: []
        },
        {
          time: "14:30",
          approx: true,
          type: "traslado",
          area: "Shinjuku",
          title: "Llegada a Shinjuku",
          detail: "Sobre las 14:30. Primera base de Tokio en este tramo.",
          maps: "Shinjuku Station",
          badges: []
        },
        {
          time: "15:00",
          type: "actividad",
          area: "Shinjuku",
          title: "Valla 3D de los gatos",
          detail: "Salida este de Shinjuku. Parada secundaria.",
          maps: "Shinjuku East Exit 3D cat billboard",
          badges: ["Gratis"]
        },
        {
          time: "15:15",
          type: "actividad",
          area: "Shinjuku",
          title: "Shinjuku Gyoen",
          detail: "Última entrada a las 16:00. Cierra a las 16:30.",
          price: "¥500",
          maps: "Shinjuku Gyoen National Garden",
          badges: ["Pagar allá"]
        },
        {
          type: "actividad",
          area: "Shinjuku",
          title: "Edificio del Gobierno Metropolitano",
          detail: "Mirador gratis. Hay proyección de 18:00 a 21:30. Sin hora de visita fijada.",
          maps: "Tokyo Metropolitan Government Building",
          badges: ["Gratis"]
        },
        {
          type: "comida",
          area: "Noche",
          title: "Omoide Yokocho",
          detail: "Yakitori. La calle de los recuerdos.",
          maps: "Omoide Yokocho, Shinjuku",
          badges: ["Gratis"]
        },
        {
          type: "actividad",
          area: "Noche",
          title: "Golden Gai y Hanazono Shrine",
          detail: "Callejones de bares y el santuario al lado.",
          maps: "Golden Gai, Shinjuku",
          badges: ["Gratis"]
        },
        {
          type: "actividad",
          area: "Noche",
          title: "Kabukicho, calle Godzilla",
          detail: "Parada secundaria.",
          maps: "Godzilla Head Kabukicho, Shinjuku",
          badges: ["Gratis"]
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Noche en RSC Yoyogi",
          detail: "Shinjuku. Mañana el día es Harajuku y Shibuya.",
          maps: "RSC Hotel Yoyogi, Tokyo",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-19",
      weekday: "Lunes",
      city: "Shibuya y Harajuku",
      summary: "Meiji, Takeshita, el cruce de Shibuya y la noche en el barrio.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Hospedaje en Shibuya",
        detail: "El PDF no indica el nombre. Noche del 19 al 20.",
        maps: "Shibuya Station, Tokyo"
      },
      pass: "Tokyo Subway Pass 72 h · ¥1.500, si lo compran para estos días",
      tips: [
        "Evitar el metro en hora pico: 7:30–9:30 y 17:30–19:30.",
        "Lleva efectivo.",
        "Shibuya Sky conviene reservarlo para el atardecer."
      ],
      events: [
        {
          time: "08:00",
          type: "actividad",
          area: "Harajuku",
          title: "Meiji Shrine",
          detail: "Santuario, jardín y sala del tesoro. De ¥0 a ¥1.000 según por dónde se entre.",
          price: "¥0–1.000",
          maps: "Meiji Jingu, Tokyo",
          badges: ["Pagar allá"]
        },
        {
          time: "09:30",
          type: "actividad",
          area: "Harajuku",
          title: "Yoyogi Park",
          detail: "Al lado del santuario. Parada secundaria.",
          maps: "Yoyogi Park, Tokyo",
          badges: ["Gratis"]
        },
        {
          time: "10:30",
          type: "actividad",
          area: "Harajuku",
          title: "Takeshita Street",
          detail: "Compras. Parada clásica: Marion Crêpes.",
          maps: "Takeshita Street, Harajuku",
          badges: ["Gratis"]
        },
        {
          time: "11:30",
          type: "actividad",
          area: "Harajuku",
          title: "Harry Potter Shop y Kiddy Land",
          detail: "En Omotesando. Paradas secundarias: la tienda de Harry Potter y figuras en Kiddy Land.",
          maps: "Kiddy Land Omotesando, Tokyo",
          badges: []
        },
        {
          time: "12:30",
          type: "actividad",
          area: "Harajuku",
          title: "Callejones Urahara",
          detail: "Tiendas vintage y de nicho. Parada secundaria.",
          maps: "Urahara, Harajuku",
          badges: ["Gratis"]
        },
        {
          time: "13:30",
          type: "comida",
          area: "Almuerzo",
          title: "Almuerzo en Shibuya",
          detail: "ONURICE – Sweet Check!, o un sushi o ramen de la zona.",
          maps: "Shibuya Station, Tokyo",
          badges: []
        },
        {
          time: "14:30",
          type: "actividad",
          area: "Shibuya",
          title: "Hachiko y el cruce de Shibuya",
          detail: "La estatua está en la estación. Después, tiendas en PARCO: Pokémon Center, Dragon Ball, JoJo, Godzilla y One Piece.",
          maps: "Shibuya Crossing, Tokyo",
          badges: ["Gratis"]
        },
        {
          time: "17:30",
          type: "actividad",
          area: "Shibuya",
          title: "Shibuya Sky o Hikarie",
          detail: "Shibuya Sky al atardecer, con reserva. Alternativa gratis: Shibuya Scramble Square, Hikarie, piso 11.",
          maps: "Shibuya Sky, Tokyo",
          badges: ["Reservar"]
        },
        {
          type: "actividad",
          area: "Shibuya",
          title: "Torre de Tokio",
          detail: "Solo Chente y Marco. Entrada pagada. El PDF no fija la hora.",
          who: "Chente y Marco",
          maps: "Tokyo Tower",
          badges: ["Pagado"]
        },
        {
          time: "19:30",
          type: "actividad",
          area: "Noche",
          title: "Parque Miyashita",
          detail: "Azotea, zona deportiva, fotos y comida. También Tokyo Plaza.",
          maps: "Miyashita Park, Shibuya",
          badges: ["Gratis"]
        },
        {
          type: "comida",
          area: "Noche",
          title: "Nonbei Yokocho",
          detail: "Bares retro. Sin hora fija.",
          maps: "Nonbei Yokocho, Shibuya",
          badges: ["Gratis"]
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Noche en Shibuya",
          detail: "El nombre del hotel no está en el itinerario. Mañana se duerme en Asakusa.",
          maps: "Shibuya Station, Tokyo",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-20",
      weekday: "Martes",
      city: "Ginza y Akihabara",
      summary: "Tsukiji temprano, palacio, Akihabara y teamLab Planets a las 20:00.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Hotel Tavinos Asakusa",
        detail: "Esta noche y la siguiente. teamLab Planets queda más lejos, en Toyosu.",
        maps: "Hotel Tavinos Asakusa, Tokyo"
      },
      pass: "Tokyo Subway Pass, si lo están usando",
      tips: [
        "Evitar hora pico: 7:30–9:30 y 17:30–19:30.",
        "En Akihabara hay comidas completas por ¥600–¥1.000 bajo la estación.",
        "Eorzea Café: el PDF pedía confirmar la reserva (la hoja decía reservar el 19 de setiembre)."
      ],
      events: [
        {
          time: "07:00",
          type: "comida",
          area: "Ginza",
          title: "Mercado de Tsukiji",
          detail: "Ir temprano. Comida local.",
          maps: "Tsukiji Outer Market, Tokyo",
          badges: ["Gratis"]
        },
        {
          time: "09:30",
          type: "actividad",
          area: "Ginza",
          title: "Jardines del Palacio Imperial",
          detail: "Imperial Palace East Gardens.",
          maps: "Imperial Palace East Gardens, Tokyo",
          badges: ["Gratis"]
        },
        {
          time: "11:00",
          type: "actividad",
          area: "Ginza",
          title: "Santuario Koami y parque Hibiya",
          detail: "Paseo por la zona.",
          maps: "Hibiya Park, Tokyo",
          badges: ["Gratis"]
        },
        {
          time: "12:00",
          type: "actividad",
          area: "Ginza",
          title: "Kabuki-za y Ginza Six",
          detail: "Ver Kabuki-za por fuera o un show corto. Azotea de Ginza Six. Paradas secundarias. Cerca: Tsukijigawa Ginza Park.",
          maps: "Kabukiza Theatre, Tokyo",
          badges: ["Gratis"]
        },
        {
          type: "comida",
          area: "Akihabara",
          title: "Almuerzo en Akihabara",
          detail: "Restaurantes baratos debajo de la estación o en edificios pequeños. Comidas de ¥600 a ¥1.000.",
          maps: "Akihabara Station, Tokyo",
          badges: []
        },
        {
          time: "15:00",
          type: "actividad",
          area: "Akihabara",
          title: "Akihabara Electric Town",
          detail: "Animate y tiendas de anime y electrónica. Opcional: Nakano Broadway o Ikebukuro, y Akihabara Gachapon Hall.",
          maps: "Akihabara Electric Town, Tokyo",
          badges: ["Gratis"]
        },
        {
          time: "18:30",
          type: "comida",
          area: "Noche",
          title: "Eorzea Café",
          detail: "Café de Final Fantasy. Conviene tener la reserva confirmada.",
          maps: "Eorzea Cafe Akihabara",
          badges: ["Reservar"]
        },
        {
          time: "20:00",
          type: "actividad",
          area: "Noche",
          title: "teamLab Planets Tokyo",
          detail: "Queda un poco más lejos (Toyosu). Entradas de Dani para 4 personas.",
          maps: "teamLab Planets Tokyo",
          badges: ["Pagado"]
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Noche en Hotel Tavinos, Asakusa",
          detail: "Base del 20 al 22. Cancelación gratis hasta el 18 de octubre.",
          maps: "Hotel Tavinos Asakusa, Tokyo",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-21",
      weekday: "Miércoles",
      city: "Asakusa y Ueno",
      summary: "Senso-ji temprano, ceremonia de té y tarde en Ueno y Yanaka.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Hotel Tavinos Asakusa",
        detail: "Última noche de los seis en el mismo hotel. Mañana Chente y Marco vuelan.",
        maps: "Hotel Tavinos Asakusa, Tokyo"
      },
      pass: null,
      tips: ["Senso-ji conviene verlo bien temprano, antes de las multitudes."],
      events: [
        {
          time: "08:00",
          type: "actividad",
          area: "Asakusa",
          title: "Puerta Kaminarimon",
          detail: "La puerta del farol gigante, entrada a Nakamise.",
          maps: "Kaminarimon, Asakusa",
          badges: ["Gratis"]
        },
        {
          time: "08:30",
          type: "actividad",
          area: "Asakusa",
          title: "Senso-ji",
          detail: "Templo principal. También Asakusa Jinja, puerta Hozomon y pagoda de cinco pisos.",
          maps: "Senso-ji, Asakusa",
          badges: ["Gratis"]
        },
        {
          time: "09:30",
          type: "actividad",
          area: "Asakusa",
          title: "Denboin-dori",
          detail: "Calle de barrio tradicional.",
          maps: "Denboin Street, Asakusa",
          badges: ["Gratis"]
        },
        {
          time: "10:00",
          type: "actividad",
          area: "Asakusa",
          title: "Shin-Nakamise",
          detail: "Snacks. Probar kibi dango.",
          maps: "Shin-Nakamise Shopping Street, Asakusa",
          badges: ["Gratis"]
        },
        {
          time: "11:30",
          type: "actividad",
          area: "Asakusa",
          title: "Ceremonia de té en Maikoya",
          detail: "Kimono tea ceremony. Entradas de Dani para los 6.",
          maps: "Maikoya Asakusa",
          badges: ["Pagado"]
        },
        {
          type: "actividad",
          area: "Asakusa",
          title: "Mirador del centro de información",
          detail: "Asakusa Culture Tourist Information Center, piso 8, foto panorámica. Sin hora fija.",
          maps: "Asakusa Culture Tourist Information Center",
          badges: ["Gratis"]
        },
        {
          time: "13:00",
          type: "actividad",
          area: "Asakusa",
          title: "Río Sumida y Skytree",
          detail: "Caminar junto al río para ver la Tokyo Skytree.",
          maps: "Sumida Park, Asakusa",
          badges: ["Gratis"]
        },
        {
          type: "comida",
          area: "Almuerzo",
          title: "Almuerzo en Asakusa",
          detail: "Opciones del PDF: matcha gelato en Suzukien, unagi en Unatoto o tempura en Tendon Tenya.",
          maps: "Unatoto Asakusa",
          badges: []
        },
        {
          time: "14:30",
          type: "actividad",
          area: "Ueno",
          title: "Kappabashi",
          detail: "Calle de utensilios de cocina, entre Asakusa y Ueno.",
          maps: "Kappabashi Street, Tokyo",
          badges: ["Gratis"]
        },
        {
          time: "15:30",
          type: "actividad",
          area: "Ueno",
          title: "Ueno Park",
          detail: "El parque es gratis. Museos, zoológico, Shinobazu-no-ike Bentendo y el Museo Metropolitano se pagan solo si se entra.",
          maps: "Ueno Park, Tokyo",
          badges: ["Gratis"]
        },
        {
          time: "17:00",
          type: "actividad",
          area: "Ueno",
          title: "Yanaka Ginza",
          detail: "Barrio de la era Showa.",
          maps: "Yanaka Ginza, Tokyo",
          badges: ["Gratis"]
        },
        {
          type: "comida",
          area: "Noche",
          title: "Cena en Ameya-Yokocho",
          detail: "Mercado bajo las vías. También está Shimura Chocolate.",
          maps: "Ameya-Yokocho, Ueno",
          badges: ["Gratis"]
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Última noche en Tavinos",
          detail: "Hotel Tavinos Asakusa. Mañana Chente y Marco salen hacia Haneda.",
          maps: "Hotel Tavinos Asakusa, Tokyo",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-22",
      weekday: "Jueves",
      city: "Asakusa",
      summary: "Compras por la mañana, sumo a las 14:00 y vuelo de Chente y Marco.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Mimaru Ueno Pokémon",
        detail: "Esta noche: Mary, Nath, Caro y Dani. Chente y Marco vuelan a las 21:50.",
        maps: "Mimaru Tokyo Ueno"
      },
      pass: null,
      tips: ["Dejar margen amplio para Haneda. El vuelo es a las 21:50."],
      events: [
        {
          type: "actividad",
          area: "Mañana",
          title: "Descanso y compras",
          detail: "La mañana no tiene hora fija. Es el último día de Chente y Marco.",
          maps: "Asakusa, Tokyo",
          badges: []
        },
        {
          time: "14:00",
          type: "actividad",
          area: "Tarde",
          title: "Show de sumo y almuerzo",
          detail: "Reservado y pagado.",
          maps: "Ryogoku Kokugikan, Tokyo",
          badges: ["Pagado"]
        },
        {
          time: "21:50",
          type: "vuelo",
          area: "Salida",
          title: "Vuelo de Chente y Marco",
          detail: "Haneda, 21:50. Mary, Nath, Caro y Dani siguen a Mimaru Ueno Pokémon.",
          who: "Chente y Marco",
          maps: "Haneda Airport Terminal",
          badges: []
        },
        {
          type: "hospedaje",
          area: "Noche",
          title: "Noche en Mimaru Ueno",
          detail: "Mary, Nath, Caro y Dani. Temática Pokémon.",
          who: "Mary, Nath, Caro y Dani",
          maps: "Mimaru Tokyo Ueno",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-23",
      weekday: "Viernes",
      city: "Tokio",
      summary: "Compras y dos salidas: Narita a las 17:55 y Haneda a las 22:55.",
      who: ["Dani", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Sin noche en Japón",
        detail: "Mary, Caro y Nath salen por Narita. Dani sale por Haneda.",
        maps: "Tokyo Station"
      },
      pass: null,
      tips: [
        "Narita queda más lejos que Haneda. El vuelo de las 17:55 pide salir con varias horas.",
        "Dani vuela de noche por Haneda."
      ],
      events: [
        {
          type: "actividad",
          area: "Día",
          title: "Compras",
          detail: "Sin hora fija. Último día en Tokio.",
          maps: "Ueno, Tokyo",
          badges: []
        },
        {
          time: "17:55",
          type: "vuelo",
          area: "Salida",
          title: "Vuelo de Mary, Caro y Nath",
          detail: "Aeropuerto de Narita, 17:55.",
          who: "Mary, Caro y Nath",
          maps: "Narita Airport",
          badges: []
        },
        {
          time: "22:55",
          type: "vuelo",
          area: "Salida",
          title: "Vuelo de Dani",
          detail: "Aeropuerto de Haneda, 22:55.",
          who: "Dani",
          maps: "Haneda Airport Terminal",
          badges: []
        }
      ]
    },
    {
      date: "2026-10-24",
      weekday: "Sábado",
      city: "Costa Rica",
      summary: "Regreso a casa.",
      who: ["Dani", "Chente", "Marco", "Mary", "Nath", "Caro"],
      lodging: {
        name: "Casa",
        detail: "Fin del viaje.",
        maps: "San Jose, Costa Rica"
      },
      pass: null,
      tips: [],
      events: [
        {
          type: "vuelo",
          area: "Regreso",
          title: "De vuelta en Costa Rica",
          detail: "El grupo ya salió de Japón el 22 y el 23. Este día es el regreso a casa.",
          maps: "Juan Santamaria International Airport",
          badges: []
        }
      ]
    }
  ],
  guide: {
    lodgings: [
      { nights: "5–7 oct", city: "Tokio · Asakusa", name: "Plat Hostel Keikyu Asakusa Station", who: "Dani", booked: "Booking · Dani", price: "22.628 CRC (¥7.800)", cancel: "Gratis hasta el 3 oct" },
      { nights: "6–7 oct", city: "Tokio · Asakusa", name: "Plat Hostel Keikyu Asakusa Station", who: "Marco y Chente", booked: "Booking · Dani", price: "22.628 CRC (¥7.800)", cancel: "Gratis hasta el 4 oct" },
      { nights: "7–8 oct", city: "Koyasan", name: "Templo Shukubo Komyoin", who: "Dani, Chente y Marco", booked: "Booking · Dani", price: "313.307 CRC", cancel: "Gratis hasta el 29 set. Incluye cena y desayuno." },
      { nights: "8–12 oct", city: "Osaka", name: "Mini family trip Osaka rsg401", who: "Los 6", booked: "Booking · Marco", price: "412.375 CRC (¥142.178)", cancel: "No reembolsable" },
      { nights: "12–16 oct", city: "Kioto", name: "Casa (Airbnb)", who: "Los 6", booked: "Airbnb · Dani", price: "619.334,55 CRC. Primer pago hecho: 358.083 CRC", cancel: "Gratis hasta el 12 set" },
      { nights: "16–17 oct", city: "Fujikawaguchiko", name: "Hospedaje junto al lago (nombre en japonés en la reserva)", who: "Los 6", booked: "Booking · Nath", price: "119.709 CRC (¥41.265)", cancel: "Gratis hasta el 10 oct" },
      { nights: "17–18 oct", city: "Hakone", name: "Ajisai Ryokan Onsen", who: "Los 6", booked: "Booking · Nath", price: "949 USD al momento de la nota, según tipo de cambio", cancel: "Fecha de cancelación: 2 set" },
      { nights: "18–19 oct", city: "Tokio · Shinjuku", name: "RSC Yoyogi", who: "Los 6", booked: "Booking · Chente", price: "¥84.888 · 242.209 CRC", cancel: "Cancelación 18 set" },
      { nights: "19–20 oct", city: "Tokio · Shibuya", name: "Hospedaje en Shibuya (nombre no indicado)", who: "Los 6", booked: "Booking · Marco", price: "196.876 CRC", cancel: "Cancelación 17 oct" },
      { nights: "20–22 oct", city: "Tokio · Asakusa", name: "Hotel Tavinos", who: "Los 6", booked: "Booking · Dani", price: "298.048 CRC", cancel: "Cancelación 18 oct" },
      { nights: "22–23 oct", city: "Tokio · Ueno", name: "Mimaru Ueno Pokémon", who: "Mary, Nath, Caro y Dani", booked: "Booking · Nath", price: "233.683 CRC", cancel: "Cancelación 14 oct" }
    ],
    tickets: [
      { name: "Osaka Amazing Pass", platform: "Klook", who: "Dani (3) y Nath (3)", when: "9–10 oct · Osaka" },
      { name: "teamLab Botanical Garden Osaka", platform: "Klook", who: "Nath (6)", when: "10 oct · noche" },
      { name: "One Piece (Universal)", platform: "—", who: "Dani, para Dani y Marco", when: "11 oct · Universal" },
      { name: "Universal Studios Japan", platform: "—", who: "Marco (3) y Nath (3)", when: "11 oct" },
      { name: "Express Pass Universal", platform: "—", who: "Nath (3)", when: "11 oct" },
      { name: "Toei Studios", platform: "—", who: "Nath (6)", when: "12 oct · tarde" },
      { name: "teamLab + Torre de Tokio", platform: "Klook", who: "Nath (2)", when: "Tokio" },
      { name: "teamLab Tokio (Planets)", platform: "Klook", who: "Dani (4)", when: "20 oct · 20:00" },
      { name: "Ceremonia de té Maikoya", platform: "—", who: "Dani (6)", when: "21 oct · Maikoya Asakusa" },
      { name: "Shinkansen Tokio–Osaka", platform: "Klook", who: "Chente, para Dani y Marco", when: "7 oct · 6:00 · Tokyo Station" },
      { name: "Koyasan World Heritage Ticket", platform: "—", who: "Chente, Marco y Dani", when: "7–8 oct · ¥3.980" },
      { name: "Tour Ghibli Park", platform: "—", who: "Tour contratado", when: "15 oct · Nagoya" },
      { name: "Torre de Tokio", platform: "—", who: "Solo Chente y Marco", when: "19 oct" },
      { name: "Show de sumo", platform: "—", who: "Reservado y pagado", when: "22 oct · 14:00" }
    ],
    payOnSite: [
      { day: "10 oct", place: "Entrada común de 4 sitios de Sasayama", price: "¥1.000" },
      { day: "12 oct", place: "Isui-en · Todai-ji · Kasuga-taisha (interior)", price: "¥1.200 · ¥800 · ¥700" },
      { day: "13 oct", place: "Kurama-dera · jardín de Heian · Tenjuan", price: "¥500 · ¥600 · ¥500" },
      { day: "14 oct", place: "Kiyomizu-dera · Hokan-ji · Kodai-ji", price: "¥500 · ¥400 · ¥600" },
      { day: "16 oct", place: "Tenryu-ji · Adashino · Otagi · Kinkaku-ji · Nijo", price: "¥500 · ¥500 · ¥300 · ¥500 · ¥800" },
      { day: "17 oct", place: "Kachi Kachi Ropeway ida y vuelta", price: "¥1.000 (solo ida ¥600)" },
      { day: "18 oct", place: "Gran Buda de Kamakura · Shinjuku Gyoen", price: "¥300 · ¥500" },
      { day: "19 oct", place: "Meiji Shrine, según la zona", price: "¥0–1.000" }
    ],
    passes: [
      {
        name: "Osaka Amazing Pass",
        price: "1 día ¥3.500 · 2 días ¥5.000",
        detail: "Metro de Osaka, algunos buses de la ciudad, New Tram y trenes Hankyu, Hanshin, Keihan, Kintetsu y Nankai sobre todo dentro de Osaka. También entra a las atracciones marcadas con el pase."
      },
      {
        name: "Fuji Hakone Pass",
        price: "3 días / 2 noches · ¥11.100",
        detail: "Viajes ilimitados en buses, trenes, botes, teleféricos y telecabinas de Fuji y Hakone. Trae tren de ida y vuelta con descuento desde Shinjuku. El Hakone Freepass solo cubre Hakone y conviene menos para este viaje."
      },
      {
        name: "Koyasan World Heritage Ticket",
        price: "2 días seguidos · ¥3.980",
        detail: "Tren ida y vuelta desde Namba (Nankai) y cable car Gokurakubashi–Koyasan. Bus local Nankai Rinkan ilimitado 2 días, salvo líneas Tateri, Koya Ryujin y Koya Niutsuhime. Descuento del 20 % en Kongobuji, Kondo, Konpon Daito y Reihokan. No incluye el Limited Express (¥790 extra). Si es voucher, canjearlo en la taquilla Nankai de Namba."
      },
      {
        name: "Pases de Kioto",
        price: "Según el día",
        detail: "12 oct: Randen 1-Day Pass. 13 oct: Kurama/Kibune Day Trip Ticket ¥2.100. 16 oct: Kyoto/Arashiyama 1-Day Pass ¥1.400, solo la mañana. Además existe el Kyoto City Subway and Bus 1 Day Ticket, un poco menos de 8 USD, para metro y buses de la ciudad."
      },
      {
        name: "Tokyo Subway Pass",
        price: "72 horas · ¥1.500",
        detail: "Tokyo Metro y metro Toei. Estaciones citadas para comprarlo o usarlo: Shimbashi (línea Asakusa), Shinjuku-nishiguchi (línea Oedo) y Ueno-Okachimachi (línea Oedo)."
      }
    ],
    restaurants: [
      {
        city: "Koyasan y Nara",
        groups: [
          { title: "Con hora en el viaje", items: [
            { name: "Hanabishi", kind: "Shojin ryori", area: "Koyasan · almuerzo del 8 oct" },
            { name: "Parko", kind: "Okonomiyaki", area: "Nara" },
            { name: "Maguro Koya", kind: "Tuna bowls", area: "Nara" },
            { name: "Sakura", kind: "Dulces", area: "Nara" },
            { name: "Nakatanidou", kind: "Mochi ¥180–450", area: "Nara · 10:00–19:00" }
          ]}
        ]
      },
      {
        city: "Osaka",
        groups: [
          { title: "Para no perderse", items: [
            { name: "Mizuno, Ajinoya o Fukutaro", kind: "Okonomiyaki", area: "Dotonbori / Umeda" },
            { name: "Torikizoku", kind: "Yakitori", area: "Umeda y cadenas" },
            { name: "Yakiniku M", kind: "Matsusaka beef", area: "Hozenji Yokocho" },
            { name: "Meoto Zenzai", kind: "Postre de frijoles rojos", area: "Hozenji Yokocho" }
          ]},
          { title: "Michelin y Bib Gourmand", items: [
            { name: "Ishikawa", kind: "Kaiseki", area: "Umeda" },
            { name: "Hajime", kind: "3 estrellas", area: "Umeda" },
            { name: "Ajinoya Honten", kind: "Okonomiyaki · Bib", area: "Dotonbori" },
            { name: "Osaka-Botejyu Honten", kind: "Okonomiyaki", area: "Namba" },
            { name: "Mizuno", kind: "Okonomiyaki · Bib", area: "Dotonbori" },
            { name: "Chitose okon", kind: "Okonomiyaki y soba", area: "Namba" }
          ]},
          { title: "Okonomiyaki, takoyaki y calle", items: [
            { name: "Fukutaro", kind: "Okonomiyaki", area: "Umeda / Namba" },
            { name: "Katsudon Hozenji", kind: "Katsudon", area: "Hozenji Yokocho" },
            { name: "Acchichi Honpo", kind: "Takoyaki", area: "Dotonbori" },
            { name: "Takoyaki Wanaka", kind: "Takoyaki", area: "Dotonbori" },
            { name: "Hozenji Sanpei", kind: "Okonomiyaki", area: "Hozenji Yokocho" },
            { name: "Kukuru Konamon Museum", kind: "Takoyaki", area: "Dotonbori" },
            { name: "Robatayaki Mizukakechaya", kind: "Parrilla", area: "Hozenji Yokocho" }
          ]},
          { title: "Ramen y fideos", items: [
            { name: "Ichiran, Kinryu, Hanamaruken", kind: "Tonkotsu", area: "Dotonbori" },
            { name: "Nagi, Afuri, Ippudo, Hakata Furyu", kind: "Ramen", area: "Varias zonas" },
            { name: "Zundo-Ya", kind: "Tonkotsu", area: "Amerikamura" },
            { name: "Kamukura Sennichimae", kind: "Ramen ligero", area: "Dotonbori" },
            { name: "Dotonbori Imai", kind: "Udon", area: "Dotonbori" }
          ]},
          { title: "Carne, sushi y café", items: [
            { name: "Kani Doraku", kind: "Cangrejo", area: "Dotonbori" },
            { name: "Genrokuzushi", kind: "Kaitenzushi", area: "Dotonbori" },
            { name: "Gyukatsu Motomura", kind: "Filete empanado", area: "Namba" },
            { name: "Kura Sushi, Sushiro, Sushizanmai", kind: "Cadenas de sushi", area: "Varias" },
            { name: "Happy Pancake", kind: "Pancakes", area: "Shinsaibashi" },
            { name: "Pablo y Rikuro Ojisan", kind: "Tartas", area: "Amerikamura" },
            { name: "Kushikatsu Daruma", kind: "Pinchos fritos", area: "Dotonbori" },
            { name: "Yoshinoya y Sukiya", kind: "Gyudon barato", area: "Cadenas" }
          ]}
        ]
      },
      {
        city: "Kioto",
        groups: [
          { title: "Con hora en el viaje", items: [
            { name: "Myodai Omen", kind: "Udon", area: "Philosopher's Path · 13 oct" },
            { name: "Monk", kind: "Pizza", area: "Philosopher's Path · 13 oct" },
            { name: "Okariba", kind: "Cocina casera", area: "Philosopher's Path · 13 oct" },
            { name: "Gion Tsujiri", kind: "Matcha", area: "Gion · 14 oct" },
            { name: "Komeda's o Doutor", kind: "Desayuno morning", area: "Nagoya · 15 oct" }
          ]},
          { title: "Alta cocina", items: [
            { name: "Kyoto Kitcho", kind: "Kaiseki 3 estrellas", area: "Arashiyama" },
            { name: "Itoh Dining", kind: "Kobe y teppanyaki", area: "Canal Shirakawa" },
            { name: "Hachidaime Gihey", kind: "Kaiseki de arroz", area: "Gion" },
            { name: "Unagi Hirokawa", kind: "Anguila", area: "Arashiyama" }
          ]},
          { title: "Para comer sin reserva", items: [
            { name: "Ramen Sen-no-kaze", kind: "Ramen", area: "Cerca de Nishiki" },
            { name: "Chao Chao Gyoza", kind: "Gyoza", area: "Nishiki, Shijo o Pontocho" },
            { name: "Hanamaru Udon", kind: "Udon rápido", area: "Cadenas" },
            { name: "Sushi Tetsu", kind: "Sushi en barra", area: "Nishiki o Pontocho" },
            { name: "What's Matsusaka Beef", kind: "Yakiniku", area: "Nishiki" },
            { name: "Torikizoku y Kineya", kind: "Pinchos baratos", area: "Cadenas" },
            { name: "Gion Tanto", kind: "Okonomiyaki", area: "Gion" },
            { name: "Izakaya Wada", kind: "Obanzai", area: "Gion" }
          ]}
        ]
      },
      {
        city: "Tokio",
        groups: [
          { title: "Por zona del viaje", items: [
            { name: "Unatoto, Ichinoya y Tenya", kind: "Unagi, wagyu y tempura", area: "Asakusa" },
            { name: "Suzukien", kind: "Matcha gelato", area: "Asakusa" },
            { name: "Maikoya", kind: "Ceremonia de té", area: "Asakusa · 21 oct" },
            { name: "Mominoki House", kind: "Café", area: "Ueno" },
            { name: "Ameya-Yokocho", kind: "Mercado", area: "Ueno · cena del 21" },
            { name: "Eorzea Café", kind: "Final Fantasy", area: "Akihabara · 20 oct" },
            { name: "Kanda Matsuya y MENKO", kind: "Soba y okonomiyaki", area: "Akihabara" },
            { name: "ONURICE", kind: "Almuerzo", area: "Shibuya · 19 oct" },
            { name: "Fuunji", kind: "Ramen", area: "Shinjuku" },
            { name: "Omoide Yokocho", kind: "Yakitori", area: "Shinjuku · 18 oct" },
            { name: "Marion Crêpes", kind: "Crepas", area: "Takeshita · 19 oct" }
          ]},
          { title: "Si sobra tiempo", items: [
            { name: "Ginza Hachigou", kind: "Ramen", area: "Ginza" },
            { name: "Tsujiri en Daimaru", kind: "Matcha", area: "Ginza" },
            { name: "AFURI", kind: "Ramen", area: "Ebisu / Shibuya" },
            { name: "Sushi Ten", kind: "Sushi", area: "Shibuya" },
            { name: "Kyushu Jangara", kind: "Ramen", area: "Harajuku" },
            { name: "Matcha House", kind: "Matcha", area: "Omotesando" },
            { name: "Ichiran, Ippudo, Yoshinoya, Sukiya, Sushiro", kind: "Cadenas baratas", area: "En casi toda la ciudad" }
          ]}
        ]
      }
    ],
    apps: [
      { group: "Transporte", items: [
        { name: "Suica o Pasmo", note: "Tarjeta recargable. Suica en iPhone. Pasmo en iPhone o Android." },
        { name: "Smart-EX", note: "Comprar boletos de tren y reservar asientos." },
        { name: "EX: Shinkansen Booking", note: "Reservas de shinkansen." },
        { name: "Navitime o Wanderlog", note: "Planificador de rutas." },
        { name: "Japan Travel", note: "Organizador del viaje y tiquetes." },
        { name: "HYPERDIA", note: "Horarios de tren sin internet." },
        { name: "Uber", note: "El PDF recomienda Uber y avisa que GO falla a menudo." },
        { name: "GO y NEAR ME", note: "Taxi y shuttle. Tenerlas, pero no depender solo de GO." }
      ]},
      { group: "Comer y traducir", items: [
        { name: "Tabelog", note: "Recomendaciones de restaurantes." },
        { name: "TableCheck", note: "Reservas." },
        { name: "Collab-cafe", note: "Cafés de anime." },
        { name: "VoiceTra", note: "Traductor de voz del gobierno japonés. Funciona offline." },
        { name: "Papago", note: "Traducir y hablar." },
        { name: "PAYKE", note: "Detalles de productos en la tienda." }
      ]},
      { group: "En la calle", items: [
        { name: "Yurekuru Call", note: "Alertas de terremoto." },
        { name: "Fuji-san Weather", note: "Clima del Monte Fuji. Web: fuji-san.info/en/" },
        { name: "Ecbo Cloak", note: "Lockers y lugares para dejar maletas." },
        { name: "DOKO!", note: "Baños y basureros públicos." },
        { name: "MyMizu", note: "Rellenar la botella de agua." },
        { name: "ChargeSPOT", note: "Alquilar batería portátil." },
        { name: "KLOOK y LINE", note: "Descuentos y cupones de tiendas." }
      ]}
    ],
    phrases: [
      { jp: "Ohayō gozaimasu", es: "Buenos días", when: "Por la mañana" },
      { jp: "Konnichiwa", es: "Hola / buenas tardes", when: "Durante el día" },
      { jp: "Konbanwa", es: "Buenas noches", when: "Al llegar de noche" },
      { jp: "Arigatō gozaimasu", es: "Gracias", when: "La versión larga es más formal" },
      { jp: "Sumimasen", es: "Disculpe / perdón", when: "Para llamar la atención o disculparse" },
      { jp: "Onegaishimasu", es: "Por favor", when: "Suena educado al instante" },
      { jp: "Kore kudasai", es: "Esto, por favor", when: "Al comprar: señala y dilo" },
      { jp: "Ikura desu ka?", es: "¿Cuánto cuesta?", when: "Tiendas y mercados" },
      { jp: "Daijōbu desu", es: "Está bien / no, gracias", when: "Para rechazar con amabilidad" },
      { jp: "Eigo wakarimasu ka?", es: "¿Habla inglés?", when: "Antes de pedir ayuda" },
      { jp: "Toire wa doko desu ka?", es: "¿Dónde está el baño?", when: "Cuando haga falta" },
      { jp: "Itadakimasu", es: "Buen provecho", when: "Antes de comer" },
      { jp: "Oishii desu!", es: "¡Delicioso!", when: "Durante la comida" },
      { jp: "Gochisōsama deshita", es: "Gracias por la comida", when: "Al terminar" },
      { jp: "Kampai!", es: "¡Salud!", when: "Al brindar" },
      { jp: "Yoroshiku onegaishimasu", es: "Mucho gusto", when: "Al presentarse o pedir un favor" },
      { jp: "Tasukete!", es: "¡Ayuda!", when: "Emergencias" }
    ],
    links: [
      { name: "JR Pass oficial", url: "https://japanrailpass.net/en/" },
      { name: "JR-East", url: "https://www.eki-net.com/" },
      { name: "JR-West", url: "https://www.westjr.co.jp/" },
      { name: "Koyasan World Heritage Ticket", url: "https://www.nankaikoya.jp/" },
      { name: "Clima del Monte Fuji", url: "https://www.fuji-san.info/en/" },
      { name: "Guía de pases", url: "https://www.japan-guide.com/e/e2357.html" }
    ]
  }
};
