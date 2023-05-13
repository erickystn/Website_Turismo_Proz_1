const createCTA= (imgSrc, pText, containerBox) => {
    fetch("/pages/componentes/cta.html")
      .then((response) => response.text())
      .then((html) => {
        const range = document.createRange();
        const fragment = range.createContextualFragment(html);
        const img = fragment.querySelector("img");
        img.src = imgSrc;
        const p = fragment.querySelector("p");
        p.textContent = pText;
  
        const container = document.querySelector(containerBox);
        container.appendChild(fragment);
      });
  };