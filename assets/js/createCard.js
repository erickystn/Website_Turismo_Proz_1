const card = ' <div class="card"><figure><img src="/assets/images/restaurantes/hamburguer.jpg" alt="Hamburguer" /></figure><h2 class="card-title">Fornada Maluca</h2><p> O melhor Hamburguer da região galinácea! Os lanches e petiscos de mais alto padrão de sabor... </p><button class="card-button">Saiba mais</button></div>'
const cardArray = Array(10).fill(card)
const cardsElement = document.querySelector(".cards")
cardArray.forEach(card => cardsElement.innerHTML += card)