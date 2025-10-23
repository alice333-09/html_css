
// // Questão.1

// let A = parseFloat(prompt("Diga um número: "))
// let B = parseFloat(prompt("Diga outro número: "))
// let C = parseFloat(prompt("Diga mais um número: "))
// let soma = (A + B)
// console.log(A)
// console.log(B)
// console.log(C)
// console.log(soma)
// if(soma > C){
//     alert(` ${A} + ${B} é maior que ${C}`);
// } else if (soma < C) {
//     alert(` ${A} + ${B} é menor que ${C}`);
// } else {
//     alert(` ${A} + ${B} é igual a ${C}`);
// }

// Questão.2

// let num = parseFloat(prompt("Diga um número: "))
// if(num % 2 == 0 ){
//     alert(`${num} é par`);
// } else if (num % 2 != 0) {
//     alert(`${num} é impar`);
// } 
// if(num >= 0) {
//     alert(`${num} é positivo`);
// } else if (num < 0) {
//     alert(`${num} é negativo`);
// }

// Questão.19

for (let N = 1; N <= 10; N++) {
    document.write(`<h2>Tabuada do ${N} </h2>`);
    for (let I = 1; I <= 10; I++) {
        let R = N * I;
        document.write(`${N} x ${I} = ${R}<br>`);
    }
    document.write('<hr>');
}

// // Questão.20

// let numero = parseFloat(prompt(`Digite um número: `));

// document.write("<h1>Tabuada de " + numero + ":</h1>");
// document.write("<ul>");

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;
//   document.write("<li>" + numero + " x " + i + " = " + resultado + "</li>");
// }

// document.write("</ul>");



