import { describe, it, expect } from "vitest";
import { divisao } from './divisao';

describe('Divisão', () => {
    it.each([
        [1, 1, 1],
        [4, 2, 2],
        [2, 4, .5],
        [0, 10, 0],
        [4, -2, -2],
        [-4, -2, 2],
        [5, 3, 5/3],
        [15, 5, 3],
        [15, 2, 15/2]
    ])('divisao(%i, %i) deve retornar %i', (x1, x2, resultado) => {
        expect(divisao(x1, x2)).toBe(resultado);
    });

    it('Dividir qualquer número por 0 deve retornar undefined', () => {
        expect(divisao(4, 0)).toBe(undefined);
        expect(divisao(0, 0)).toBe(undefined);
    })

    it('Deve retornar undefined se um dos parametros fornecidos não for um número', () => {
        expect(divisao(1, 'aeehoo')).toBe(undefined);
        expect(divisao(false, 5)).toBe(undefined);
        expect('', []).toBe(undefined);
    })
})