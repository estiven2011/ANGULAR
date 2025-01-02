console.log('-------------- Ejercicio 1 --------------');

/* 

EJERCICIO 1

Crea una clase llamada Persona con las siguientes características:

Propiedades:
nombre: tipo string.
edad: tipo number.

Métodos:
Un constructor para inicializar las propiedades de la clase.
Un método llamado saludar que devuelva un saludo como: "Hola, mi nombre es [nombre] y tengo [edad] años."
Crea una instancia de la clase y llama al método saludar.

*/


class Persona {

    public name:string;
    public age:number

    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }

    saludar(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`); 
    }
}

const person1 = new Persona ('Juan', 20)
person1.saludar()


console.log('-------------- Ejercicio 2 --------------');


/* 

Ejercicio 2: Clases y Herencia
Crea una clase llamada Animal con las siguientes características:

Propiedades:
nombre: tipo string.
edad: tipo number.

Métodos:
Un constructor para inicializar las propiedades de la clase.
Un método llamado hacerSonido que debe ser sobrescrito por las clases hijas.
Luego, crea dos clases hijas:

Perro: Esta clase debe extender de Animal y sobrescribir el método hacerSonido para que devuelva "Guau".
Gato: Esta clase también debe extender de Animal y sobrescribir el método hacerSonido para que devuelva "Miau".

*/

class Animal {

    public nombre:string;
    public edad:number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad
    }

    hacerSonido() {
    }

}

class Perro extends Animal {

    hacerSonido(): void {
        console.log('Guau');
        
    }
}
class Gato extends Animal {

    hacerSonido(): void {
        console.log('Miau');
        
    }
}

const perro = new Perro ('Channel', 3)
const gato = new Gato ('Negra', 3)

perro.hacerSonido()
gato.hacerSonido()


