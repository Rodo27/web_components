// import {
//     secret_number as num1,
//     add as sumar,
//     subtract as restar,
//     divide as dividir,
//     name as nombre,
//     x,
//     y,
//     Math
// } from './math.js'


// console.log(x)
// console.log(y)

// console.log(sumar(100, 20))
// console.log(restar(100, 20))
// console.log(dividir(100, 20))

// console.log(nombre)
// console.log(num1) 

// const math = new Math()
// console.log(math.double(4))


//import {add, subtract} from './math.js'
import * as math from './math.js'

console.log(math.add(100, 20))
console.log(math.subtract(100, 20))

export function hello(){
    alert('Hello! World!')
}