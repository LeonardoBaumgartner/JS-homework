import { describe, expect, it } from 'vitest';
import { sum } from './sum'

describe("Sum", () => {
    it.each(
        [
            [1, 2, 3],
            [5, 5, 10],
            [0, 0, 0],
            [-1, -1, -2],
            [0, -1, -1],
        ] 
    )('sum(%i, %i) deve retornar %i', (x1, x2, result) => {
        expect(sum(x1, x2)).toBe(result);
    });
    it("Deve retornar undefined se um dos valores fornecidos para a função não for um número", () => {
        expect(sum('a', 'b')).toBeUndefined();
        expect(sum(1, false)).toBeUndefined();
        expect(sum(4, [])).toBeUndefined();
    })
})