fetch("/pages/componentes/Header.html")
    .then((response) => response.text())
    .then((html) => {
        document.querySelector("header").innerHTML = html;
    });
