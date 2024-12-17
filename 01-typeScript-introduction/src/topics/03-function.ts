/* Hacer funcion de multiplicar un numero por una base, si no nos dan la base que porr defecto sea 2, y el segundo numero no saea obligatorio  */

/* funcion */

/* el segundo numero y la base no son obligatorias, por ende cuando no se ponen, el toma el valor definido por defecto */

/* function multiplicar (number1: number, number2: number = 1, base:number = 2 ): number{
    return number1 * number2 * base;
}
 */

/* console.log(multiplicar(5, 3, 6)); */



/* funcion felcha */

/* const suma = (num1: number, num2:number) => {
    return num1 + num2
} */

/* console.log(suma(2,3)); */


interface Cantante {
    name: string;
    conciertos: number;
    showNumberConciertos: () => void;
}

const numberConciert = (sing: Cantante, amount: number ) => {
    sing.conciertos += amount;
    sing.showNumberConciertos();
}

let rap: Cantante = {
    name: 'Austin Posada',
    conciertos: 254,
    showNumberConciertos() {
        console.log(`mi numero de conciertos actualmentes son ${this.conciertos}`)
    },

}

let pop: Cantante = {
    name: 'Santiago Zapata',
    conciertos: 25,
    showNumberConciertos() {
        console.log(`mi numero de conciertos actualmentes son ${this.conciertos}`)
    },

}

numberConciert(pop, 5)
numberConciert(rap, 20)

/* pop.showNumberConciertos()
rap.showNumberConciertos()
*/

console.log('--------------------------------------------------------');


/* ------------------------------Ejercicio 1------------------------------ */

/* 

Crea una interfaz llamada Empleado, que tenga las siguientes propiedades:

name: el nombre del empleado (tipo string).
salario: el salario del empleado (tipo number).
mostrarSalario: una función que muestra el salario del empleado (tipo void).
Luego, crea una función llamada incrementarSalario que, dado un empleado y un porcentaje de incremento, aumente el salario del empleado según ese porcentaje.

Finalmente, crea dos empleados:

Uno llamado "Carlos Méndez" con un salario de 2000.
Otro llamado "Laura Martínez" con un salario de 2500.
Usando la función incrementarSalario, aumenta el salario de "Carlos Méndez" en un 10% y el de "Laura Martínez" en un 5%. Después de incrementar los salarios, muestra el salario actualizado de cada uno.

*/

interface Empleado {
    name: string;
    salario: number;
    mostrarSalario: () => void;
}


const incrementarSalario = (empleado:Empleado, pocentajeIncremento:number) => {
    empleado.salario = empleado.salario * pocentajeIncremento;

}

/* otra solucion
const incrementarSalario = (empleado: Empleado, porcentaje: number) => {
  empleado.salario += empleado.salario * (porcentaje / 100);
};

*/


const carlosMendez: Empleado = {
    name: 'Carlos Méndez',
    salario: 1300,
    mostrarSalario(){
        console.log(`Con el aumento de salario tu salario queda en ${this.salario}`)
    }
}

const lauraMartinez: Empleado = {
    name: 'Laura Martínez',
    salario: 500,
    mostrarSalario(){
        console.log(`Con el aumento de salario tu salario queda en ${this.salario}`)
    }
}

incrementarSalario(carlosMendez, 10)
incrementarSalario(lauraMartinez, 5)
carlosMendez.mostrarSalario()
lauraMartinez.mostrarSalario()

console.log('--------------------------------------------------------');




/* ------------------------------Ejercicio 2------------------------------ */

/* 

Descripción:
Crea una interfaz llamada Producto, que tenga los siguientes campos:

name (string): el nombre del producto.
precio (number): el precio original del producto.
mostrarPrecio: un método que imprima el precio actual del producto.
Luego, crea una función llamada aplicarDescuento que tome un Producto y un porcentaje de descuento, y actualice el precio del producto con el descuento aplicado.

Al final, muestra el precio del producto antes y después de aplicar el descuento.

Pistas:

Para aplicar el descuento, recuerda que el precio con descuento es igual al precio original multiplicado por (1 - porcentajeDescuento / 100).
Utiliza la función console.log para mostrar el precio antes y después de aplicar el descuento.

*/

interface Producto {
    name: string;
    precio: number;
    mostrarPrecio: () => void;
}

function aplicarDescuento (producto: Producto, porcentajeDescuento: number) {
    producto.precio = producto.precio * (1 - porcentajeDescuento / 100)
    producto.mostrarPrecio()
}

let manzana:Producto = {
    name: 'Manzana',
    precio: 50,
    mostrarPrecio() { 
        console.log(`La ${this.name} tiene un precio de ${this.precio} con el descuento aplicado`);
    }
}

console.log(`El precio de la manzana originalmente es ${manzana.precio}`);
aplicarDescuento(manzana, 10)

/* Esata opcion es en el caso de que no llames a la funcion dentro de la funcion */
/* manzana.mostrarPrecio() */
