//Escribe una función que tome un argumento 
//de tipo `string | number` y retorne su longitud si es un `string` o el número si es un `number`.

function procesarValor(valor: string | number): number {
    if (typeof valor === 'string') {
        return valor.length;
    } else {
        return valor;
    }
}
