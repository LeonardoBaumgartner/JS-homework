import { describe, expect, it } from "vitest";
import { tamanhoString } from "./tamanhoString";

describe('tamanhoString', () => {
    it.each([
        {word: 'Jamelão', tamanho: 7},
        {word: 'Avenida Visconde', tamanho: 16 },
        {word: 'bah é os guri', tamanho: 13},
        {word: '', tamanho: 0}
    ])('tamanhoString($word) => $tamanho', ({word}) => {
        expect(tamanhoString(word)).toBe(word.length);
    });

    it('Deve retornar undefined caso o valor passado não seja uma string', () => {
        expect(tamanhoString(0)).toBeUndefined();
    })
})