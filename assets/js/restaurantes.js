const paginar = async (numeroItemsPorPagina, paginaAtual) => {
  let cards = "";
  let pagination = "";
  const listaDeItems = await generateRestaurantes();

  const limiteDePaginas = Math.ceil(listaDeItems.length / numeroItemsPorPagina); //limite de paginas que podem ser geradas

  let itemLimite = paginaAtual * numeroItemsPorPagina;

  const itemInicial = itemLimite - numeroItemsPorPagina;

  if (itemLimite > listaDeItems.length) {
    itemLimite = listaDeItems.length;
  }
  for (let i = itemInicial; i < itemLimite; i++) {
    cards += createCard(
      listaDeItems[i].fotos[0],
      listaDeItems[i].nome,
      listaDeItems[i].sobre.substring(0, 138) + "...",
      "ponto",
      listaDeItems[i].id
    );
  }

  for (let i = paginaAtual - 1; i <= paginaAtual + 1; i++) {
    if (!(i > limiteDePaginas) && i != 0) {
      pagination += `<button type="button" onclick="paginar(8,${i})" class="pagination-button ${
        i == paginaAtual ? "pressed-button" : ""
      }">${i}</button>`;
    }
  }

  document.querySelector(".swipper").innerHTML = cards;
  document
    .querySelector(".container-search-bar")
    .scrollIntoView({ behavior: "smooth" });
  document.querySelector(".swiper-pagination").innerHTML = pagination;
};

paginar(8, 1);
