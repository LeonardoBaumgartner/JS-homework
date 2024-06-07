import { describe, expect, it } from "vitest";
import { quantidadePalavras } from "./quantidadePalavras";

describe('quantidadePalavras', () => {
    it.each([
        ['Jamelão', 1],
        ['Vai pro canto Jamelão', 4],
        ['A e I o U', 5],
        ['', 0],
        ['Muitos      espaços cara', 3],
        ['     espaço no inicio', 3],
        ['espaço no final também é possível      ', 6],
        [' e nos dois? ', 3]
    ])('quantidadePalavras("%s") => %i', (word, result) => {
        expect(quantidadePalavras(word)).toBe(result);
    })
})