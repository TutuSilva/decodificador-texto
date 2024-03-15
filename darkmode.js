let body = document.querySelector("body");
let headerTrail = document.querySelector("#header__trail__id");
let display = document.querySelector(".main__section__textbox__");
let textoUsuario = document.querySelector("#main__section__text__id");

headerTrail.addEventListener("click", () => {
  headerTrail.classList.toggle("dark");
  body.classList.toggle("dark");
  display.classList.toggle("dark");
  textoUsuario.classList.toggle("dark");
});

