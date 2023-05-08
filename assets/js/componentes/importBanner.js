fetch("/pages/componentes/banner.html")
    .then((response) => response.text())
    .then((html) => {
        document.querySelector("#container-banner-caption").innerHTML = html;
    });