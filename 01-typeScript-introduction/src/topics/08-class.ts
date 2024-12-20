
class Persona {
   /*  public name: string;
    private address: string; */


    constructor ( public name:string, public address:string) {
        this.name = name,
        this.address = address
    }
}

class Futbolista extends Persona {

    constructor( public nickName: string, public age: number, public dorsal:number){
        super( 'neymar jr dos santos', 'Arabia')
    }
}


const ney = new Futbolista ( 'El principe que no fue rey', 35, 11)

console.log(ney);





/* ejercicio basico de clases y extension de clases  */

console.log("--------- EJERCICIO 1 CLASES --------------");


/* 

¡Claro! Aquí tienes un ejercicio básico para practicar clases y herencia en TypeScript:

### Ejercicio

1. Crea una clase llamada `Persona` con las siguientes propiedades:
   - `nombre` (string)
   - `edad` (number)

   Y los siguientes métodos:
   - `saludar()`: Este método debe imprimir un saludo que incluya el nombre de la persona.

2. Crea una clase llamada `Estudiante` que extienda de `Persona` y añade las siguientes propiedades:
   - `grado` (string)

   Y los siguientes métodos:
   - `estudiar()`: Este método debe imprimir un mensaje que indique que el estudiante está estudiando.

3. Crea una instancia de `Estudiante` y llama a los métodos `saludar()` y `estudiar()`.

### Pistas
- Usa la palabra clave `extends` para la herencia.
- Recuerda llamar al constructor de la clase base usando `super()`.

¡Espero que disfrutes resolviendo este ejercicio! Si necesitas más ayuda o tienes alguna pregunta, no dudes en decírmelo.


*/



class Person {
    
    public nameStudent: string

    constructor( nameStudent: string, public edad: number){

        this.nameStudent = nameStudent,
        this.edad = edad 
    }

    saludar (){
        console.log(`soy ${this.nameStudent}, mucho gusto`);
        
    }
}

class Estudiante extends Person {
    public grado: number

    constructor(  nameStuden: string, edad:number, grado: number){
        super(nameStuden, edad)
        this.grado = grado
    }

    estudiar() {
        console.log(`estoy en el grado ${this.grado}`);
        
    }
}


const falcao = new Estudiante ('Juan', 20, 5)

falcao.saludar()
falcao.estudiar()

/* Ejercicio 2 */

console.log("--------- EJERCICIO 2 CLASES --------------");


/* 

Ejercicio
Crea una clase llamada Animal con las siguientes propiedades:

nombre (string)
edad (number)
Y los siguientes métodos:
hacerSonido(): Este método debe imprimir un mensaje genérico como "Este animal hace un sonido".

Crea una clase llamada Perro que extienda de Animal y añade los siguientes métodos:
hacerSonido(): Este método debe imprimir "El perro ladra".

Crea una clase llamada Gato que extienda de Animal y añade los siguientes métodos:
hacerSonido(): Este método debe imprimir "El gato maúlla".

Crea instancias de Perro y Gato, y llama al método hacerSonido() en cada una de ellas.

Pistas
Usa la palabra clave extends para la herencia.
Usa super() en los constructores de las clases derivadas.
Sobrescribe el método hacerSonido() en las clases Perro y Gato.

*/

class Animal {
    public nombre:string;
    public edadAnimal:number


    constructor(nombre:string, edadAnimal:number) {
        this.nombre = nombre
        this.edadAnimal = edadAnimal
    }

    hacerSonido (){
        console.log(`este animal hace este sonido`);
    }
}

class Perror extends Animal {
   
    constructor(name:string){
        super(name, 25)
    }

    hacerSonido(): void {
        console.log(`El ${this.nombre} ladra`);
        
    }
}

class Gato extends Animal {
    constructor () {
        super('gato', 1)
    }

    hacerSonido(): void {
        console.log(`${this.nombre} maulla`);
        
    }
}


const mascota = new Perror('Truky')
const otherMascota = new Gato()

mascota.hacerSonido()
otherMascota.hacerSonido()