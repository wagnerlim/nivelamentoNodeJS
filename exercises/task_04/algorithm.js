//! Exercicio 4
//* Crie um algoritimo que leia a cotação do dolar e um valor X, e então converta o valord para dolar

//* Validações importantes!
//* Validar se os valores são númericos.
//* No console da resposta a formatação deve ser feita através da função: toLocaleString('en-US', { style: 'currency', currency: 'USD' }).

//? Ex: 5.19, 5000
//? Resp: $ 964,25

const task04 = (valorDolar, valorComprado) => {
  valorDolar = Number(valorDolar);
  valorComprado = Number(valorComprado);

  if (isNaN(valorDolar) || isNaN(valorComprado)) {
    throw new Error("Caracteres invalidos! Inserir apenas numeros.");
  }

  const cotacao = Math.ceil(valorComprado / valorDolar);

  return cotacao.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

console.log("Cotação: >> ", task04(process.argv[2], process.argv[3]));
