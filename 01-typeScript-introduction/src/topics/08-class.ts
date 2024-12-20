
class Persona {
   /*  public name: string;
    private address: string; */


    constructor ( public name:string, public address:string, public children: number) {
        this.name = name,
        this.address = address,
        this.children = children
    }
}

/* class Futbolista extends Persona {

    constructor( public nickName: string, public age: number, public dorsal:number){
        super( 'neymar jr dos santos', 'Arabia')
    }
} */


/* Otra forma de hacer la herencia  */
class Futbolista  {

    constructor( 
        public nickName: string, public age: number, public dorsal:number, public playerSoccer:Persona
    ){
       
    }
}



const neyJr = new Persona ('Neymar Junior Dos Santos', 'Medallo', 2)
const ney = new Futbolista ( 'El principe que no fue rey', 35, 11, neyJr)

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

console.log("--------- EJERCICIO 3 CLASES --------------");


/* 

Crea una clase base llamada Vehiculo que tenga las siguientes propiedades y métodos:

Propiedades:
marca (string)
modelo (string)
año (número)

Métodos:
Un método mostrarInformacion() que imprima la información del vehículo (marca, modelo y año).

Luego, crea dos clases derivadas:
Coche que herede de Vehiculo. La clase Coche debe tener una propiedad extra:
puertas (número)
Y un método extra:
mostrarNumeroDePuertas() que imprima cuántas puertas tiene el coche.

Moto que también herede de Vehiculo. La clase Moto debe tener una propiedad extra:
cilindrada (número) que indique el tamaño del motor de la moto.

Y un método extra:
mostrarCilindrada() que imprima la cilindrada de la moto.

Finalmente, crea al menos un objeto de cada clase (un coche y una moto) e imprime la información de cada uno usando los métodos correspondientes

*/


class Vehiculo {
    public marca:string;
    public modelo: string;
    public anio: number;

    constructor(marca:string, modelo:string, anio:number){
        this.marca = marca,
        this.modelo = modelo,
        this.anio = anio
    }

    mostrarInformacion (){
        console.log(`la marca de tu carro es ${this.marca}, un carro de modelo ${this.modelo}, del anio ${this.anio}`);
    }
}


class Coche extends Vehiculo {
    public puertas: number;

    constructor(puertas:number, marca:string, modelo:string, anio:number){
        super(marca, modelo, anio);
        this.puertas = puertas;
    }

    mostrarNumeroDePuertas(){
        console.log(`Este coche tiene ${this.puertas} numero de puertas`);
        
    }
    
}

 
class Moto extends Vehiculo {
    public cilindraje: number;

    constructor(cilindraje:number, marca:string, modelo:string, anio:number){
        super(marca, modelo, anio);
        this.cilindraje = cilindraje;
    }

    mostrarCilindrada(){
        console.log(`El cilindraje de tu moto es de ${this.cilindraje}`);
        
    }
}


const miCarro = new Coche (4, 'Toyota', 'Fortuner', 2025)
miCarro.mostrarInformacion()
miCarro.mostrarNumeroDePuertas()

console.log('******************************');


const miMoto = new Moto (1200, 'Ducati', 'Hypermotard', 2025 )
miMoto.mostrarCilindrada()
miMoto.mostrarInformacion()