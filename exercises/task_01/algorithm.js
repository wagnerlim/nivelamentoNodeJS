//! Exercicio 1
//* Implemente uma função que calcule a quantidade mínima de passos completos que pessoa levaria para chegar do ponto A ou B,
//* sabendo que cada passo essa pessoa percorre uma distância fixa.

//* Validações importantes!
//* Validar se todas as entradas são numéricas.
//* O número de passos deve ser o menor número inteiro para chegar ao destino.
//* A distância de A não pode ser menor que B.
//* A distância fixa por passo não pode ser negativa.

//? Ex: 5,40,2
//? Resp: 18

const task01 = (pontoA, pontoB, distanciaPassos) => {
  pontoA = Number(pontoA);
  pontoB = Number(pontoB);
  distanciaPassos = Number(distanciaPassos);

  if (typeof pontoA == "number" && typeof pontoB == "number" && typeof distanciaPassos == "number") {
    if (distanciaPassos <= 0) {
      console.log("Numero de passos não pode ser menor ou igual a 0!")
    }
    else if (pontoA < pontoB) {
      console.log("A distancia do Ponto A não pode ser menor que a do Ponto B!")
    }
    else {

      return Math.round((pontoA - pontoB) / distanciaPassos);

    }
  }
};

console.log('Resultado :>> ', task01(process.argv[2], process.argv[3], process.argv[4]));
