const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

//metodo: ForEach
// Percorre o array trazendo o valor e o indice.
numero.forEach((valor, indice) => {
  console.log("Na posiçao: ", indice, "esta o valor: ", valor);
});

//metodo filter()
// permite que crie uma nova lista sem modificar a
// original (dentro de uma constante).

const numerosPares = numero.filter((numero) => {
  return numero % 2 === 0; //condiçao verdadeira
});

const numerosImpares = numero.filter((numero) => {
  return numero % 2 != 0; //condiçao verdadeira
});

console.log("todos os numero: ", numero);
console.log("todos os pares: ", numerosPares);
console.log("todos os impares: ", numerosImpares);

//metodo MAP
// Permite manipuçar os dados, armazenando em um novo array
// sem modificar o array original.

const numeroDobrados = numero.map((numero) => {
  return numero * 2 //Açao de modificaçao
});

console.log("valores dobrados: ", numeroDobrados);