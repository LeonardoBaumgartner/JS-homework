/**
 * Essa função deve receber dois números como parametros e retornar o resultado da divisão do primeiro pelo segundo
 * ex: divisao(4, 2) deve retornar 2
 */
export const divisao = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number' || y === 0 ){
        return undefined;
    }
    return x / y;
}