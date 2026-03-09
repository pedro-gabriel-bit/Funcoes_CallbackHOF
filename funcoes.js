// funcao e declarada com: palavras reservadas "function" + nome da função();
// os parteses gurdão o parametro
function saudacao(nome) {
    console.log('Ola,', nome);

};
saudacao("eu");
//quando uma funcao retorna um valor: usar a palavra reservada "return"
function calcDobro(numero) {
    return numero * 2;
};
// armazena a funçao com parametro dentro de uma constante ou variavel
const numeroDobro = calcDobro(30);
console.log(' o dobro de 30 ->', numeroDobro);

// ARROW FUNCTION

const saud = (nome) => {
    console.log('Oi,', nome);

};

saud("Eu");

const dobro = (num) => {
    return num * 2;
};
const numeroDobrado = dobro(7);
console.log('O dobro de 7 ->', numeroDobrado);

// FUNÇÃO SIMPLIFICADA
//cont + nomeadaFuçao + parametro + açao
const saudacao2 = nome2 => console.log('Oii, ', nome2);
saudacao2('Euu');

const dobro2 = numero => numero * 2;
const numeroDobro2 = dobro2(13);
console.log(' O dobro de 13 e ->', numeroDobro2);