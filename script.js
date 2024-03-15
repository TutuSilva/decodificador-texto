const textoDigitado = document.querySelector("#main__section__text__id");
const textoDisplay = document.querySelector(
  "#main__section__textbox__textarea__id"
);
const imagem = document.querySelector(".main__section__textbox__image");
const avisoSemMensagem = document.querySelector(
  ".main__section__textbox__placeholder__subtitle"
);
const avisoInstrucao = document.querySelector(
  ".main__section__textbox__placeholder__paragraph"
);
const copiarTexto = document.querySelector(
  ".main__section__textbox__copybutton"
);

function btnCopy() {
  navigator.clipboard.writeText(textoDisplay.value);
  alert("Texto copiado para sua area de transferencia.");
}

function limpaInfo() {
  imagem.style.display = "none";
  avisoSemMensagem.style.display = "none";
  avisoInstrucao.style.display = "none";
  copiarTexto.style.display = "block";
}

function btnCriptografia() {
  const textoEncriptar = criptografia(textoDigitado.value);
  if (textoEncriptar == "") {
    alert("O campo não pode ficar vazio.");
  } else {
    textoDisplay.style.display = "block";
    textoDisplay.value = textoEncriptar;
    limpaInfo();
  }
}

function criptografia(textoCriptografado) {
  const arrayCriptografada = [
    ["i", "imes"],
    ["e", "enter"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  textoCriptografado = textoCriptografado.toLowerCase();
  for (let i = 0; i < arrayCriptografada.length; i++) {
    if (textoCriptografado.includes(arrayCriptografada[i][0])) {
      textoCriptografado = textoCriptografado.replaceAll(
        arrayCriptografada[i][0],
        arrayCriptografada[i][1]
      );
    }
  }
  return textoCriptografado;
}

function btnDescriptografia() {
  const textoDesencriptar = descriptografia(textoDigitado.value);
  if (textoDigitado.value == "") {
    alert("O campo não pode ficar vazio.");
    return;
  } else {
    textoDisplay.value = textoDesencriptar;
    textoDisplay.style.display = "block";
    limpaInfo();
  }
}

function descriptografia(textoDescriptografado) {
  const arrayCriptografada = [
    ["ufat", "u"],
    ["ober", "o"],
    ["ai", "a"],
    ["enter", "e"],
    ["imes", "i"],
  ];
  textoDescriptografado = textoDescriptografado.toLowerCase();
  for (let i = 0; i < arrayCriptografada.length; i++) {
    if (textoDescriptografado.includes(arrayCriptografada[i][0])) {
      textoDescriptografado = textoDescriptografado.replaceAll(
        arrayCriptografada[i][0],
        arrayCriptografada[i][1]
      );
    }
  }
  return textoDescriptografado;
}
