//! Exercicio 5
//* Crie um algoritimo que leia um número qualquer e verifique se ele é par ou impar

//* Validações importantes!
//* Validar se os valores são númericos.

//? Ex: 5
//? Resp: O número 5 é Par!
//? Ex: 8
//? Resp: O número 8 é Impar!

const task05 = (numero) => {
  numero = Number(numero);

  if (isNaN(numero)) {
    throw new Error("Caracteres invalidos! Inserir apenas numeros.")
  }

  if (numero % 2 == 0) {
    return `O número ${numero} é Par`;
  } 
  return `O número ${numero} é Impar`;
};

console.log(task05(process.argv[2], process.argv[3]));
