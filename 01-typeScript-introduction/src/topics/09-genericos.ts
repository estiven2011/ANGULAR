
function whatType <T>(argument: T) {
    return argument
}

console.log(whatType<number>(23));

const string = whatType<string>('hola mundo')
const array = whatType<number[]>([2,2])

console.log(string.toUpperCase());
console.log(array.join('.'));
