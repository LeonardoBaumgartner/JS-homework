import { describe, expect, it } from "vitest";
import { loop2D } from './loop2D';

describe('loop2D', () => {
    it.each([
        [1, 'A', 'A'],
        [2, 'A', 'A\nA A'],
        [5, 'A', 'A\nA A\nA A A\nA A A A\nA A A A A'],
        [10, '0', '0\n0 0\n0 0 0\n0 0 0 0\n0 0 0 0 0\n0 0 0 0 0 0\n0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0']
    ])('loop2D(%i, %s) => %s', (number, char, result) => {
        expect(loop2D(number, char)).toBe(result);
    })

    it.each([
        [0, 'B'],
        [-20, 'C']
    ])('loop2D(%i, %s) => undefined', (number, char) => {
        expect(loop2D(number, char)).toBeUndefined();
    })
})