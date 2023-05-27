generateRestaurantes().then((element) => {
  const arrayShuffle = _.shuffle(element);

  let cards = "";

  const final = 4;

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

  const final = 4;
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
