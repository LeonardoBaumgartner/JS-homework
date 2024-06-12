/**
 * Jamelão a partir desse aqui não vou mais criar a função nesse arquivo pra você praticar como escreve pra criar a função
 * criar a função e exportar do arquivo vai ser sua responsabilidade, vai pro canto
 * 
 * O jamelão vai fazer uma prova de matemática, mas ele é burrão e não sabe taboada
 * Ajude o jamelão a não tomar esporro do professor.
 * Exporte desse arquivo uma função chamada taboadaDoJamelao, que receberá um número como parametro e deve exibir na tela a taboada desse número de 0 a 10
 * OBS: Não é preciso retornar nada dessa função, apenas exibir na tela a taboada, linha por linha, com o console.log()
 * 
 * EX: A tabuada de 5 deve exibir as seguintes linhas
 * '5x0=0'
 * '5x1=5'
 * '5x2=10'
 * '5x3=15'
 * '5x4=20'
 * '5x5=25'
 * '5x6=30'
 * '5x7=35'
 * '5x8=40'
 * '5x9=45'
 * '5x10=50'
 */
export const taboadaDoJamelao = (number) => {
    for (let index = 0; index <= 10; index++){
        console.log(`${number}x${index}=${number * index}`);
    }
}