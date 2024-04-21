//! Exercicio 7
//* Faça um algoritimo que leia um número Inteiro, A partir disso Faça ele retornar as seguintes informações no formato de um Objeto:
//* A Lista de números até chegar nele (Em qualquer ordenação).
//* A lista desses números em ordem s (Do maior para o menor),
//* A lista desses números em ordem crescente (Do menor para o maior),
//* Todos os números pares dessa lista (Do menor para o maior),
//* Todos os números impares dessa lista (Do menor para o maior),

//* Validações importantes!
//* Validar se é um número inteiro.

//? Ex 10;
//? {lista:[0,1,2,3,4,5,6,7,8,9,10], ok
//? decrescente:[10,9,7,8,6,5,4,3,2,1,0],
//? crescente:[0,1,2,3,4,5,6,7,8,9,10],
//? pares:[0,2,4,6,8,10],
//? impares:[1,3,7,9]},

const generateList = (numero) => {
  const lista = [];

  for (let index = 0; index <= numero; index++) {
    lista.push(index);
  }
  return lista;
};

const decrescente = (numero) => {
  const decrescente = generateList(numero);

  decrescente.sort((a, b) => b - a);

  return decrescente;
};

const crescente = (numero) => {
  const crescente = generateList(numero);

  crescente.sort((a, b) => a - b);

  return crescente;
};

const pares = (numero) => {
  const pares = generateList(numero);

  return pares.filter(function (pares) {
    if (pares % 2 == 0) {
      return true;
    }
  });
};

const impares = (numero) => {
    const impares = generateList(numero);
  
    return impares.filter(function (impares) {
      if (impares % 2 == 1) {
        return true;
      }
    });
  };

const task07 = (numero) => {
  if (isNaN(numero)) {
    throw new Error("Caracteres invalidos! Inserir apenas numeros.");
  }

  const resultadoFinal = {
    // lista: [],
    // decrescente: [],
    // crescente: [],
    // pares: [],
    // impares: []
  };
  resultadoFinal.lista = generateList(numero);
  resultadoFinal.decrescente = decrescente(numero);
  resultadoFinal.crescente = crescente(numero);
  resultadoFinal.pares = pares(numero);
  resultadoFinal.impares = impares(numero);
  resultadoFinal.sortido = generateList(numero).sort();
  //*JSON.stringify(resultadoFinal, null, 4); - Mostra todos os registros.
  //*console.table(resultadoFinal); - Transforma o resultado em tabela.

  console.log("resultadoFinal :>> ", resultadoFinal);
};

task07(process.argv[2]);
