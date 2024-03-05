// Se te proponen una serie de ejercicios para practicar
// los arrays y el bucle for.

// Para resolver NO hay que utilizar ninguna función matemática
// Crea el código necesario para resolver los requerimientos

// Dado este array:
let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]
let arrayNumeros3 = [-4, -2, -7, -1, -6]

// o cualquier otro array solo con números

// 1) Mostrar por consola la suma de todos los valores
function sumarValores(array) {
    let resultado = 0
    for (let i = 0; i < array.length; i++) {
        resultado += array[i]
    }
    return resultado
}
console.log(sumarValores(arrayNumeros1))
console.log(sumarValores(arrayNumeros2))

// 2) Mostrar por consola el promedio
function promedioValores(array) {
    let resultado = 0
    for (let i = 0; i < array.length; i++) {
        resultado += array[i]
    }
    return resultado / array.length
}
console.log(promedioValores(arrayNumeros1))
console.log(promedioValores(arrayNumeros2))

// 3) Encontrar los valores máximo y mí­nimo
function maximoMinimo(array) {
    let max = array[0]
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return `el maximo es ${max} y el minimo es ${min}`
}
console.log(maximoMinimo(arrayNumeros1))
console.log(maximoMinimo(arrayNumeros2))
console.log(maximoMinimo(arrayNumeros3))


// 4)a- Sumar los valores con í­ndice par y restar los impares
function sumarIndicesParesRestarImpares(array) {
    let pares = 0
    let impares = 0
    for (let i = 0; i < array.length; i = i + 2) {
        pares += array[i]
    }
    for (let i = 1; i < array.length; i = i + 2) {
        impares -= array[i]
    }
    return `La suma de las posiciones pares es ${pares} y la resta de posiciones impares es ${impares}`
}
console.log(sumarIndicesParesRestarImpares(arrayNumeros1))
console.log(sumarIndicesParesRestarImpares(arrayNumeros2))
console.log(sumarIndicesParesRestarImpares(arrayNumeros3))
// Hay que mostrar por consola cada resultado

// 4)b- Sumar los valores de los numeros pares y restar los impares
function sumarParesRestarImpares(array) {
    let pares = 0
    let impares = 0
    for (let i = 0; i < array.length; i = i + 2) {
        pares += array[i]
    }
    for (let i = 1; i < array.length; i = i + 2) {
        impares -= array[i]
    }
    return `La suma de pares es ${pares} y la resta de impares es ${impares}`
}
console.log(sumarParesRestarImpares(arrayNumeros1))
console.log(sumarParesRestarImpares(arrayNumeros2))
console.log(sumarParesRestarImpares(arrayNumeros3))
// Hay que mostrar por consola cada resultado

// Dado estos arrays:
let arrayNombres1 = ["Federico", "Kayén", "Luís", "Mónica", "Nicolás", "Ricardo", "Sara", "Stephanie", "Yahved","Jo"]
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie",]
let arrayNombres3 = ["Clint", "Robert", "James", "Ingrid", "John", "Patricia", "Marie", "Patricio"]



// 5) Encontrar el elemento con el texto más largo y guardarlo en la variable varTextoMasLargo
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.
function textoMasLargo(array) {
    let varTextoMasLargo = array[0]
    let arrayTextosMasLargos = []

    for (let i = 0; i < array.length; i++) {
        if (varTextoMasLargo.length < array[i].length) {
            varTextoMasLargo = array[i]
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (varTextoMasLargo.length == array[i].length) {
            arrayTextosMasLargos.push(array[i])
        }
    }

    if (arrayTextosMasLargos.length > 1) {
        return `
        El texto mas largo es ${varTextoMasLargo} y tiene ${varTextoMasLargo.length} caracteres.
        Hay mas de un valor mas largo y son: ${arrayTextosMasLargos}.
        `
    } else {
    return `El texto mas largo es ${varTextoMasLargo} y tiene ${varTextoMasLargo.length} caracteres.`
    }
}

console.log(textoMasLargo(arrayNombres1))
console.log(textoMasLargo(arrayNombres2))
console.log(textoMasLargo(arrayNombres3))


// 6) Lo mismo para el texto más corto.
function textoMasCorto(array) {
    let varTextoMasCorto = array[0]
    let arrayTextosMasCortos = []

    for (let i = 0; i < array.length; i++) {
        if (varTextoMasCorto.length > array[i].length) {
            varTextoMasCorto = array[i]
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (varTextoMasCorto.length == array[i].length) {
            arrayTextosMasCortos.push(array[i])
        }
    }

    if (arrayTextosMasCortos.length > 1) {
        return `
        El texto mas corto es ${varTextoMasCorto} y tiene ${varTextoMasCorto.length} caracteres.
        Hay mas de un valor mas largo y son: ${arrayTextosMasCortos}.
        `
    } else {
    return `El texto mas corto es ${varTextoMasCorto} y tiene ${varTextoMasCorto.length} caracteres.`
    }
}

console.log(textoMasCorto(arrayNombres1))
console.log(textoMasCorto(arrayNombres2))
console.log(textoMasCorto(arrayNombres3))


// 7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 8, 5, 4, etc.
function obtenerLongitudNombres(array) {
    let longitudNombres = []
    for (let i = 0; i < array.length; i++ ){
        longitudNombres.push(array[i].length)
    }
    return longitudNombres
}

console.log(obtenerLongitudNombres(arrayNombres1))
console.log(obtenerLongitudNombres(arrayNombres2))
console.log(obtenerLongitudNombres(arrayNombres3))

// 8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i
function contienenLaI(array) {
    let arrayNombresConI = new Array()
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().includes("i")) {
            arrayNombresConI.push(array[i])
        }
    }
    return arrayNombresConI
}

console.log(contienenLaI(arrayNombres1))
console.log(contienenLaI(arrayNombres2))
console.log(contienenLaI(arrayNombres3))

// Dado este array:
let arrayMixto = ["Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28]

// 9) Debes obtener otro array llamado arrayBidimensional que sea así­:
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]
function obtenerArrayBidimensional(array) {
    
}


// 10) A partir de un array como el que has obtenido en el ejercicio 9,
// debes resolver los ejercios 1, 2, 3 y 4