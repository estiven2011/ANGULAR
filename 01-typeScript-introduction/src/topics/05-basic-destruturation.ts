interface AlbumMusic {
    albumDuration: number;
    singAlbum: string;
    albumVolumen: number;   
    detail: DetailAlbum;

}

interface DetailAlbum {
    year: number;
    favoriteSing: string;
}

const sentimientoELeganciaMaldad:AlbumMusic = {
    albumDuration: 25,
    singAlbum: "Arcangel",
    albumVolumen: 2,
    detail: {
        year: 2013,
        favoriteSing: "Hace muhco tiempo"
    }
}

const {singAlbum: song, albumDuration, detail} = sentimientoELeganciaMaldad

/* Forma uno de destrucurar detail */
/* const { detail: { year } } = sentimientoELeganciaMaldad; */

/* forma 2 */
const { year } = detail


console.log(`artista: ${song} -- duracion del album ${albumDuration}`);
console.log(`año: ${year} `);
console.log(`cancion favorita: ${detail.favoriteSing || "No disponible"} `);



/* ---------------------- Ejercicio 1 ----------------------------------------- */

/* 

Imagina que tienes un objeto Car que contiene información sobre un coche. Este objeto tiene una propiedad owner que a su vez contiene name y age del propietario. La propiedad specs incluye detalles sobre el coche como model, year, y color.

Instrucciones:
Usando la desestructuración, extrae el nombre y la edad del propietario.
Extrae el modelo y el año del coche.
Usa desestructuración con alias para cambiar el nombre de la variable del model a carModel y year a carYear.
Muestra en la consola el siguiente mensaje: "El propietario del coche es {name}, tiene {age} años, y el coche es un {color} {carModel} del año {carYear}."

*/

console.log("------------------------- ");
console.log("       Ejercicio 1 ");
console.log("------------------------- ");

interface Owner {
    name: string;
    age: number;
}

interface Specs {
    model: string;
    yearCar: number;
    color: string;
}

interface MyCar {
    owner: Owner
    specs: Specs
}

const myCar: MyCar = {
    owner: {
        name: "Juan Perez",
        age: 35
    },
    specs:{
        model: "Toyota Corolla",
        yearCar: 2024,
        color:"Rojo"
    }
}

const {owner, specs} = myCar
const {name, age} = owner
const {model, yearCar, color} = specs

console.log(`el propietario del coche es ${name}, tiene ${age} años, y el coche es un ${color} ${model} ${yearCar}  `);

/* destructuracion de arreglos */

console.log("-------------------------------------------------------- ");
console.log("-------------------------------------------------------- ");
console.log("destructuracion de arreglos");

const futbolistas:string[] = ['neymar jr', 'luka modric', 'antonio rudiger', 'savihno']

console.log(futbolistas);


const [, , rudiger , ] = futbolistas

console.log('este futbolista es rudiger?, yo soy:', rudiger );




