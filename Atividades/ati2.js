
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

// questão.2

let num = parseFloat(prompt("Diga um número: "))
if(num % 2 == 0 ){
    alert(`${num} é par`);
} else if (num % 2 != 0) {
    alert(`${num} é impar`);
} 
if(num >= 0) {
    alert(`${num} é positivo`);
} else if (num < 0) {
    alert(`${num} é negativo`);
}
