const createCTA = (imgSrc, pText, containerBox) => {
  const figure = document.createElement("figure");
  figure.classList.add("banner-call");
  figure.innerHTML = `<img src="${imgSrc}" alt="Banner Image" />`;

  const containerLeft = document.createElement("div");
  containerLeft.classList.add("container-left");
  containerLeft.innerHTML = `<p class="left-content">${pText}</p>`;

  document.querySelector(containerBox).appendChild(figure);
  document.querySelector(containerBox).appendChild(containerLeft);

  //  Versão mais direta
  //   const cta = `<figure class="banner-call">
  //                 <img src="${imgSrc}" alt="Banner Image" />
  //               </figure>
  //               <div class="container-left">
  //                 <p class="left-content">${pText}</p>
  //               </div>
  // `;
  //   document.querySelector(containerBox).innerHTML = cta;
};
