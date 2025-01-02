interface Pasajero {
    name: string;
    numberChildrens?: number;
    nameChildrens?: string[];
}

const pasajero1: Pasajero = {
    name: 'Estiven',  
} 

const pasajero2: Pasajero = {
    name: 'Luisa',  
} 

const pasajero3: Pasajero = {
    name: 'Carlos',
    numberChildrens: 2,
    nameChildrens: ['coco', 'coronel']  
} 

const childrens = (pasajero: Pasajero) => {

    /* const numeroHijos = pasajero.numberChildrens */
    const nombreHijos = pasajero.nameChildrens?.length || 0
    console.log( `el pasajero ${pasajero.name} tiene ${pasajero.numberChildrens}`);
    
}

childrens(pasajero1)


/* Ejercicios */

/* 
Supón que tienes el siguiente objeto que representa a un usuario en una red social. Algunas propiedades pueden no estar definidas en todos los usuarios.


Tarea:
Imprimir la ciudad de usuario1, si está definida.
Imprimir el código postal de usuario2, si está definido.
Imprimir el teléfono de usuario3, si está definido.
Imprimir el correo electrónico de cada usuario, siempre que esté definido.


*/

interface Usuario {
    nombre: string;
    direccion?: {
        ciudad: string;
        codigoPostal?: number;
    };
    contacto?: {
        telefono?: string;
        email: string;
    };
}

const usuario1: Usuario = {
    nombre: "Carlos",
    direccion: { ciudad: "Bogotá", codigoPostal: 11001000 },
    contacto: { email: "carlos@email.com" }
};

const usuario2: Usuario = {
    nombre: "Lucía",
    direccion: { ciudad: "Medellín", codigoPostal: 11 },
    contacto: { email: "lucia@email.com", telefono: "123456789" }
};

const usuario3: Usuario = {
    nombre: "Juan",
    contacto: { email: "juan@email.com" }
};

const {direccion: direccion1} = usuario1
const {ciudad:ciudad1} = direccion1 || {}

console.log(ciudad1);


console.log(usuario2.direccion?.codigoPostal);

console.log(usuario3.contacto?.telefono);

console.log(usuario1.contacto?.email);
console.log(usuario2.contacto?.email);
console.log(usuario3.contacto?.email);


/* Ejercicio 2 */


console.log('______Ejercicio 2____________');


interface CuentaBancaria {
    titular: string;
    saldo: number;
    transacciones?: number[];
    telefonoContacto?: string;
}

const cuenta1: CuentaBancaria = {
    titular: "Carlos Pérez",
    saldo: 5000,
    transacciones: [100, -50, 200],
    telefonoContacto: "123-456-789"
};

const cuenta2: CuentaBancaria = {
    titular: "Lucía Gómez",
    saldo: 1500
};

const {  transacciones, telefonoContacto } = cuenta1;
const { saldo: saldo2, transacciones: transacciones2 , telefonoContacto: telefono2  } = cuenta2;


/* Tarea:
Imprime la información de ambas cuentas con los datos disponibles. Si falta alguna propiedad como telefonoContacto o transacciones, debes manejarlo usando el encadenamiento opcional (?.) y el operador de valor por defecto (||). */

console.log(`   Saldo de ${cuenta1.titular} --- 
    Número de transacciones: ${transacciones?.length || 'No disponible'} --- 
    Telefono de contacto es ${telefonoContacto} `);

console.log(`Saldo de ${saldo2} --- Numero de transaciones : ${transacciones2} --- telefono de contacto ${telefono2 || 'no disponible'}`);

