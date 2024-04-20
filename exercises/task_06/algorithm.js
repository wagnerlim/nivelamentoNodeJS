//! Exercicio 6
//* Faça um algoritimo que gere um número aleatorio de 0 a 10 e leia um número de 0 10, e diga se é o número que foi pensado ou não.

//* Validações importantes!
//* Validar se os valores são númericos.

//? Se for igual ao número lido deverá retornar a seguinte mensagem: Número gerado "X", Você adivinhou o número que estou pensando;
//? Se for diferente disso o console deve apresentar:  Número gerado "X" você errou o número que estou pensando.

const task06 = (numero) => {
  numero = Number(numero);

  if (isNaN(numero)) {
    throw new Error("Caracteres invalidos! Inserir apenas numeros.");
  }
  
  const numeroAleatorio = Math.floor(Math.random() * 10);

  if (numeroAleatorio === numero) {
    return `Número gerado "${numeroAleatorio}", Você adivinhou o número que estou pensando!`
  }
  return `Número gerado "${numeroAleatorio}" você errou o número que estou pensando!`
};

console.log(task06(process.argv[2]));
