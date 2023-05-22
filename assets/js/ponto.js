const url = new URL(window.location.href);

const loadPage = () => {
  if (!url.searchParams.has("target") || !url.searchParams.get("target")) {
    window.location.replace("/");
  } else {


    generateLocais()
      .then((array) =>
        buscaLocais(array, Number(url.searchParams.get("target")), true)
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
        for (const content of result.pontos) {
          lista += `<li> ${content}</li>`;
        }
        const sectionSobre = `
            <div class="b1-1">
              <p>
                ${result.sobre}
              </p>
            </div>
            <div class="b1-2">
              <ul class="ord-list">
                ${lista}
              </ul>
            </div>
          `;

        document.querySelector(".b1").innerHTML = sectionSobre;
        lista = "";
        for (const content of result.locomocao) {
          lista += `<li> ${content}</li>`;
        }
        const sectionLocomocao = `
          <h3 class="ol-title">Locomoção</h3>
          <ol class="ord-list">
          ${lista}
          </ol>`;
        document.querySelector(".b2-2").innerHTML = sectionLocomocao;
      });
  }
};

window.onload = loadPage;
