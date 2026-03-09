// H = Higher
// O = Order
// F = Funciton
// Funçao de Alta Order
// Funçao que recebe outras funçoes com parametros e argumento


function calcular(numero1, numero2, operacao) {
    return operacao (numero1, numero2);
};

function soma (num1, num2) {
    return num1 + num2;
};

function subtrair (num1, num2) {
    return num1 - num2;
};

// chamada da funçao da alta ordem
const resultadosoma = calcular(10, 8, soma);
console.log('a soma dos dois valores e: ', resultadosoma);


const resultadosubtracao = calcular(25, 15, subtrair);
console.log('a subtraçao dos dois numeros e: ',resultadosubtracao);
