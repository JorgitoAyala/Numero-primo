const esPrimo = (numero) => {
  if (typeof numero != "number") {
    return "Lo ingresado debe ser un número.";
  }

  if (!Number.isInteger(numero)) {
    return "Lo ingresado debe ser un número entero.";
  }

  if (numero === 1 || numero === 0) {
    return "Ni el número 1 ni el 0 son considerados primos.";
  }

  if (numero < 0) {
    return "Lo ingresado debe ser un número entero positivo.";
  }

  let raiz = Math.floor(Math.sqrt(numero)) + 1;

  for (let i = 2; i < raiz; ++i) {
    if (numero % i == 0) {
      return `El número ${numero} <strong>NO</strong> es un número primo.`;
    }
  }

  return `El número ${numero} <strong>SI</strong> es un número primo.`;
};

var numero = Number(prompt("Escribe un número y evalúalo si es primo:", "0"));

document.getElementById("resultado").innerHTML = esPrimo(numero);
