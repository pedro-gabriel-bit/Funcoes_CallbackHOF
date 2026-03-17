//Selecionando elementos do HTML com querySelector
const LoadDataBtn = document.querySelector("#LoadDataBtn");
const listaPessoas = document.querySelector("#listaPessoas");

async function carregarPessoas() {

  try {
    //faz o requisiçao do JSON
    const response = await fetch("pessoas.json");

    //Converte a resposta da requisicao para objeto JavaScript
    const pessoas = await response.json();

    console.log(pessoas);

    pessoas.forEach((pessoa)=> {

      const li = document.createElement("li");

      li.innerHTML = `<strong>${pessoa.nome}<strong><br>
      idade: ${pessoa.idade}<br>
      curso: ${pessoa.detalha_estudo.curso}<br>
      `;

      listaPessoas.appendChild(li);
    });

  } catch (error) {
    console.error("Erro ao carregar JSON", error);

  };

};

//Evento para o botao de carregamento de pessoas
LoadDataBtn.addEventListener("click", carregarPessoas);

//Outras Opçeis de conversao:
// JSON para OBJETO
const JavaScript = '{"nome:" "joao", "idade:" 30}'

// constante com o JSON convertido em Objeto
const objeto = JSON.parse(jsonString)
// OBJETO para JSON
//Transformando objeto em JSON
const objeto_JSON = JSON.stringify(objeto);