// arrays me permitem colocar varios dados dentro de uma unico espaço.

const fruta = ['Uva', 'Kiwi', 'Banana', 'melancia', 'Abacaxi'];
// const frutas = [0,1,2,3,4] 

// Exibir a primeira fruta do array
console.log("primeira fruta: ", fruta[0]);
// Exibindo a ultima fruta do array
console.log("Ultima fruta: ", fruta[4]);
// Exibindo o total de frutas do array
console.log("total de frutas: ", fruta.length);

// o metodo push serve para adicionar uma nova informaçao
fruta.push('melão');
console.log("total de frutas, depois do push: ", fruta.length);
console.log(fruta);

// metodo para remover informaçoe do array: aplice.
// 1 parametro: posiçao do array
// 2 parametro: quantos itens remover.
// removendo o abacaxi
fruta.splice(4, 1);
console.log(fruta);

// PERCORRER UMA ARRAY
// 3 maneira de percorrer um array: for, for/of, forEach.

// com laço FOR (para)

for (let i = 0; i < fruta.length; i++) {
  console.log("indice: ", i, "");
  console.log(fruta[i]);
};

// usando: forEach.
// maneira de percorrer usando incice e valor.
console.log("Percorrendo com o ForEach: ");
// indice -> posiçao no array
// valor -> valor de cada posiçao
fruta.forEach((valor, indice) => {
  console.log("indice: ", indice, valor);
});

// usando o for//of (para/em).
// armazena a informaçao dentro de uma variavel ou constante.
for (const fruta of fruta) {
  console.log("Fruta da vez: ", fruta);
};