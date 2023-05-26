const header = `
<div class="header">
  <div class="container">
        <div class="wrapper">
        <a href="/"><div class="logo">Partiu!</div></a>
        <nav>
          <ul class="menu"> <!--  Menu para desktop -->
            <li><a href="/pages/pontos.html">Destinos</a></li>
            <li><a href="/pages/sugestoes.html">Sugestões</a></li>
            <li><a href="/pages/sobre.html">Sobre Nós</a></li>
            <li><a href="/pages/restaurantes.html">Restaurantes</a></li>
          </ul>
        </nav>
        <span id="menu-icon" class="fa-solid fa-bars fa-2xl"></span><!--  sanduiche  -->
      </div>

      <ul class="dropdown-menu"> <!--  lista para menu mobile  -->
        <li><a href="/pages/pontos.html">Destinos</a></li>
            <li><a href="/pages/sugestoes.html">Sugestões</a></li>
            <li><a href="/pages/sobre.html">Sobre Nós</a></li>
            <li><a href="/pages/restaurantes.html">Restaurantes</a></li>
      </ul>
    </div>
  </div>

        </div>
  </div>
</div>
`;

document.querySelector("header").innerHTML = header;

const footer = `
<div class="container">
<div class="wrapper">
<div class="footer">

  <section class="project-footer"> <!--  Icone do Site e info -->
    <h3 class="logo-footer">Partiu!</h3>
    <div class="group">
      <h4>Projeto Integrador</h4>
      <h4>Grupo 1</h4>
      <h4>Proz</h4>
    </div>
  </section>

  <section class="about-us-footer"> <!--  Icone do Site e info -->

    <h3>Sobre Nós</h3> <!-- Titulo  -->

    <a href="/pages/sobre.html"> <!--  Link -->
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

  <nav class="menu-footer"> <!--  Menu do footer -->
    <ul>
      <li><a href="/pages/pontos.html">Destinos</a></li>
      <li><a href="/pages/sugestoes.html">Sugestões</a></li>
      <li><a href="/pages/sobre.html">Sobre Nós</a></li>
      <li><a href="/pages/restaurantes.html">Restaurantes</a></li>
    </ul>
  </nav>
</div>
</div>
</div>`;

document.querySelector("footer").innerHTML = footer;

setTimeout(function () {
  document.getElementsByTagName("body")[0].style.display = "block";
}, 1000);
