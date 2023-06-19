const paginar = async (numeroItemsPorPagina, paginaAtual) => {
  let cards = "";
  let pagination = "";
  const listaDeItems = await generateRestaurantes();

  const limiteDePaginas = Math.ceil(listaDeItems.length / numeroItemsPorPagina); //limite de paginas que podem ser geradas

  let itemLimite = paginaAtual * numeroItemsPorPagina;

  const itemInicial = itemLimite - numeroItemsPorPagina;

  if (itemLimite > listaDeItems.length) {
    itemLimite = listaDeItems.length;
  }
  for (let i = itemInicial; i < itemLimite; i++) {
    cards += createCard(
      listaDeItems[i].fotos[0],
      listaDeItems[i].nome,
      listaDeItems[i].sobre.substring(0, 138) + "...",
      "ponto",
      listaDeItems[i].id
    );
  }

   for (let i = paginaAtual - 1; i <= paginaAtual + 1; i++) {
     if (!(i > limiteDePaginas) && i != 0) {
       pagination += `<button type="button" onclick="paginar(8,${i})" class="pagination-button ${
         i == paginaAtual ? "pressed-button" : ""
       }">${i}</button>`;
     }
   }

   document.querySelector(".swipper").innerHTML = cards;
   document
     .querySelector(".container-search-bar")
     .scrollIntoView({ behavior: "smooth" });
  document.querySelector(".swiper-pagination").innerHTML = pagination;


};

paginar(8, 1);

// console.log("hello Friends");
// let list_elemnts = document.querySelector("#list");
// let pagination_elemnts = document.querySelector("#pagination");

// current_page = 1;
// row = 5;

// function DisplaysItems(current_page, row, items, wrapper) {
//   wrapper.innerHTML = "";
//   current_page--;
//   // console.log(current_page);
//   // console.log(row);

//   let start = current_page * row;
//   let end = start + row;
//   // console.log(start);
//   // console.log(end);
//   // console.log(items);
//   let PaginationItems = items.slice(start, end);

//   PaginationItems.map((item) => {
//     let items_elemnts = document.createElement("div");
//     items_elemnts.classList.add("item");
//     items_elemnts.innerText = item;
//     wrapper.appendChild(items_elemnts);
//   });
// }
// function setUpPagination(items, row, pagination_elemnts) {
//   pagination_elemnts.innerHTML = "";
//   let PageCount = Math.ceil(items.length / row);
//   for (let i = 1; i < PageCount + 1; i++) {
//     let btn = PaginationButton(items, i);
//     pagination_elemnts.appendChild(btn);
//   }
// }
// function PaginationButton(items, page) {
//   let button = document.createElement("button");
//   button.innerText = page;
//   if (current_page === page) {
//     button.classList.add("active");
//   }
//   button.addEventListener("click", function () {
//     current_page = page;
//     DisplaysItems(current_page, row, items, list_elemnts);
//     let current_btn = document.querySelector(".pagenumbers button.active");
//     current_btn.classList.remove("active");
//     button.classList.add("active");
//   });
//   return button;
// }
// DisplaysItems(current_page, row, listItems, list_elemnts);
// setUpPagination(listItems, row, pagination_elemnts);
