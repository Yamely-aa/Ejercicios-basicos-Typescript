//Escribe una función que tome un `Point` y calcule la distancia al origen (0,0).

function calcularDistanciaAlOrigen(punto: Point): number {
    return Math.sqrt(punto.x ** 2 + punto.y ** 2);
}
