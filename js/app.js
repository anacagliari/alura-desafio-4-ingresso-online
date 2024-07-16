function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso == 'pista') {
        comprarPista(quantidade);
    }
    if (tipoIngresso == 'superior') {
        comprarCadSuperior(quantidade);
    }
    if (tipoIngresso == 'inferior') {
        comprarCadInferior(quantidade);
    }

}

function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent); //100;

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Favor preencher quantidade.");
    } else if (quantidade > quantidadePista) {
        alert("Ingressos insuficientes de PISTA.");
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert("Compra realizada com sucesso!");
    }
}

function comprarCadSuperior(quantidade) {
    let quantidadeCadSuperior = parseInt(document.getElementById('qtd-superior').textContent); //200;

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Favor preencher quantidade.");
    } else if (quantidade > quantidadeCadSuperior) {
        alert("Ingressos insuficientes de CADEIRA SUPERIOR.");
    } else {
        quantidadeCadSuperior = quantidadeCadSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeCadSuperior;
        alert("Compra realizada com sucesso!");
    }
}

function comprarCadInferior(quantidade) {
    let quantidadeCadInferior = parseInt(document.getElementById('qtd-inferior').textContent); //400;

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Favor preencher quantidade.");
    } else if (quantidade > quantidadeCadInferior) {
        alert("Ingressos insuficientes de CADEIRA INFERIOR.");
    } else {
        quantidadeCadInferior = quantidadeCadInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeCadInferior;
        alert("Compra realizada com sucesso!");
    }
}

/* desafios:
        1--> Adicione uma verificação no código acima para garantir que a quantidade inserida pelo usuário seja um número positivo. Se o valor não for válido, exiba uma mensagem de erro adequada.

        2--> Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa string em um número inteiro e retorne o resultado.

function converterParaInteiro(valorString) {
    return parseInt(valorString);
}

// Exemplo de uso
let valorString = "42";
let valorInteiro = converterParaInteiro(valorString);
console.log(valorInteiro);  // Saída esperada: 42


        3--> Escreva um programa de calculadora simples com funções separadas para adição, subtração, multiplicação e divisão.
            Utilize um bloco condicional para determinar qual função executar com base em uma variável que representa a operação desejada.

function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: divisão por zero.";
    }
}

function calculadora(operacao, a, b) {
    switch (operacao) {
        case 'soma':
            return adicao(a, b);
        case 'subtracao':
            return subtracao(a, b);
        case 'multiplicacao':
            return multiplicacao(a, b);
        case 'divisao':
            return divisao(a, b);
        default:
            return "Operação inválida.";
    }
}

//Exemplo de uso
let resultado = calculadora('soma', 5, 3);
console.log(resultado);  // Saída esperada: 8


        --> 4 Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar se o número é par ou ímpar.

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

// Exemplo de uso
let numero = 7;
let resultadoParOuImpar = verificarParOuImpar(numero);
console.log(resultadoParOuImpar);  // Saída esperada: Ímpar


        --> 5 Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. 
            Utilize uma variável para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar

function converterTemperatura(valor, escala) {
    if (escala.toLowerCase() === 'celsius') {
        return (valor * 9/5) + 32;  // Celsius para Fahrenheit
    } else if (escala.toLowerCase() === 'fahrenheit') {
        return (valor - 32) * 5/9;  // Fahrenheit para Celsius
    } else {
        return "Escala inválida";
    }
}

// Exemplo de uso
let temperaturaCelsius = 25;
let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');
console.log(temperaturaFahrenheit);  // Saída esperada: 77
*/