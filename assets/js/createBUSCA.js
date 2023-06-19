
window.addEventListener('load', () => {
    const form = document.createElement("form");
    form.action = "/pages/pesquisa.html";
    form.classList.add("input-container");
    form.innerHTML = `<fieldset class="search-bar_btn">
        <input class="bar_input" id="search" type="text" name="search" placeholder="Procure pelo seu próximo destino de viagem ou próximo prato...">
        <button class="btn_search" ><i class="fa fa-search"></i></button>
        </fieldset>

    `;
    document.querySelector(".container-search-bar").appendChild(form);
})
