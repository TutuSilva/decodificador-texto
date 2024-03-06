const textoDigitado = document.querySelector("#main__section__text__id");
const textoDisplay = document.querySelector(
  "#main__section__textbox__textarea__id"
);

function btnCriptografia() {
  const textoEncriptar = criptografia(textoDigitado.value);
  textoDisplay.value = textoEncriptar;
}

function criptografia(textoCriptografado) {
  const arrayCriptografada = [
    ["e", "enter"],
    ["i", "imes"],
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
  textoDisplay.value = textoDesencriptar;
}

function descriptografia(textoDescriptografado) {
  const arrayCriptografada = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
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
