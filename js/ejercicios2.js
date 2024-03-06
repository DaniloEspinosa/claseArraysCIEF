// 1
/* 
Con un prompt, vamos a preguntar al usuario que día de la semana es.
Responderá en castellano: "Lunes", por ejemplo.
Con esa información mostraremos un console.log
con el mensaje con el dí­a que corresponda: "Today is Monday", en ese caso.

Si el usuario no responde un dí­a válido el mensaje de salida será : "I don't understand"
*/

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

//Resuelto
/*
let mensaje = `
Hola, ¿podrias indicarme que dia de la semana es?
Las opciones son:
Lunes, Martes, Miercoles, Jueves, Viernes, Sábado, Domingo
`
let diaDeLaSemana = prompt(mensaje)

diaDeLaSemana = diaDeLaSemana.charAt(0).toUpperCase() + diaDeLaSemana.slice(1).toLowerCase()

if (dias.includes(diaDeLaSemana)) {
    for (let i = 0; i < dias.length; i++) {
        if (dias[i] == diaDeLaSemana) {
            console.log(`Today is ${days[i]}`)
            break
        }

    }
} else {
    console.log("I don't understand")
}
*/

// ===========================================================================================

//2
/* 
Hay que obtener todos los números primos comprendidos entre 1 y 100.
El resultado se mostrará como un array ordenado de mayor a menor.
Formato de salida: console.log()

NOTA 1: un número primo solo es divisible por sí­ mismo y 1.
Nota 2: por convenio se considera que 1 no es primo
*/

let arrayPrimos = []

function esPrimo(number) {
    let primo = true

    if (number <= 1) {
        primo = false
    }
    if (number == 2) {
        primo = true
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                primo = false
                break
            }
        }
    }
    return primo
}

console.log(esPrimo(17))

for (let i = 0; i <= 100; i++) {
    if (esPrimo(i)) {
        arrayPrimos.unshift(i)
    }
}
console.log(arrayPrimos)

// ===========================================================================================

// 3
/* Preguntaremos al usuario que hora es,
 suponemos que responderá entre las 0 y las 23,
 y esa respuesta mostraremos un console.log de esta manera:
 si la respuesta está entre las 6 y las 14: "Buenos dí­as"
 si la respuesta está entre las 15 y las 21: "Buenas tardes"
 en los demás casos "Buenas noches" */

// ===========================================================================================

// 4
/* Con un prompt, pediremos al usuario un número entre 10 y 50.
Si introduce un número mayor o menor le volveremos a 
hacer la pregunta hasta que escriba un número dentro 
del rango aceptado.
Le mostraremos en un alert la suma de todos los
numeros comprendidos entre 1 y ese número incluido. */

// ===========================================================================================

// 5
/*
Crea una función que a partir de un array que contiene a su vez arrays con fechas
en formato internacional (año-mes-dí­a), debemos crear otro array
que contenga también un array para cada fecha, pero esta vez en formato
dí­a-mes-año. 
La respuesta se mostrará en un console.log()
*/

// Datos iniciales
const datesOri = [["2022-10-06"], ["2026-06-30"], ["2035-03-12"]];

// La salida obtenida en este caso debe ser: [["06-10-2022"], ["30-06-2026"], ["12-03, 2025"]]
