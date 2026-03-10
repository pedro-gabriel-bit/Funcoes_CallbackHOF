//Criando objetos em JS

const pessoa = {
  nome: "Maicon",
  idade: "34",
  profissão: "Cantor",
};
//Adicionando nova propriedade no objeto pessoa
pessoa.sobrenome = "Jackson"

//Exibindo nova propriedade no objeto
console.log("nome: ",pessoa.nome);
console.log("sobrenome: ",pessoa.sobrenome);

const livro = {
  titulo: "O ppequeno principe",
  paginas: 300,
};

//adicionado novas propriedades  ao objeto livro
livro.publicado = true;//Propriedade do tipo boolem
livro.idiomas = [
  "Portugues, Ingles, Espanhol"
];// propriedade com array

//Adicionado informaçoes ao array idioma, presente no objeto livro
livro.idiomas.push("Frances");
livro.idiomas.push("Mandarim");

console.log("Livro: ", livro);

//deletando propriedade pagina, do objeto livro
delete livro.paginas;

console.log("Livro depois de remover as paginas", livro);

const autor = {
  nome: "Antonio de Saint-Exupery",
  nacionalidade: "frances",
  idade: 72,
};

// console.log("Autor: ",autor)

//aplicando o objeto autor inteiro para propriedade de objeto livro
livro.autor = autor

console.log(livro);

//Exibindo o objeto autor, atraves do objeto livro
console.log("Autor de livro", livro["autor"]);