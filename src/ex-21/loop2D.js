/**
 * Jamelão, exporte uma função desse arquivo chamada loop2D
 * Ela receberá como primeiro argumento um número x, e como segundo um caractere char
 * Essa função deve retornar uma string contendo x linhas, onde cada linha é preenchida por x caracteres char, separados por um espaço
 * 
 * ex: loop2D(5, 'A') => 
 *  'A
 *   A A
 *   A A A
 *   A A A A
 *   A A A A A'
 * 
 *  repare que a primeira linha possui apenas 1 A, a segunda possui 2 e assim por diante.
 *  Dica: você pode pular uma linha inserindo o \n na string. ex: 'Hello\nWorld' será formatado como 'Hello
 *                                                                                                    World'
 * 
 * caso x for 0, retorne uma string vazia ''
 * se x for um número negativo, retorne undefined;
 */

export const generateLineCharacters = (char, quantityCharacters) => {
    let currentLine = char;
    for (let letterNumber = 2; letterNumber <= quantityCharacters; letterNumber++){
        currentLine += ` ${char}`;
    }
    return currentLine;
}

export const loop2D = (quantity, char) => {
    if (quantity < 0) return undefined;
    if (quantity === 0) return '';
    
    let result = ''
    for (let lineNumber = 1; lineNumber <= quantity; lineNumber++){
        const currentLine = generateLineCharacters(char, lineNumber);
        result = lineNumber === 1 ? currentLine : `${result}\n${currentLine}`;
    }
    
    return result;
}
