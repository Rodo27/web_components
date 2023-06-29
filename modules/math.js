export const secret_number = 30
export let name = 'My math module'

export let x = 30, y = 100

export function add(x, y){
    return x + y
}

export function subtract(x, y){
    return x - y
}

export function multiply(x, y){
    return x * y
}

export function divide(x, y){
    return x / y
}

export class Math {
    double(x){
        return x * x
    }
}


 export default {
    add, subtract
 }