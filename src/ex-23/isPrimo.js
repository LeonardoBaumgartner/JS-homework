/**
 * Jamelão, esse arquivo deve exportar uma função chamada isPrimo
 * ela receberá como parametro apenas um número x
 * Ela deve retornar true caso o número seja primo, e false caso não seja
 */

const isEvenAndNot2 = (number) => number % 2 === 0 && number !== 2

export const isPrimo = (number) => {
    if (isEvenAndNot2(number) || number === 1) return false;
    if (number === 2 || number === 3) return true;

    const half = Math.ceil(number / 2);
    let result = true;
    for (let index = 3; index <= half && result; index += 2){
        if (number % index === 0) result = false;
    }
    
    return result;
}