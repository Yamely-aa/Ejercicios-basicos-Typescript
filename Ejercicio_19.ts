//Escribe una función que tome un número y un string opcional. Si se proporciona el string, 
//la función debe imprimirlo; de lo contrario, debe imprimir el número.

function imprimirNumeroOString(numero: number, texto?: string): void {
    if (texto) {
        console.log(texto);
    } else {
        console.log(numero);
    }
}
