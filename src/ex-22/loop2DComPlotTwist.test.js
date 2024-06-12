import { describe, expect, it } from "vitest";
import { loop2DComPlotTwist } from './loop2DComPlotTwist';

describe('loop2DComPlotTwist', () => {
    it.each([
        [1, 'A', 'A'],
        [2, 'A', 'A\nA A'],
        [5, 'A', 'A\nA A\nA A A\nA A A A\nA A A A A'],
        [10, '0', '0\n0 0\n0 0 0\n0 0 0 0\n0 0 0 0 0\n0 0 0 0 0 0\n0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 0 0 0'],
        [-2, 'X', 'X X\nX'],
        [-1, 'O', 'O'],
        [-5, 'B', 'B B B B B\nB B B B\nB B B\nB B\nB']
    ])('loop2DComPlotTwist(%i, %s) => %s', (number, char, result) => {
        expect(loop2DComPlotTwist(number, char)).toBe(result);
    })

    it.each([
        [0, 'B'],
    ])('loop2DComPlotTwist(%i, %s) => undefined', (number, char) => {
        expect(loop2DComPlotTwist(number, char)).toBeUndefined();
    })
})