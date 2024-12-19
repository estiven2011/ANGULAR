interface Product {
    descripcion: string;
    price: number;
}

const iphone: Product = {
    descripcion: '16 pro max',
    price: 1200
}

const laptop: Product = {
    descripcion: 'Macbook pro m4 ',
    price: 2500
}

interface TaxCalculationOption {
    tax: number;
    products: Product[]
}



function taxCalculation (options: TaxCalculationOption): number[] {

    let total = 0;

    options.products.forEach(product => {
        total += product.price
    })

    return[ total, total * tax ]
}


const shoppingCart = [iphone, laptop];
const tax = 0.15

const resultado = taxCalculation({
    products: shoppingCart,
    tax: tax
})

console.log('total', resultado[0]);
console.log('total', resultado[1]);
