/**
 * Essa função deve receber um número e escolher a melhor forma de arredondar.
 * Se a casa decimal do número for maior ou igual a 5, deve arredondar para cima.
 * Caso o contrário, deve arredondar pra baixo.
 * 
 * Existe uma função no objeto Math que resolve isso, recomendo usar ela de inicio
 * 
 * Lembrando que você ja implementou o código de arredondar pra cima e arredondar pra baixo.
 * Você pode importar a função daqueles testes (você aprendeu como fazer isso no exercicio passado) para arredondar o número, aproveitando código
 * Vai pro canto
*/
export const arredondar = (number) => {
    return Math.round(number);
}