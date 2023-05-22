const createBanner = (imgSrc, captionText, containerBox) => {
  const banner = document.createElement('figure');
  banner.classList.add("banner-container");
  const img = `<img src="${imgSrc}" alt="fundo-do-banner">`;
  const caption = `<figcaption class="banner-caption">${captionText}</figcaption>`
  const container = document.querySelector(containerBox);
  banner.innerHTML = img + caption;
  container.appendChild(banner);
};
