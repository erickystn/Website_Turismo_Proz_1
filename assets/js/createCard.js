const createCard = (cardImg, cardTitle, cardText,typePage, target) => {
  const card = `<div class="card">
            <div class="card-header">
              <img
                src="${cardImg}"
                alt="#"
                class="card-img"
              />
            </div>
            <div class="card-body">
              <h2 class="card-titulo">${cardTitle}</h2>
              <p class="card-texto">
                ${cardText}
              </p>
            </div>
            <div class="card-footer">
              <button class="btn-card" onclick="window.open('/pages/${typePage}.html?target=${target}', '_blank')">
                <span>Saiba Mais</span>
                <i class="fas fa-external-link-alt"></i>
              </button>
            </div>
          </div>
`;
  return card;
};
