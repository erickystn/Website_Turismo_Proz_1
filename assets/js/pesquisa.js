const url = new URL(window.location.href);

const loadPage = () => {
  if (!url.searchParams.has("search") || !url.searchParams.get("search")) {
    console.log("Busca Vazia");
    return;
  }
  document.querySelector(".bar_input").value = url.searchParams.get("search");

  generateRestaurantes()
    .then((array) => buscaRestaurantes(array, url.searchParams.get("search")))
    .then((result) => {

    });

  generateLocais()
    .then((array) => buscaLocais(array, url.searchParams.get("search")))
    .then((result) => {
      
    });
};

window.onload = loadPage;