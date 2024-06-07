import { describe, expect, it } from "vitest";
import { caractereNaPosicao } from "./caractereNaPosicao";

describe('caractereNaPosicao', () => {
    it.each([
        ['Jamelao', 0, 'J'],
        ['Guitarra', 2, 'i'],
        ['Jamelão', 5, 'ã'],
        ['Regiane', 4, 'a'],
    ])('caractereNaPosicao("%s", %i), => "%s"', (name, position, char) => {
        expect(caractereNaPosicao(name, position)).toBe(char);
    })

    it('Should return undefined if position is it doesnt exist a char in that position', () => {
        expect(caractereNaPosicao('', 5)).toBeUndefined();
        expect(caractereNaPosicao('Ana', 3)).toBeUndefined();
    })
})