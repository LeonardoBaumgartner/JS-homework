/**
 * Escreva uma função que recebe uma string e que retorna a quantidade de palavras contidas na string.
 * Considere uma palavra qualquer sequencia de caracteres contendo pelo menos 1 char que não seja um espaço vazio
 * ex: quantidadePalavras('Jamelão') => 1
 * quantidadePalavras('Vai pro canto Jamelão') => 4
 * quantidadePalavras('A e I o U') => 5
 */
export const quantidadePalavras = (word) => {
    const trimmedWord = word.trim();
    if (!trimmedWord.length) return 0;
    let count = 1;
    for (let index = 0, isSpace = false; index < trimmedWord.length; index++){
        const currentChar = trimmedWord[index];
        if(currentChar === ' ') isSpace = true;
        else if (isSpace){
            count++;
            isSpace = false;
        }
    }
    return count;
}
