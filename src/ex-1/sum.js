/**
    sum deve ser uma função que recebe dois números como parametro
    e retorna o resultado da soma desses números
    ex: sum(1, 2) => 3
 */
export const sum = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return undefined;
    }
    return x + y;
}