import { describe, expect, it } from "vitest";
import { arredondarParaBaixo } from "./arredondarParaBaixo";


describe('arredondarParaBaixo', () => {
    it.each([
        [4, 4],
        [1.1, 2],
        [1.9, 2],
        [2, 2],
        [-5, -5],
        [-5.6, -5]
    ])('arredondarParaBaixo(%d) => %d', (x, result) => {
        expect(arredondarParaBaixo(x)).toBe(result);
    })
})