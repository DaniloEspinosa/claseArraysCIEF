// Se te proponen una serie de ejercicios para practicar
// los arrays y el bucle for.

// Para resolver NO hay que utilizar ninguna función matemática
// Crea el código necesario para resolver los requerimientos

// Dado este array:
let arrayNumeros1 = [4, 5, 3, 8, 2, 7, 1, 6]
let arrayNumeros2 = [4, 2, 7, 1, 6]
let arrayNumeros3 = [-4, -2, -7, -1, -6] // Array agregado para hacer más pruebas

// o cualquier otro array solo con números

//======================================================================================================================================
// **1) Mostrar por consola la suma de todos los valores  ==============================================================================

// Declaro una funcion que toma el array y devuelve la suma de los valores
function sumarValores(array) {
    // variable que almacenara el resultado de la suma
    let resultado = 0
    // el bucle for recorre cada elemento y lo suma en la variable creada
    for (let i = 0; i < array.length; i++) {
        resultado += array[i]
    }
    // devuelvo el resultado de la suma
    return resultado
}
console.log(sumarValores(arrayNumeros1))
console.log(sumarValores(arrayNumeros2))
console.log(sumarValores(arrayNumeros3))

//======================================================================================================================================
// **2) Mostrar por consola el promedio ================================================================================================

// Declaro una función para calcular el promedio
function promedioValores(array) {
    // variable que almacenara el resultado de la suma
    let resultado = 0
    // el bucle for recorre cada elemento y lo suma en la variable creada
    for (let i = 0; i < array.length; i++) {
        resultado += array[i]
    }
    // devuelvo la suma dividida en la cantidad de elementos del array
    return resultado / array.length
}
console.log(promedioValores(arrayNumeros1))
console.log(promedioValores(arrayNumeros2))
console.log(promedioValores(arrayNumeros3))

//======================================================================================================================================
// **3) Encontrar los valores máximo y mí­nimo  =========================================================================================

// Declaro una función que obtendra el valor máximo y el mínimo de un array
function maximoMinimo(array) {
    // Declaro las variables max, min
    // Las inicializo con el primer elemento del array que servira para ser comparado
    let max = array[0]
    let min = array[0]
    // Bucle for que compara cada elemento y cuando encuentra un número mayor lo guarda en la variable
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    // Bucle for que compara cada elemento y cuando encuentra un número menor lo guarda en la variable
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    // La función devuelve un mensaje indicando el valor máximo y el mínimo
    return `el máximo es ${max} y el mínimo es ${min}`
}
console.log(maximoMinimo(arrayNumeros1))
console.log(maximoMinimo(arrayNumeros2))
console.log(maximoMinimo(arrayNumeros3))

//======================================================================================================================================
// **4)a- Sumar los valores con í­ndice par y restar los impares  =======================================================================

// Declaro una función que obtendra la suma de todos los valores, que su posición sea par dentro de un array
// y la resta de todos los valores que su posicion sea impar dentro del mismo array
function sumarIndicesParesRestarImpares(array) {
    // Declaro las variables que almacenarán los resultados y las inicializo en 0 (cero)
    let pares = 0
    let impares = 0
    //El bucle for recorrerá las posiciones pares e ira sumando los valores obtenidos
    //La posicion i inicia en 0 (cero) y va sumando de a 2
    for (let i = 0; i < array.length; i = i + 2) {
        pares += array[i]
    }
    //El bucle for recorrerá las posiciones impares e ira sumando los valores obtenidos
    //La posicion i inicia en 1 (cero) y va sumando de a 2
    for (let i = 1; i < array.length; i = i + 2) {
        impares -= array[i]
    }
    // Devuelve un mensaje indicando la suma de las posiciones pares y la resta de las posiciones impares
    return `La suma de las posiciones pares es ${pares} y la resta de posiciones impares es ${impares}`
}
console.log(sumarIndicesParesRestarImpares(arrayNumeros1))
console.log(sumarIndicesParesRestarImpares(arrayNumeros2))
console.log(sumarIndicesParesRestarImpares(arrayNumeros3))
// Hay que mostrar por consola cada resultado

// **4)b- Sumar los valores de los numeros pares y restar los impares  =================================================================

// Declaro una función que obtendra la suma de todos los números pares dentro de un array
// y la resta de todos los números impares dentro del mismo array
function sumarParesRestarImpares(array) {
    // Declaro las variables que almacenarán los resultados y las inicializo en 0 (cero)
    let pares = 0
    let impares = 0
    // Recorro todo el array con un for
    for (let i = 0; i < array.length; i++) {
        // Condicional que usa el módulo para obtener los valores pares y sumarlos dentro de la variable
        if (array[i] % 2 == 0) {
            pares += array[i]
            // si el valor no es par por descarte sera impar y se resta dentro de la variable
        } else {
            impares -= array[i]
        }
    }
    // Devuelvo un mensaje indicando la suma de los números pares y la resta de los números impares
    return `La suma de pares es ${pares} y la resta de impares es ${impares}`
}
console.log(sumarParesRestarImpares(arrayNumeros1))
console.log(sumarParesRestarImpares(arrayNumeros2))
console.log(sumarParesRestarImpares(arrayNumeros3))
// Hay que mostrar por consola cada resultado


// Dado estos arrays:
let arrayNombres1 = ["Federico", "Kayén", "Luís", "Mónica", "Nicolás", "Ricardo", "Sara", "Stephanie", "Yahved", "Jo"]
let arrayNombres2 = ["Clint", "Robert", "James", "Anne", "Ingrid", "John", "Patricia", "Marie",]
let arrayNombres3 = ["Axel", "Manuel", "Ivonne", "Manami", "Marc", "Rubén", "Rafa", "Danilo", "Paola", "Ale"] // Array agregado para hacer más pruebas

//======================================================================================================================================
// **5)a- Encontrar el elemento con el texto más largo y guardarlo en la variable varTextoMasLargo  ====================================
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.

// Declaro una función para obtener el texto mas largo y devolverlo, si hay mas de uno devolver un array con todos
function textoMasLargo(array) {
    //Declaro una variable con el primer elemento como referencia para comparalo
    let varTextoMasLargo = array[0]
    // Hago un array vacio donde se agregaran todos los textos mas largos
    let arrayTextosMasLargos = []

    // Bucle for que recorre todos los elementos y los compara para obtener el elemento mas largo del array
    for (let i = 0; i < array.length; i++) {
        if (varTextoMasLargo.length < array[i].length) {
            varTextoMasLargo = array[i]
        }
    }
    // Bucle for que agrega todos los elementos mas largos en el array de textos mas largos
    for (let i = 0; i < array.length; i++) {
        if (varTextoMasLargo.length == array[i].length) {
            arrayTextosMasLargos.push(array[i])
        }
    }

    // Condicional que devolvera el mensaje, si hay mas de un elemento devolvera el array en el mensaje.
    // Si solo hay un elemento mostrara el mensaje utilizando solo la variable que lo contiene
    if (arrayTextosMasLargos.length > 1) {
        return `El texto mas largo tiene ${varTextoMasLargo.length} caracteres y hay mas de uno, son: ${arrayTextosMasLargos}.`
    } else {
        return `El texto mas largo es ${varTextoMasLargo} y tiene ${varTextoMasLargo.length} caracteres.`
    }
}

console.log(textoMasLargo(arrayNombres1))
console.log(textoMasLargo(arrayNombres2))
console.log(textoMasLargo(arrayNombres3))

// **5)b- Encontrar el elemento con el texto más largo entre 2 arrays y guardarlo en la variable varTextoMasLargo  =====================
// Si hay más de un valor, guardarlos en el array arrayTextosMasLargos.

// Hago una función que tomara 2 array como parametro, luego se encontrara el texto mas largo y se guardara en una variable
// Si hay mas de un valor se guardara en un array
function textoMasLargo2(array1, array2) {

    // Concatenar los array para luego trabajar solo con uno
    let array = array1.concat(array2)
    // A partir de aqui la funcion es identica a la anterior del ejercicio 5-a
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
        return `El texto mas largo tiene ${varTextoMasLargo.length} caracteres y hay mas de uno, son: ${arrayTextosMasLargos}.`
    } else {
        return `El texto mas largo es ${varTextoMasLargo} y tiene ${varTextoMasLargo.length} caracteres.`
    }
}

console.log(textoMasLargo2(arrayNombres1, arrayNombres2))
console.log(textoMasLargo2(arrayNombres2, arrayNombres3))
console.log(textoMasLargo2(arrayNombres3, arrayNombres1))

//======================================================================================================================================
// **6)a Lo mismo para el texto más corto.  ============================================================================================

// Declaro una función para obtener el texto mas corto y devolverlo, si hay mas de uno devolver un array con todos
function textoMasCorto(array) {
    //Declaro una variable con el primer elemento como referencia para comparalo
    let varTextoMasCorto = array[0]
    // Hago un array vacio donde se agregaran todos los textos mas cortos
    let arrayTextosMasCortos = []

    // Bucle for que recorre todos los elementos y los compara para obtener el elemento mas corto del array
    for (let i = 0; i < array.length; i++) {
        if (varTextoMasCorto.length > array[i].length) {
            varTextoMasCorto = array[i]
        }
    }

    // Bucle for que agrega todos los elementos mas cortos en el array de textos mas cortos
    for (let i = 0; i < array.length; i++) {
        if (varTextoMasCorto.length == array[i].length) {
            arrayTextosMasCortos.push(array[i])
        }
    }

    // Condicional que devolvera el mensaje, si hay mas de un elemento devolvera el array en el mensaje.
    // Si solo hay un elemento mostrara el mensaje utilizando solo la variable que lo contiene
    if (arrayTextosMasCortos.length > 1) {
        return `El texto mas corto tiene ${varTextoMasCorto.length} caracteres y hay mas de uno, son: ${arrayTextosMasCortos}.`
    } else {
        return `El texto mas corto es ${varTextoMasCorto} y tiene ${varTextoMasCorto.length} caracteres.`
    }
}

console.log(textoMasCorto(arrayNombres1))
console.log(textoMasCorto(arrayNombres2))
console.log(textoMasCorto(arrayNombres3))


// **6)b Lo mismo para el texto más corto.  ============================================================================================

// Declaro una función para obtener el texto mas corto y devolverlo, si hay mas de uno devolver un array con todos
function textoMasCorto2(array1, array2) {
    // Concatenar los array para luego trabajar solo con uno
    let array = array1.concat(array2)
    // A partir de aqui la funcion es identica a la anterior del ejercicio 6-a
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
        return `El texto mas corto tiene ${varTextoMasCorto.length} caracteres y hay mas de uno, son: ${arrayTextosMasCortos}.`
    } else {
        return `El texto mas corto es ${varTextoMasCorto} y tiene ${varTextoMasCorto.length} caracteres.`
    }
}

console.log(textoMasCorto2(arrayNombres1, arrayNombres2))
console.log(textoMasCorto2(arrayNombres2, arrayNombres3))
console.log(textoMasCorto2(arrayNombres3, arrayNombres1))

//======================================================================================================================================
// **7) Obtén un array llamado longitudNombres que tenga como elementos las longitudes de los textos  ==================================
// incluidos en cualquiera de los arrays anteriores. Por tanto debes mostrar : [ 8, 5, 4, etc.

// Función que obtendra la longitud de las palabras de un array dado
function obtenerLongitudNombres(array) {
    // Array vacio donde se iran agregando los elementos
    let longitudNombres = []
    // Bucle for que recorrera el array, obtendra la longitud de cada palabra e ira agregando cada valor al array
    for (let i = 0; i < array.length; i++) {
        longitudNombres.push(array[i].length)
    }
    // La función devuelve el array con lo valores
    return longitudNombres
}

console.log(obtenerLongitudNombres(arrayNombres1))
console.log(obtenerLongitudNombres(arrayNombres2))
console.log(obtenerLongitudNombres(arrayNombres3))

//======================================================================================================================================
// **8) Crea un array llamado arrayNombresConI que incluya solo los nombres que contengan la letra i  ==================================

// Declaro una función para crear un array que solo contenga los nombres que tienen la letra i
function contienenLaI(array) {
    // Creo un nuevo array vacío que recibirá los nombres
    let arrayNombresConI = new Array()
    //For que recorrera todos los elementos del array
    for (let i = 0; i < array.length; i++) {
        // Condicional para agregar los nombres si incluyen la i, si no la incluyen no pasa nada
        if (array[i].toLowerCase().includes("i")) {
            arrayNombresConI.push(array[i])
        }
    }
    // Devuelvo el array de los nombres con la letra i
    return arrayNombresConI
}

console.log(contienenLaI(arrayNombres1))
console.log(contienenLaI(arrayNombres2))
console.log(contienenLaI(arrayNombres3))

// Dado este array:
let arrayMixto = ["Marie", 24, "Pol", 18, "Judith", 22, "Eva", 28]

//======================================================================================================================================
// **9) Debes obtener otro array llamado arrayBidimensional que sea así­:  ==============================================================
// [ ["Marie", 24 ], ["Pol", 18], ["Judith", 22 ], [ "Eva", 28] ]

// Función para obtener un array bidimensional a partir de un array mixto
function obtenerArrayBidimensional(array) {
    // Creo un array vacio que recibira los nombres
    let nombres = []
    // Creo un array vacio que recibira los números
    let edades = []
    // Creo un array que recibira los arrays con nombre y número
    let arrayBidimensional = []
    // Bucle for que recorrerá el array dado y guardara las posiciones pares en el array nombres
    // y las posiciones impares en el array edades
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            nombres.push(array[i])
        } else {
            edades.push(array[i])
        }
    }
    // Bucle for que servira para crear el array bidimensional
    // se toma como referencia el array nombres.length, pero tambien podria ser el de edades, ya que tienen el mismo length
    for (let i = 0; i < nombres.length; i++) {
        arrayBidimensional.push([nombres[i], edades[i]])
    }
    // Devuelvo el array bidimensional creado
    return arrayBidimensional
}

// ========= Segunda opcion para realizar lo mismo del ejercicio 9 (Hecho con Ivonne) ===============

// Función para obtener un array bidimensional a partir de un array mixto
function obtenerArrayBidimensional2(array) {
    // Creo un array que recibira los arrays con nombre y número
    let arrayBidimensional = []

    // Bucle for que recorre el array mixto de a 2 lugares
    for (let i = 0; i < array.length; i = i + 2) {
        // Utilizo un slice para ir formando arrays de 2 elementos y agregarlos al array bidimensional
        arrayBidimensional.push(array.slice(i, i + 2))
    }
    // Devuelvo el array bidimensional obtenido
    return arrayBidimensional

}

console.log(obtenerArrayBidimensional2(arrayMixto))


let arrayBidimensional = obtenerArrayBidimensional(arrayMixto)
let arrayBidimensional2 = obtenerArrayBidimensional2(arrayMixto)
console.log(arrayBidimensional)

//======================================================================================================================================
// **10) A partir de un array como el que has obtenido en el ejercicio 9,    ===========================================================
// debes resolver los ejercios 1, 2, 3 y 4

// 10 - 1

// Función que solo tomara los numeros del array bidimensional y los sumara
function sumarValoresDeArrayBidimensionalPropuesto(array) {
    // Variable que recibira el resultado final de la suma
    let suma = 0
    // Bucle for que recorre el array bidimensional y solo toma el elemento en la posicion 1 de cada array y lo suma
    for (let i = 0; i < array.length; i++) {
        suma += array[i][1]
    }
    // Devuelve la suma de los valores
    return suma
}
console.log(sumarValoresDeArrayBidimensionalPropuesto(arrayBidimensional))
console.log(sumarValoresDeArrayBidimensionalPropuesto(arrayBidimensional2))


// 10 - 2

// Función que solo tomara los numeros del array bidimensional, los sumara y luego promediara
function promedioValoresDeArrayBidimensionalPropuesto(array) {
    // Variable que recibira el resultado final de la suma
    let suma = 0
    // Bucle for que recorre el array bidimensional y solo toma el elemento en la posicion 1 de cada array y lo suma
    for (let i = 0; i < array.length; i++) {
        suma += array[i][1]
    }
    // Devuelvo la suma dividida en la cantidad de elementos del array bidimensional y obtengo el promedio
    return suma / array.length
}
console.log(promedioValoresDeArrayBidimensionalPropuesto(arrayBidimensional))
console.log(promedioValoresDeArrayBidimensionalPropuesto(arrayBidimensional2))


// 10 - 3

// Declaro una función que obtendra el valor máximo y el mínimo de un array bidimensional
function maximoMinimoBidimensional(array) {
    // Declaro las variables max, min
    // Las inicializo con el segundo valor del primer elemento del array bidimensional
    let max = array[0][1]
    let min = array[0][1]
    // Bucle for que compara cada elemento y cuando encuentra un número mayor lo guarda en la variable
    for (let i = 0; i < array.length; i++) {
        if (array[i][1] > max) {
            max = array[i][1]
        }
    }
    // Bucle for que compara cada elemento y cuando encuentra un número menor lo guarda en la variable
    for (let i = 0; i < array.length; i++) {
        if (array[i][1] < min) {
            min = array[i][1]
        }
    }
    // La función devuelve un mensaje indicando el valor máximo y el mínimo obtenidos
    return `el maximo es ${max} y el minimo es ${min}`
}
console.log(maximoMinimoBidimensional(arrayBidimensional))
console.log(maximoMinimoBidimensional(arrayBidimensional2))


// 10 - 4 - a

// Declaro una función que obtendra la suma de todos los valores del array interno, que su posición sea par dentro de un array bidimensional
// y la resta de todos los valores del array interno que su posicion sea impar dentro del mismo array
// El funcionamiento es el mismo al ejercicio 4-a solo le agrego un indice mas para la busqueda dentro del array bidimensional
function sumarIndicesParesRestarImparesBidimensional(array) {
    let pares = 0
    let impares = 0
    for (let i = 0; i < array.length; i = i + 2) {
        pares += array[i][1]
    }
    for (let i = 1; i < array.length; i = i + 2) {
        impares -= array[i][1]
    }
    return `La suma de las posiciones pares es ${pares} y la resta de posiciones impares es ${impares}`
}
console.log(sumarIndicesParesRestarImparesBidimensional(arrayBidimensional))
console.log(sumarIndicesParesRestarImparesBidimensional(arrayBidimensional2))


// 10 - 4 - b

// Declaro una función que obtendra la suma de todos los valores pares de cada array interno, dentro de un array bidimensional
// y la resta de todos los valores de cada array interno que sean impares.
// El funcionamiento es el mismo al ejercicio 4-b solo le agrego un indice mas para la busqueda dentro del array bidimensional
function sumarParesRestarImparesBidimensional(array) {
    let pares = 0
    let impares = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i][1] % 2 == 0) {
            pares += array[i][1]
        } else {
            impares -= array[i][1]
        }

    }
    console.log(pares)
    console.log(impares)
    return `La suma de pares es ${pares} y la resta de impares es ${impares}`
}
console.log(sumarParesRestarImparesBidimensional(arrayBidimensional))
console.log(sumarParesRestarImparesBidimensional(arrayBidimensional2))