/**
 * Jamelão, esse arquivo deve exportar uma função chamada fibonacci
 * Ela receberá um número x como parametro
 * Ela deve retornar uma string, contendo a sequencia de fibonacci até o número da posição x, separados por um espaço.
 * 
 * A sequência de fibonacci é uma sequencia númerica onde um número na posição i é igual a soma do número na sequencia na posição i-1 com o número da posição i-2
 * Os dois primeiros números na sequência são 1
 * ex: 1 1 2 3 4 8 13 21
 * Repare que o número 2 é o terceiro número e ele é a soma de 1 + 1, que é o segundo (i-1) e o primeiro (i-2) número somados.
 * De forma analoga, 3 = 2 + 1, que é a soma dos números que o precede.
 * 
 * Logo,
 * fibonacci(1) => '1'
 * fibonacci(2) => '1 1'
 * fibonacci(3) => '1 1 2'
 * fibonacci(8) => '1 1 2 3 4 8 13 21'
 * 
 * fibonacci(0) => undefined
 * fibonacci(-1) => undefined
 * 
 * Desafio - Depois de concluir esse exercicio, pesquisar o que é recursão e tentar implementar utilizando recursão
 */
export const fibonacci = (quantity) => {
    if (quantity <= 0) return undefined;
    return fibonacciRecursive(quantity, []);
}

const fibonacciRecursive = (quantityRemaining, currentNumbers) => {
    if (!quantityRemaining) return currentNumbers.join(' ');

    const nextQuantity = quantityRemaining - 1;
    if (!currentNumbers.length) return fibonacciRecursive(nextQuantity, [1]);
    if (currentNumbers.length === 1) return fibonacciRecursive(nextQuantity, [1, 1]);
    
    const currentValue = currentNumbers.at(-1) + currentNumbers.at(-2)
    return fibonacciRecursive(nextQuantity, [...currentNumbers, currentValue]);
}