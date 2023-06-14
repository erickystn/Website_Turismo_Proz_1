const form = document.querySelector("#form-sugestao");
const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const sugestaoTexto = document.querySelector("#sugestaoText");
const receberNotificacoes = document.querySelector("#novidades");
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexSugestao = /\S+/g;

nome.value = "ANA";
email.value = "xkyx@live.com";
sugestaoTexto.value =
  "A brisa suave sopra pelos campos verdes, enquanto os pássaros cantam melodias encantadoras no céu azul.";

// .err-email, .err-nome, .err-sugestao, .err-submit
const nomeCheck = (e) => {
  if (e.target.value.length < 3) {
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

const sugestoesCheck = (e) => {
  const textoSemEspacos = e.target.value.trim() || "A";
  console.log(textoSemEspacos.match(regexSugestao).length);
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

const submitForm = (e) => {
  e.preventDefault();

  checkNome = nome.value.length < 3 ? false : true;

  checkEmail = regexEmail.test(email.value);

  checkSugestao =
    (sugestaoTexto.value.trim() || "A").match(regexSugestao).length >= 15;

  const checkForm = checkNome && checkEmail && checkSugestao;
  console.log(checkForm);

  if (checkForm) {
    document.querySelector(".form-wrapper").innerHTML = `
            <h2 style="text-align: center;" class="description">

            Seu formulário foi enviado!
            <br>
            Obrigado pela sua sugestão.
            <br>



            Em <span id="contador">5</span> segundos, você será redirecionado para nossa página Inicial.
            <br>
            Se isso não ocorrer, <a style=" color: #42a7c3;" href="/">clique aqui! </a>


            </h2>
        `;
    tempoRestante = 10;
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
      sugestaoTexto.classList.add("error-input");
    }
  }
};

form.addEventListener("submit", submitForm);
