const validations = (numero) => {
  let error;

  if (typeof numero != "number") {
    return (error = "Lo ingresado debe ser un número.");
  }

  if (!Number.isInteger(numero)) {
    return (error = "Lo ingresado debe ser un número entero.");
  }

  if (numero === 1 || numero === 0) {
    return (error = "Ni el número 1 ni el 0 son considerados primos.");
  }

  if (numero < 0) {
    return (error = "Lo ingresado debe ser un número entero positivo.");
  }

  return error;
};

const esPrimo = (numero) => {
  let raiz = Math.floor(Math.sqrt(numero)) + 1;

  for (let i = 2; i < raiz; ++i) {
    if (numero % i == 0) {
      return `El número ${numero} <strong>NO</strong> es un número primo.`;
    }
  }

  return `El número ${numero} <strong>SI</strong> es un número primo.`;
};

const numero = Number(prompt("Escribe un número y evalúalo si es primo:", "0"));

if (validations(numero)) {
  let validClass = document.getElementById("validation");
  validClass.classList.remove("hidden");
  validClass.innerHTML = validations(numero);
} else {
  document.getElementById("resultado").innerHTML = esPrimo(numero);
}
