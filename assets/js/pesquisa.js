const url = new URL(window.location.href);

const loadPage = () => {
  document.querySelector(
    "head"
  ).innerHTML += `<title>PARTIU | Pesquisa </title>`;
  if (!url.searchParams.has("search") || !url.searchParams.get("search")) {
    document.querySelector(".loader").classList.add("loader-none");
    document.querySelector(
      ".container-result"
    ).innerHTML = `<div class="empty-search">
            <h3>Partiu Pesquisar?</h3>
            <img
              src="/assets/images/pesquisa/empty-search.svg"
              alt=""
              srcset=""
            />
          </div>`;


    return;
  }
  document.querySelector(".bar_input").value = url.searchParams.get("search");

  generateRestaurantes()
    .then((array) => buscaRestaurantes(array, url.searchParams.get("search")))
    .then((result) => {


      if (result == false) {
        document.querySelector(
          "#text-restaurantes"
        ).innerHTML = `0 resultados para <b>Restaurantes</b>`;
        document.querySelector(
          "#div-restaurantes .swipper"
        ).innerHTML = `<div class="not-found">
              <img src="/assets/images/pesquisa/notfound.svg" alt="" srcset="" >
              <h3>Não encontrado nenhum resultado nessa categoria</h3>
             </div>`;
        document.querySelector(".loader").classList.add("loader-none");

      } else {
        let cards = "";

        result.forEach((item) => {

          cards += createCard(
            item.fotos[0],
            item.nome,
            item.sobre.substring(0, 138) + "...",
            "restaurante",
            item.id
          );
        });

        document.querySelector(
          "#text-restaurantes"
        ).innerHTML = `${result.length} resultados para <b>Restaurantes</b>`;
        document.querySelector("#div-restaurantes .swipper").innerHTML = cards;
        document.querySelector(".loader").classList.add("loader-none");
      }
    });

  generateLocais()
    .then((array) => buscaLocais(array, url.searchParams.get("search")))
    .then((result) => {


      if (result == false) {
        document.querySelector(
          "#text-pontos"
        ).innerHTML = `0 resultados para <b>Destinos</b>`;
        document.querySelector(
          "#div-pontos .swipper"
        ).innerHTML = `<div class="not-found">
              <img src="/assets/images/pesquisa/notfound.svg" alt="" srcset="" >
              <h3>Não encontrado nenhum resultado nessa categoria</h3>
             </div>`;
      } else {
        let cards = "";

        result.forEach((item) => {

          cards += createCard(
            item.fotos[0],
            item.nome,
            item.sobre.substring(0, 138) + "...",
            "ponto",
            item.id
          );
        });

        document.querySelector(
          "#text-pontos"
        ).innerHTML = `${result.length} resultados para <b>Destinos</b>`;
        document.querySelector("#div-pontos .swipper").innerHTML = cards;
      }
    });
};

window.onload = loadPage;
