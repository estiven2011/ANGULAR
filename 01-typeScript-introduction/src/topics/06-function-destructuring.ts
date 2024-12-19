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



/* function taxCalculation (options: TaxCalculationOption): [number, number] { */
/* function taxCalculation ({tax,products }: TaxCalculationOption): [number, number] { */
function taxCalculation (options: TaxCalculationOption): [number, number] {

    const {tax, products} = options

    let total = 0;

    products.forEach( ({ price}) => {
        total += price
    })

    return[ total, total * tax ]
}


const shoppingCart = [iphone, laptop];
const tax = 0.15

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: tax
})

console.log('total', total);
console.log('total', totalTax);
