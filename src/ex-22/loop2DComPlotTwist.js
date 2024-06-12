import { generateLineCharacters, loop2D } from "../ex-21/loop2D"

/**
 * Jamelão, esse arquivo deve exportar uma função chamada loop2DComPlotTwist
 * Ela receberá como primeiro argumento um número x, e como segundo um caractere char
 * 
 * Esse exercício é similar ao anterior, porém caso x for um número negativo, deve se inverter a ordem das linhas
 * de modo que o número de caracteres char na linha vá de |x| até 1
 * 
 * loop2D(5, 'A') => // similar ao anterior 
 *  'A
 *   A A
 *   A A A
 *   A A A A
 *   A A A A A'
 * 
 * loop2D(-5, 'X') => 
 * 'X X X X X
 *  X X X X
 *  X X X
 *  X X
 *  X'
 * 
 * se x for 0, retorne undefined.
 *  Vai pro canto jamelão
 */
export const loop2DComPlotTwist = (quantity, char) => {
    if (quantity === 0) return undefined;

    if (quantity > 0) return loop2D(quantity, char);

    let word = '';
    for (let itemsPerLine = Math.abs(quantity); itemsPerLine >= 1; itemsPerLine--){
        const currentLine = generateLineCharacters(char, itemsPerLine);
        word = itemsPerLine === Math.abs(quantity) ? currentLine : `${word}\n${currentLine}`;
    }
    console.log(word)
    return word;
}