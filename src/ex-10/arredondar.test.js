import { describe, expect, it } from "vitest";
import { arredondar } from "./arredondar";

describe('arredondar', () => {
    it.each([
        [2, 2],
        [3.0, 3],
        [6.2, 6],
        [15.499999999, 15],
        [15.5, 16],
        [18.9, 19],
        [29.500000000001, 30],
        [-1, -1],
        [-0.99999, -1],
        [-0.1, -0]
    ])('arredondar(%d) => %d', (x, resultado) => {
        expect(arredondar(x)).toBe(resultado);
    })
})