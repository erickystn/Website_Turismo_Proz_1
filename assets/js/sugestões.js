// Tratando o input Nome
const regexNome = /^[A-Za-z]+(?:\s+[A-Za-z]+)*\s*$/;
const nome = document.querySelector("#name");
const nomeCheck = (e) => {
  if (e.target.value.length < 3 || !regexNome.test(e.target.value)) {
    if (!document.querySelector(".err-nome").classList.contains("error")) {
      document.querySelector(".err-nome").classList.add("error");
      nome.classList.add("error-input");
    }
  } else {
    document.querySelector(".err-nome").classList.remove("error");
    nome.classList.remove("error-input");
  }
};
nome.addEventListener("blur", nomeCheck);

// Tratando o input email
const email = document.querySelector("#email");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailCheck = (e) => {
  if (!regexEmail.test(e.target.value)) {
    if (!document.querySelector(".err-email").classList.contains("error")) {
      document.querySelector(".err-email").classList.add("error");
      email.classList.add("error-input");
    }
  } else {
    document.querySelector(".err-email").classList.remove("error");
    email.classList.remove("error-input");
  }
};
email.addEventListener("blur", emailCheck);

// Tratando o Text AREA
const sugestaoTexto = document.querySelector("#sugestaoText");
const regexSugestao = /\S+/g;
const sugestoesCheck = (e) => {
  const textoSemEspacos = e.target.value.trim() || "A";

  if (textoSemEspacos.match(regexSugestao).length >= 15) {
    document.querySelector(".err-sugestao").classList.remove("error");
    sugestaoTexto.classList.remove("error-input");
  } else {
    if (!document.querySelector(".err-sugestao").classList.contains("error")) {
      document.querySelector(".err-sugestao").classList.add("error");
      sugestaoTexto.classList.add("error-input");
    }
  }
};
sugestaoTexto.addEventListener("blur", sugestoesCheck);

// Tratando o formulario completo
const form = document.querySelector("#form-sugestao");
const submitForm = (e) => {
  e.preventDefault();

  checkNome = nome.value.length < 3 ? false : true;

  checkEmail = regexEmail.test(email.value);

  checkSugestao =
    (sugestaoTexto.value.trim() || "A").match(regexSugestao).length >= 15;

  const checkForm = checkNome && checkEmail && checkSugestao;
  tempoRestante = 10;
  if (checkForm) {
    document.querySelector(".form-wrapper").innerHTML = `
           <div class="loader">Partiu!</div>


            <h2 style="text-align: center;" class="description">

            Seu formulário foi enviado!
            <br>
            Obrigado pela sua sugestão.
            <br>



            Em <span id="contador">${tempoRestante}</span> segundos, você será redirecionado para nossa página Inicial.
            <br>
            Se isso não ocorrer, <a style=" color: #42a7c3;" href="/">clique aqui! </a>


            </h2>
        `;
    document.querySelector(".banner").scrollIntoView({ behavior: "smooth" });

    const intervalo = setInterval(() => {
      tempoRestante--;
      document.querySelector("#contador").innerHTML = tempoRestante;

      if (tempoRestante <= 1) {
        window.location.assign("/");

        clearInterval(intervalo);
      }
    }, 1000);
    intervalo();
  } else {
    if (!document.querySelector(".err-submit").classList.contains("error")) {
      document.querySelector(".err-submit").classList.add("error");
    }
  }
};
form.addEventListener("submit", submitForm);

//Variaveis para pagina iniciar carregada de info
// nome.value = "Ana Sperantto";
// email.value = "ana_ana@live.com";
// sugestaoTexto.value = `Olá equipe do Blog Partiu!, gostaria de sugerir o incrível restaurante "Sabor Brasileiro"
// localizado na encantadora cidade de Paraty, Brasil. A culinária é uma verdadeira viagem pelos sabores do país,
// com pratos típicos e ingredientes frescos. Recomendo provar a feijoada e a caipirinha, autênticos e deliciosos.`;
