/**
 * Jamelão, exporta uma função desse arquivo chamada alternateCase, que receberá uma string como argumento
 * Ela deve retornar a string alternando os caracteres entre minusculo e maiusculo (começando por maiusculo)
 * Espaços em brancos e números devem ser ignorados
 * ex: alternateCase('jamelão') => 'JaMeLãO' 
 * alternateCase('vai pro canto') => 'VaI pRo CaNtO'
 * altenateCase('a1a1a1') => 'A1a1A1'
 */

export const alternateCase = (word) => {
    let alternateWord = '';
    for (let index = 0, shouldUpperCase = true; index < word.length; index++){
        const char = word[index];
        if (char !== ' ' && Number.isNaN(Number(char))) {
            alternateWord += shouldUpperCase ? char.toUpperCase(): char.toLowerCase();
            shouldUpperCase = !shouldUpperCase;
        } else alternateWord += char;
    }
    return alternateWord;
}
