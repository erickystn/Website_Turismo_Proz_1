generateRestaurantes().then((element) => {
  const arrayShuffle = _.shuffle(element);

  let cards = "";

  const final = 3;

  for (let index = 0; index < final; index++) {
    cards += createCard(
      arrayShuffle[index].fotos[0],
      arrayShuffle[index].nome,
      arrayShuffle[index].sobre.substring(0, 138) + "...",
      "restaurante",
      arrayShuffle[index].id
    );
  }
  document.getElementById("restaurantes").innerHTML = cards;
});

generateLocais().then((element) => {
  const arrayShuffle = _.shuffle(element);

  let cards = "";

  const final = 3;
  for (let index = 0; index < final; index++) {
    cards += createCard(
      arrayShuffle[index].fotos[0],
      arrayShuffle[index].nome,
      arrayShuffle[index].sobre.substring(0, 138) + "...",
      "ponto",
      arrayShuffle[index].id
    );
  }
  document.querySelector(".swipper").innerHTML = cards;
});

document
  .querySelector("#section-restaurantes")
  .addEventListener("click", () =>
    window.location.assign("/pages/restaurantes.html")
  );

document
  .querySelector("#section-pontos")
  .addEventListener("click", () =>
    window.location.assign("/pages/pontos.html")
  );
