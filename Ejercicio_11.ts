//Escribe una función que tome un arreglo de números y retorne la suma de todos sus elementos.

function sumarArreglo(numeros: number[]): number {
    return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}
