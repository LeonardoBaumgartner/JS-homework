/**
 * Essa função recebera uma string como primeiro argumento e um número como segundo.
 * Ela deve inverter a capitalização do char que se encontra na posição representada pelo número e retornar a nova string com o caracter invertido
 * Se o char for minusculo, deve passar a ser maiusculo
 * Se o char for maiusculo, deve passar a ser minusculo
 * 
 * ex: inverterCapitalizacaoCaracterPosicao('Jamelão', 0) => 'jamelão'
 */

const invertCharCapitalization = (char) => {
    const charUpperCase = char.toUpperCase();
    return char === char.toUpperCase() ? char.toLowerCase() : charUpperCase;
}

export const inverterCapitalizacaoCaracterPosicao = (word, position) => {
    if (position >= word.length) return undefined;
    let newWord = '';
    for(let index = 0; index < word.length; index++){
        const char = word[index];
        newWord += position === index ? invertCharCapitalization(char) : char;
    }
    return newWord;
}