//! Exercicio 3
//* Crie um algoritimo que leia o número total de horas trabalhadas em um mês, e o salario por hora e retorne o salario total que ele deve receber.

//* Validações importantes!
//* Validar se os valores são númericos.
//* No console da resposta a formatação deve ser feita através da função: toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).

//? Ex: 128,40
//? Resp: R$ 5.120,00

const task03 = (salarioPorHora, horasTrabalhadas) => {
  if (isNaN(salarioPorHora) || isNaN(horasTrabalhadas)) {
    throw new Error("Caracteres invalidos! Digitar apenas numeros.")
  }

  const salario = salarioPorHora * horasTrabalhadas;

  return salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

};

console.log('Salario: >> ', task03(process.argv[2], process.argv[3]));