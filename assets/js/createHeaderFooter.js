const header = `
<div class="header">
  <div class="container">
    <div class="wrapper">
      <a href="/"><div class="logo">Partiu!</div></a>
      <nav>
        <ul class="menu">
          <!--  Menu para desktop -->
          <li><a href="/pages/pontos.html">Destinos</a></li>
          <li><a href="/pages/sugestoes.html">Sugestões</a></li>
          <li><a href="/pages/sobre.html">Sobre Nós</a></li>
          <li><a href="/pages/restaurantes.html">Restaurantes</a></li>
        </ul>
      </nav>

      <nav class="dropdown-menu">
        <span id="menu-icon"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#42a7c3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line></svg></span
        ><!--  sanduiche  -->
        <ul class="dropdown-list">
          <!--  lista para menu mobile  -->
          <li><a href="/pages/pontos.html">Destinos</a></li>
          <li><a href="/pages/sugestoes.html">Sugestões</a></li>
          <li><a href="/pages/sobre.html">Sobre Nós</a></li>
          <li><a href="/pages/restaurantes.html">Restaurantes</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
`;


document.querySelector("header").innerHTML = header;
const menuDropdown = document.querySelector(".dropdown-list");
const sandwich = document.querySelector("#menu-icon");

sandwich.addEventListener('click', () => {
  sandwich.classList.toggle("menu-icon-rotate");
  setTimeout(() => menuDropdown.classList.toggle("dropdown-list-on"), 500);

})



const footer = `
<div class="container">
  <div class="wrapper">
    <div class="footer">
      <section class="project-footer">
        <!--  Icone do Site e info -->
        <h3 class="logo-footer">Partiu!</h3>
        <div class="group">
          <h4>Projeto Integrador</h4>
          <h4>Grupo 1</h4>
          <h4>Proz</h4>
        </div>
      </section>

      <section class="about-us-footer">
        <!--  Icone do Site e info -->

        <h3>Sobre Nós</h3>
        <!-- Titulo  -->

        <a href="/pages/sobre.html">
          <!--  Link -->
          <figure class="members-footer">
            <img
              src="/assets/images/membros/edna.jpeg"
              alt="Membro Edna"
              title="Membro Edna"
            />
            <img
              src="/assets/images/membros/erick.jpg"
              alt="Membro Erick"
              title="Membro Erick"
            />
            <img
              src="/assets/images/membros/jessica.jpeg"
              alt="Membro Jessica"
              title="Membro Jessica"
            />
            <img
              src="/assets/images/membros/karen.jpg"
              alt="Membro Karen"
              title="Membro Karen"
            />
            <img
              src="/assets/images/membros/lucas.jpg"
              alt="Membro Lucas"
              title="Membro Lucas"
            />
          </figure>
        </a>
      </section>

      <nav class="menu-footer">
        <!--  Menu do footer -->
        <ul>
          <li><a href="/pages/pontos.html">Destinos</a></li>
          <li><a href="/pages/sugestoes.html">Sugestões</a></li>
          <li><a href="/pages/sobre.html">Sobre Nós</a></li>
          <li><a href="/pages/restaurantes.html">Restaurantes</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>
`;

document.querySelector("footer").innerHTML = footer;

setTimeout(function () {
  document.getElementsByTagName("body")[0].style.display = "block";
}, 1000);
