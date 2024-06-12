/**
 * Escreva uma função que receberá uma string e deve retornar uma string contendo a cor favorita dessa pessoa
 * A cor favorita segue conforme a relação abaixo:
 * Léo: Rosa
 * Augusto: Preto,
 * Maria: Amarelo,
 * Matheus: Azul,
 * Marcelo: Vermelho
 * Tyrone: Branco
 * 
 * Caso o nome passado não seja nenhum dos listados, retorne undefined
 */
export const retornarCorFavorita = (name) => {
    switch(name){
        case 'Léo': return 'Rosa';
        case 'Augusto': return 'Preto';
        case 'Maria': return 'Amarelo';
        case 'Matheus': return 'Azul';
        case 'Marcelo': return 'Vermelho';
        case 'Tyrone': return 'Branco';
        default: return undefined;
    }
}