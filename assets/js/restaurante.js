const url = new URL(window.location.href);

const loadPage = async () => {
  if (!url.searchParams.has("target") || !url.searchParams.get("target")) {
    window.location.replace("/");
  } else {
    console.log(typeof Number(url.searchParams.get("target")));

   await generateRestaurantes()
        .then((array) =>
        buscaRestaurantes(array, Number(url.searchParams.get("target")), true)
      )
      .then((result) => {
        if (!result) {
          window.location.assign("/");
          }

          const imgBanner = result.nome.replace(/ /g, "+");

          createBanner(
            `https://source.unsplash.com/random/1200x800/?${imgBanner}`,
            result.nome,
            ".container-banner-caption"
          );
        console.log(result);

        const sectionImages = `
                <div class="a1">
            <img src="${result.fotos[0]}" alt="">
          </div>
          <div class="a2">
            <div class="a2-1">
              <img src="${result.fotos[1]}" alt="">
            </div>
            <div class="a2-2">
              <img src="${result.fotos[2]}" alt="">
            </div>
          </div>
           `;
        document.querySelector(".container-a").innerHTML = sectionImages;

        let lista = "";
        for (const content of result.pratos) {
          lista += `<li> ${content}</li>`;
        }
        const sectionSobre = `
            <div class="b1-1">
              <p>
                ${result.sobre}
              </p>
            </div>
            <div class="b1-2">
              <ol class="ord-list">
                ${lista}
              </ol>
            </div>
          `;

          document.querySelector(".b1").innerHTML = sectionSobre;

          document.querySelector(".b2-1").innerHTML = `
            <p class="ol-title">
                <strong>
                  Endereço:
                  ${result.localizacao}
                </strong>
              </p>
          `;

   });
  }
};

window.onload = loadPage;
