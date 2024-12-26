// Decorador de clase
function logClass(target: Function) {
    console.log("Clase decorada:", target);
}
  
@logClass
class Person {
    constructor(public name: string, public age: number) {}
}
  
  // Al crear una instancia de la clase Person, se ejecutará el decorador
const person = new Person("Juan", 30);
  