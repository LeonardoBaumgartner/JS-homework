import { describe, expect, it } from "vitest";
import { fibonacci } from './fibonacci';

describe('fibonacci', () => {
    it.each([
        [1, '1'],
        [2, '1 1'],
        [3, '1 1 2'],
        [8, '1 1 2 3 5 8 13 21'],
        [19, '1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181']
    ])('fibonacci(%i) => %s', (number, sequence) => {
        expect(fibonacci(number)).toBe(sequence);
    });

    it.each([
        [0],
        [-5],
    ])('fibonacci(%i) => undefined', (number) => {
        expect(fibonacci(number)).toBeUndefined();
    })
})