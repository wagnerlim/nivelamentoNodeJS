//! Exercicio 2
//* Crie um algoritimo que leia um ano qualquer e retorne a idade a partir desse ano considerando o ano atual.

//* Validações importantes!
//* Validar se o valor é um número.
//* O número não pode ser maior do que o ano atual e não pode ser menor do que 1900.

//? Ex: 2000
//? Resp: ano atual 2024, idade: 24

const task02 = (anoDigitado) => {
  const anoAtual = new Date().getFullYear();
  anoDigitado = Number(anoDigitado);

  if (typeof anoDigitado != "number") {
    console.log("Digitar apenas numeros");
  }
  else if (anoDigitado > anoAtual && anoDigitado < 1900) {
    console.log("Ano invalido!");
  }
  const idade = anoAtual - anoDigitado;

  return `Ano atual: ${anoAtual}, idade: ${idade}`;

};

console.log(task02(process.argv[2]));
