/* Crear una función map que acepte un array y un callback y que:

    por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    obtenga el resultado
    lo pushee a un nuevo array
    devuelva el array final con el resultado de cada una de las llamadas al callback.
 */
/* 
const numeros = [1, 2, 3, 4]
const dividir = x => x / 2
const duplicar = x => x * 2
const nuevoArray = []
const operaciones = [dividir, duplicar]

const map = (numeros, operaciones) => {
    for(let numero of numeros) {
        const resultado = operaciones(numero)
        nuevoArray.push(resultado)
    }
    return(nuevoArray)
}

console.log(map(numeros, dividir)) */


/* Crear una función filter que acepte un array y un callback y que:

    por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    si dicho callback devuelve true, pushea el elemento a un nuevo array
    devuelva el array final con los elementos que pasaron el "filtro". */

/* const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
const nuevoArray = []

const filter = (numeros, operaciones) => {
    for(let numero of numeros) {
        if(operaciones(numero)) {
            nuevoArray.push(numero)
        }
    }
    return nuevoArray
}

console.log(filter(numeros, multiploDe10))
 */
/* Crear una función every que acepte un array y un callback y que:

    por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    devuelva true si todas las llamadas al callback devolvieron true
 */

/* const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
const esPositivo = x => x >= 0


const every = (numeros, operaciones) => {
    let resultado = true;
    for( let numero of numeros) {
        if(!operaciones(numero)) {
            resultado = false;
        } 
        
    }
    return resultado
}

console.log(every(numeros, esPositivo))
 */

/* Crear una función some que acepte un array y un callback y que:

    por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    devuelva true si al menos una de las llamadas al callback devolvió true
 */

/* const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0
const esPositivo = x => x >= 0

const some = (numeros, operaciones) => {
    let resultado = true;
    for( let numero of numeros) {
        if(operaciones(numero)) {
            resultado = true;
        } else {
            resultado = false
        }
        
    }
    return resultado
}
console.log(some(numeros, esPositivo)) */

/* Crear una función find que acepte un array y un callback y que:

    por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    devuelva el elemento pasado como argumento del primer callback que devuelva true
    si ningún callback devuelve true, devuelva undefined
 */

/* const numeros = [8, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0

const find = (numeros, operaciones) => {
    for(let numero of numeros) {
        if(operaciones(numero)) {
            return numero
        } 
    }
}
console.log(find(numeros, multiploDe10)) */


/* Crear una función dropWhile que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
devuelva un array con los elementos a partir del primer callback que devolvió false

(Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback 
    de true, no los agrega, cuando el callback da false por primera vez agrega todos los elementos 
    restantes a partir de dicho elemento inclusive) */

/* const numeros = [40, 33, 50, 8, 2, 3, 20]
const multiploDe10 = x => x % 10 === 0
let nuevoArray = []

const dropWhile = (numeros, operaciones) => {
    for(let numero of numeros) {
        if(!operaciones(numero)) {
        nuevoArray = numeros.slice(numero) 
        }
    }
    return nuevoArray
}

console.log(dropWhile(numeros, multiploDe10)) */


/* Crear una función takeWhile que acepte un array y un callback y que:
por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
devuelva un array con los elementos hasta el primer callback que devolvió false

(Inverso del dropWhile) */

/* let numeros = [40, 50, 33, 8, 2, 3, 20]
const multiploDe10 = x => x % 10 === 0

const takeWhile = (numeros, operaciones) => {
    for(let numero of numeros) {
        if(!operaciones(numero)) {
        numeros.splice(numero)
        }
    }
    return numeros
}
console.log(takeWhile(numeros, multiploDe10))  */

/* Crear una función findIndex que acepte un array y un callback y que:

    por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
    devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
    si ningún callback devuelve true, devuelva undefined
 */

const numeros = [8, 2, 3, 40, 33, 50]
const multiploDe10 = x => x % 10 === 0

const findIndex = (numeros, operaciones) => {
    for(let numero in numeros) {
        if(operaciones(numeros[numero])) {
            return numero
        } 
    }
}

console.log(findIndex(numeros, multiploDe10))