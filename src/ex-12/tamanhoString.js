/**
 * Essa função deve receber uma string como parametro e retornar o tamanho dela
 * ex: tamanhoString('jamelao') => 7
 * 
 * Dica: Toda string herda do objeto String, logo é possível acessar qualquer função ou propriedade do objeto String a partir de uma string
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
 * O link acima contem uma documentação das funções e propriedades do objeto String
 * Por exemplo, uma das funções é a função endsWith
 * Logo, 'jamelao'.endsWith('o') permite verificar se a palavra jamelão termina com a letra o (retornaria true nesse caso);
 */
export const tamanhoString = (word) => {
    return word.length;
}