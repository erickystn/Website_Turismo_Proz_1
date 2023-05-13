const createBANNER= (imgSrc, captionText, containerBox) => {
    fetch("/pages/components/banner.html")
      .then((response) => response.text())
      .then((html) => {
        const range = document.createRange();
        const fragment = range.createContextualFragment(html);
        const img = fragment.querySelector("img");
        img.src = imgSrc;
        const caption = fragment.querySelector(".banner-caption");
        caption.textContent = captionText;

        const container = document.querySelector(containerBox);
        container.appendChild(fragment.querySelector('.banner-container'));
      });
  };
  