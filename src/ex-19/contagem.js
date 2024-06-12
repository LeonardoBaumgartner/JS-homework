/**
 * Jamelão, esse arquivo deve exportar uma função chamada contagem
 *  Ela receberá um número x como parametro
 * Ela deve retornar uma string com uma contagem dos números inteiros de 0 até x, separados por virgula.
 * Ex: contagem(0) => '0'
 * contagem(1) => '0,1'
 * contagem(4) => '0,1,2,3,4'
 * contagem(5.5) => '0,1,2,3,4,5' (5 é o maior número menor que 5.5);
 * 
 * Deve ser tratado o caso do x ser um número negativo, retornando undefined.
 * 
 */
export const contagem = (quantity) => {
    if (quantity < 0) return undefined;
    let result = '0';
    for (let index = 1; index <= quantity; index++){
        result = `${result},${index}`;
    }
    return result;
}