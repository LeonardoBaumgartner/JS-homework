import { describe, it, expect } from "vitest";
import { isPar } from "./isPar";

describe('isPar', () => {
    it.each([
        {x: 2, result: true},
        {x: 1, result: false},
        {x: 0, result: true},
        {x: -2, result: true},
        {x: -10, result: true},
        {x: -5, result: false},
        {x: 5, result: false},
        {x: 2.5, result: false},
        {x: 5.34, result: false}
    ])('isPar($x) deve retornar $result', ({x, result}) => {
        expect(isPar(x)).toBe(result);
    });

    it('Deve retornar undefined se um dos parametros fornecidos não for um número', () => {
        expect(isPar('aeehoo')).toBe(undefined);
        expect(isPar(false)).toBe(undefined);
    })
})