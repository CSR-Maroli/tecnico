//somar números
function somar(a,b){
    console.log(`A soma de ${a} + ${b} = ${a+b}`)
}
somar(1, 2)


//subtrair números
function subtrair(a,b){
    console.log(`A subtração de ${a} - ${b} = ${a-b}`)
}
subtrair(12, 2)

//multiplicar números
function multiplicar(a,b){
    console.log(`A multiplicação de ${a} * ${b} = ${a*b}`)
}
multiplicar(12, 2)

//divisão de números
function dividir(a,b){
    console.log(`A divisão de ${a} / ${b} = ${a/b}`)
}
dividir(12, 2)

//calcular média
function media(a, b, c){
    let media = (a + b + c)/3
    console.log(`A média de ${a} + ${b} + ${c} = ${media}`)
}
media(3, 3, 9)

//par ou ímpar
function parimpar(a){
    if(a%2 === 0)
        console.log(`O número ${a} é par`)
    else
        console.log(`Número ${a} é ímpar`)
}
parimpar(4)

//determinar sinal
function determinarsinal(a){
    if(a>0){
        console.log(`Número Positivo`)
    }
    else if(a<0){
        console.log(`Número Negativo`)
    }
    else{
        console.log(`O valor é Zero.`)
    }
}
determinarsinal(-2)

//fatorial
function fatorial(numero){
    if(numero === 0 || numero === 1){
        return 1
    }else{
        return numero * fatorial(numero - 1)
    }
}
console.log(fatorial(5))

//verificar primos
function verificarPrimo(numero){
    if (numero <= 1){
        return false
    }
    for (let i = 2; i <= Math.sqrt(numero); i++){
        if (numero % i === 0){
            return false
        }
    }
}
/*
//Calcular MDC
function calcularMDC(a, b){
    while(b !== 0){
        let temp = b
        b = a % b
        a = temp
    }
    return a
}
let numero1 = 20

//calcular mmc
function calcularMMC(a, b){
    // o mmc é o produto dos numeros dividido pelo mdc deles
    return (a * b) / calcularMDC(a. b);
}
let numero1 = 6
let numero2 = 8
let mmc = calcularMMC(numero1, numero2)
console.log("O MMC de " + numero1 + " e " + numero2 + " é: " + mmc)*/
//function decimalparabinario(numero)

function ehbissexto(ano){
    if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0){
        return true;
    } else {
        return false;
    }
}
var ano = 2024;
if(ehbissexto(ano)){
    console.log(ano + " é um ano bissexto. ");
}else{
    console.log(ano + " não é um ano bissexto. ");
}
/*
function contarvogais(str){
    let contador = 0;
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++ ){
        if(str[i]==='a'|| str[i]==='e'||str[i]=...){
            contador++
        }
        
    }
    return contador
}
const minhaString = "Olá, mundo!"
const numerodevogais = contadorvogais(minhaString)
*/
function contarpalavras(frase){
    let palavras = frase.split(" ");
    return palavras.length;
}
let valor = "Está é uma frase de exemplo oi oi oi";
let numeropalavras = contarpalavras(valor);
console.log(`o numero de palavras é: ${numeropalavras}`)
