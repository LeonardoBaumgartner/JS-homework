import { describe, expect, it } from "vitest";
import { isPrimo } from './isPrimo'

describe('isPrimo',() => {
    it.each([
        [{number:1, result: false}],
        [{number:2, result: true}],
        [{number:3, result: true}],
        [{number:4, result: false}],
        [{number:5, result: true}],
        [{number:10, result: false}],
        [{number:7, result: true}],
        [{number:15, result: false}],
        [{number:27, result: false}],
        [{number:31, result: true}],
        [{number:0, result: false}]
    ])('isPrimo($number) => $result', ({ number, result }) => {
        expect(isPrimo(number)).toBe(result);
    })
})