async function sampleString() {
  for (let index = 0; index <= 10; index++) {
    // console.log("index :>> ", index);
  }
  const arrayDeValores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // arrayDeValores.forEach((element) => {
  // });
  // let valor = 0;
  // do {
  //   console.log("valor :>> ", valor);
  //   valor++;
  // } while (valor !== 5);

  // while (valor !== 5) {
  //   valor++;
  //   console.log("valor :>> ", valor);
  // }
  arrayDeValores.push(11);
  console.log("arrayDeValores :>> ", arrayDeValores);
  arrayDeValores.pop();
  console.log("arrayDeValores :>> ", arrayDeValores);
}

sampleString();

