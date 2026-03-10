const pessoa = {
  nome: "Gabriel",
  idade: 21,
  pet: ["pet"],
  nacionalidade: "Brasileiro",
};
// estrutura FOR IN nos permite percorrer o objeto, dessa forma, retornara
// todos as chaves de objeto dendo: nome, idade, pets e macionalidade
for (const chave in pessoa) {
  console.log("chave: ", chave);
};

// Acessando chaves e valores do objeto:
for (const chave in pessoa) {
  console.log("chave: ", chave);
  console.log("valor: ", pessoa[chave]);
};

// METOS PARA OBJETOS (keys, valores, entries)

//Obtendo todas as chaves e valores do objeto
const valores = Object.values(pessoa);

//obtendo todas as chaves do objeto
const chaves = Object.keys(pessoa);

//Obtendo as entradas do objeto, ou seja, as chaves e os valores
const entradas = Object.entries(pessoa);

console.log("chave: ", chaves);
console.log("valor: ", valores);
console.log("Entradas (chave/valor): ", entradas);