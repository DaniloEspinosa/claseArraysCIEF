// ARRAYS
// posiciones         0      1     2     3
let arrayFrutas = ["pera", "kiwi", , "mango", 1, 2.3, true]
console.log(arrayFrutas[2])

// Maneras de declarar un array
let array1 = new Array()
let array2 = []

// .length sirve para contar los elementos
console.log(array1.length)
console.log(arrayFrutas.length)

// para acceder a cada elemento utilizamos su indice, que indica su posición
// el conteo de posicion inicia en el numero 0 (cero)
console.log(arrayFrutas[2])  // de esta manera no se puede acceder a posiciones negativas
console.log(arrayFrutas.at(-5)) // con at() se puede acceder a posiciones negtivas

// convertir un array a string
let arrayFrutasToString = arrayFrutas.toString()
console.log(arrayFrutasToString)
// convertir un string en array indicando el punto de corte del string
let stringToArray = arrayFrutasToString.split(",")
console.log(stringToArray)
// otra manera de generar un string desde un array y poder remplazar la coma
let arrayFrutasToJoin = arrayFrutas.join("-")
console.log(arrayFrutasToJoin)
console.log(typeof (arrayFrutasToJoin))

// .push() - agregar un elemento al final de un array
arrayFrutas.push("coco")
console.log(arrayFrutas)

// .pop() - quita el ultimo elemento de un array y lo guarda si lo necesitamos
let ultimaFruta = arrayFrutas.pop()
console.log(arrayFrutas)
console.log(ultimaFruta)

// .shift() - quita el primer elemento de un array y lo guarda si lo necesitamos
let primerFruta = arrayFrutas.shift()
console.log(arrayFrutas)
console.log(primerFruta)

// .unshift() - añade un elemento al principio de un array
arrayFrutas.unshift("piña")
console.log(arrayFrutas)

// recorrer un array con bucle for
for (let i = 0; i < arrayFrutas.length; i++) {
    console.log(arrayFrutas[i])
}

// .reverse() - invierte el orden de los elementos
arrayFrutas.reverse()
console.log(arrayFrutas)

// crear un nuevo array ordenado sin modificar el inicial
let arrayFrutas2 = arrayFrutas.toSorted()
console.log(arrayFrutas2)
console.log(arrayFrutas)

// .sort() - sirve para ordenar alfabeticamente
arrayFrutas.sort()
console.log(arrayFrutas)

// .includes() - devuelve true si encuentra el elemento y false si no lo encuentra
console.log(arrayFrutas.includes("kiwi"))
console.log(arrayFrutas.includes("patata"))

// .indexOf() - devuelve la posicion que tiene determinado elemento en un array
console.log(arrayFrutas.indexOf("mango"))
console.log(arrayFrutas.indexOf("patata")) // el -1 representa que el elemento no esta en la lista

// .slice() sirve para cortar desde la posicion indicada (incluida) hasta la posicion indicada (no incluida)
let arrayFrutas3 = arrayFrutas.slice(1,3)
console.log(arrayFrutas3)

// .splice() - corta desde la posicion indicada y corta la cantidad de elementos indicada
let arraySplice = arrayFrutas.splice(0,3) //desde la posicion 0 y devuelve los siguientes 3 elementos
console.log(arraySplice)