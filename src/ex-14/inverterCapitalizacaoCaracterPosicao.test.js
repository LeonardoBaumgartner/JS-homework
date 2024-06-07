import { describe, expect, it } from "vitest";
import { inverterCapitalizacaoCaracterPosicao } from "./inverterCapitalizacaoCaracterPosicao";

describe('inverterCapitalizacaoCaracterPosicao', () => {
    it.each([
        ['Jamelão', 0, 'jamelão'],
        ['Guitarra', 2, 'GuItarra'],
        ['Jamelão', 5, 'JamelÃo'],
        ['Regiane', 4, 'RegiAne'],
        ['MuLeKe ZiKa', 9, 'MuLeKe Zika']
    ])('inverterCapitalizacaoCaracterPosicao("%s", %i) => %s', (word, position, newWord) => {
        expect(inverterCapitalizacaoCaracterPosicao(word, position).toBe(newWord));
    })

    it('Should return undefined if position is it doesnt exist a char in that position', () => {
        expect(inverterCapitalizacaoCaracterPosicao('', 5)).toBeUndefined();
        expect(inverterCapitalizacaoCaracterPosicao('Ana', 3)).toBeUndefined();
    })
})