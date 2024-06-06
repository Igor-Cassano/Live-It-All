let esperienze = [
  {
    "type": "corpoLibero",
    "image": "img/bungeejumping.png",
    "description": "Monte Stockhorn, Svizzera",
    "title": "Bungee Jumping",
    "link": "corpoLibero.html"
  },
  {
    "type": "veicoli",
    "image": "img/quad.png",
    "description": "Safari Tra Le Dune, Dubai",
    "title": "Quad nel Deserto",
    "link": "veicoli.html"
  },
  {
    "type": "urbex",
    "image": "img/catacombe.png",
    "description": "Catacombe Sotterranee, Parigi",
    "title": "Esplorazione Guidata Catacombe",
    "link": "urbex.html"
  },
  {
    "type": "sopravvivenza",
    "image": "img/bosco.png",
    "description": "Foresta Amazonica, Brasile",
    "title": "Corso di Sopravvivenza",
    "link": "sopravvivenza.html"
  },
  {
    "type": "horror",
    "image": "img/horror.png",
    "description": "The Zombie Experience, Chivasso",
    "title": "Invasione Zombie",
    "link": "guerra.html"
  },
  {
    "type": "corpoLibero",
    "image": "img/arrampicata.png",
    "description": "San Dorligo della Valle, Trieste",
    "title": "Arrampicata Estrema",
    "link": "corpoLibero.html"
  },
  {
    "type": "veicoli",
    "image": "img/drift.png",
    "description": "Drift Arena Drifting School, Bologna",
    "title": "Esperienza Drift",
    "link": "veicoli.html"
  },
  {
    "type": "urbex",
    "image": "img/basenato.png",
    "description": "Dosso dei Galli, Prealpi Bresciane",
    "title": "Base Nato Abbandonata",
    "link": "urbex.html"
  },
  {
    "type": "sopravvivenza",
    "image": "img/isoladeserta.png",
    "description": "Isola Rashdoo, Maldive",
    "title": "Sopravvivenza Isola Deserta",
    "link": "sopravvivenza.html"
  },
];

let carrello;

window.addEventListener("load", function() {
  const cardContainer = document.getElementById("card-container");
  for (let i = 0; i < esperienze.length; i++) {
    let article = document.createElement("article");
    article.classList.add("card__article");

    let img = document.createElement("img");
    img.classList.add("card__img");
    img.src = esperienze[i].image;

    let cardData = document.createElement("div");
    cardData.classList.add("card__data");

    let cardDescripion = document.createElement("span");
    cardDescripion.classList.add("card__description");
    cardDescripion.textContent = esperienze[i].description;
    cardData.appendChild(cardDescripion);

    let cardTitle = document.createElement("h2");
    cardTitle.classList.add("card__title");
    cardTitle.textContent = esperienze[i].title;
    cardData.appendChild(cardTitle);

    let divButton = document.createElement("div");
    divButton.classList.add("div__button");

    let cardButton = document.createElement("a");
    cardButton.href = esperienze[i].link;
    cardButton.classList.add("card__button");
    cardButton.textContent = "Vedi Altro";
    divButton.appendChild(cardButton);

    let addCart = document.createElement("a");
    addCart.href = "pagamento.html";
    addCart.classList.add("card__button");
    addCart.textContent = "Acquista";
    divButton.appendChild(addCart);

    cardData.appendChild(divButton);
    article.appendChild(img);
    article.appendChild(cardData)

    cardContainer.appendChild(article);
  }
});