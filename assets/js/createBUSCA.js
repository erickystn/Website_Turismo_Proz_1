fetch("/pages/components/busca.html")
    .then((response) => response.text())
    .then((html) => {
        document.querySelector(".container-search-bar").innerHTML = html;
    });