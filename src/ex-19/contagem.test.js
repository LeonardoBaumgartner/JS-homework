import { describe, expect, it } from "vitest";
import { contagem } from './contagem';

describe('contagem', () => {
    it.each([
        [0, '0'],
        [1, '0,1'],
        [4, '0,1,2,3,4'],
        [20, '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20']
    ])('contagem(%i) => %s', (number, result) => {
        expect(contagem(number)).toBe(result)
    })

    it.each([
        [5.5, '0,1,2,3,4,5'],
        [0.1, '0'],
        [8.9, '0,1,2,3,4,5,6,7,8']
    ])('contagem(%d) => %s', (number, result) => {
        expect(contagem(number)).toBe(result);
    })

    it('contagem(-5) => undefined', () => {
        expect(contagem(-5)).toBeUndefined();
    })
})