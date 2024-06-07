import { describe, it } from "vitest";
import { isOdd } from "./isOdd";

describe('isOdd', () => {
    it.each([
        {x: 2, result: false},
        {x: 1, result: true},
        {x: 0, result: false},
        {x: -2, result: false},
        {x: -10, result: false},
        {x: -5, result: true},
        {x: 5, result: true},
        {x: 2.5, result: false},
        {x: 5.34, result: false}
    ])('isOdd($x) deve retornar $result', ({x, result}) => {
        expect(isOdd(x)).toBe(result);
    });

    it('Deve retornar undefined se um dos parametros fornecidos não for um número', () => {
        expect(isOdd('aeehoo')).toBe(undefined);
        expect(isOdd(false)).toBe(undefined);
    })
})