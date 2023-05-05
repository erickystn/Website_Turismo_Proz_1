fetch("/pages/banner.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro ao carregar HTML");
    }
    return response.text();
  })
  .then((html) => {
    const range = document.createRange();

    const fragment = range.createContextualFragment(html);

    const img = fragment.querySelector("img");

    img.src = "/assets/images/pontos-turisticos/call-to-act.png";

    const p = fragment.querySelector("p");

    p.textContent =
      "Descubra o próximo lugar incrível para explorar com nossas indicações de viagem.";

    const container = document.querySelector(".container-call");
    container.appendChild(fragment);
  });
