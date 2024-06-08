import { describe, expect, it } from "vitest";
import { alternateCase } from './alternateCase';

describe('alternateCase', () => {
    it.each([
        ['jamelão', 'JaMeLãO'],
        ['vai pro canto', 'VaI pRo CaNtO'],
        ['a1a1a1', 'A1a1A1'],
        ['v1d4 l0k4', 'V1d4 L0k4'],
        ['', ''],
    ])('alternateCase(%s) => %s', (word, result) => {
        expect(alternateCase(word)).toBe(result);
    })
})