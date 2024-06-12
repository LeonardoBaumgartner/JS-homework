/**
 * Essa função receberá um número e deve retornar o maior valor inteiro que é menor ou igual a esse número
 * ex: arredondarParaBaixo(2.5) => 2;
 * arredondarParaBaixo(4) => 4;
 * arredondarParaBaixo(1.1) => 1;
 * arredondarParaBaixo(1.9) => 1;
 * 
 * Dica pra o jamelão: o javascript contém um classe utilitária com varias operações matemáticas, chamada Math.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 * É possível resolver esse e alguns outros problemas com a ajuda da biblioteca.
 * Recomendo dar uma conferida nas funções que existem la
 * Vai pro canto
 */
export const arredondarParaBaixo = (number) => {
    return Math.floor(number);
}