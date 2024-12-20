import { Product } from "./06-function-destructuring";
import { taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product [] = [
    {
        descripcion: "motorola",
        price: 50
    },
    {
        descripcion: "nokia",
        price: 20
    }
]

const [total, tax] = taxCalculation( {
    tax: 0.15,
    products: shoppingCart
})

console.log( 'total es: ', total);
console.log( 'total con tax  es: ', tax);

