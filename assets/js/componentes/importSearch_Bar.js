fetch("/pages/componentes/search_bar.html")
    .then((response) => response.text())
    .then((html) => {
        document.querySelector("#container-search-bar").innerHTML = html;
    });