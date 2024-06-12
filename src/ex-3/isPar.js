/**
 * essa função deve receber um número como parametro e verificar se ele é par
 * ex: isPar(2) => true
*/
export const isPar = (numero) => {
    return typeof numero !== 'number' ? undefined : numero % 2 === 0
}