/*laços de repetição
for - eu sei quantas vezes eu tenho que repetir
while - nao sei quantas vezes o codigo ira repetir
do while - se a condição for verdadeira ele acotece, verifica quantas vezes eu preciso fazer a repetição
for in -
for of - 
*/
// exemplo de for loop que imprime numeros de 1 ao 5
for (let i = 1; i <= 9; i++){
    console.log(i);
}
// exemplo de while loop que imprime os numeros de 1 a 5
let i = 1;
while (i <= 5){
    console.log(i);
    i++;
}
// exemplo de do ... while loop que imprime os numeros de 1 ao 5
let i = 1;
do{
    console.log(i);
    i++;
} while (i <= 5);

//exemplo de for... in loop para iterar sobre as prpriedades de um objeto, tipo um filtro
const obj = {a: 1, b: 2, c: 3};
for (let prop in obj){
    console.log(prop + ': '+ obj[prop]);
}

// exemplo de for...of loop para iterar sobre elementos de 
const arr = ['a', 'b', 'c'];
for (let element of arr) {
    console.log(element);
}