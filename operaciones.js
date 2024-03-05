// Math.random, Math.floor, Math.sqrt, etc

let num1 = 9
let num2 = 2

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

console.log(num1 ** num2)
console.log(num1 ** (1 / num2))

console.log(num1 % num2)

if (num1 % num2 === 0) {
    console.log(`${num1} es par`)
} else {
    console.log(`${num1} es impar`)
}

if (num1 % num2 === 0) {
    console.log(`${num1} es multiplo de ${num2}`)
} else {
    console.log(`${num1} no es multiplo de ${num2}`)
}

let array = [4, 5, 3, 8]
console.log(array)

let mensajePares = "Los números en posicion par son: "
let mensajeImpares = "Los números en posicion impar son: "
console.log(mensajePares)
console.log(mensajeImpares)

// for (let i = 0; array.length; i++) {
//     if (i % 2 == 0) {
//         mensajePares += array[i] + ", "
//     } else {
//         mensajeImpares += array[i] + ", "
//     }
// }
// console.log(mensajePares)
// console.log(mensajeImpares)

// let mensajeNumerosPares = "Los números pares son: "
// let mensajeNumerosImpares = "Los números impares son: "
// for (let i = 0; array.length; i++) {
//     if (array[i] % 2 != 0) {
//         mensajeNumerosImpares += array[i] + ", "
//     } else {
//         mensajeNumerosPares += array[i] + ", "
//     }
// }

// console.log(mensajeNumerosImpares)
// console.log(mensajeNumerosPares)

let dividido = 10 / 3
console.log(dividido)
console.log(dividido.toFixed(2)) // Se indica la cantidad de decimales que queremos mostrar