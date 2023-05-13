fetch("../../pages/header.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelector("header").innerHTML = html;
  });

fetch("../../pages/footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelector("footer").innerHTML = html;
  });

setTimeout(function () {
  document.getElementsByTagName("body")[0].style.display = "block";
}, 600);