generateRestaurantes().then((element) => {
  let cards = "";
  console.table(element);
  let final;
  if (element.length < 9) final = element.length;
  else final = 9;
  for (let index = 0; index < final; index++) {
    cards += createCard(
      element[index].fotos[0],
      element[index].nome,
      element[index].sobre.substring(0, 138) + "...",
      "restaurante",
      element[index].id
    );
  }
  document.querySelector(".swipper").innerHTML = cards;
});
