/**
 * Essa função irá receber um número como parametro e deve retornar um boolean dizendo se o número é ímpar;
 * ex: isOdd(1) => true;
 */
export const isOdd = (numero) => {
    if (typeof numero !== 'number') return undefined;
    return !Number.isInteger(numero) ? false : numero % 2 !== 0
}