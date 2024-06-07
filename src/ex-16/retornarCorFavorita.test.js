import { describe, expect, it } from "vitest";
import { retornarCorFavorita } from "./retornarCorFavorita";

describe('retornarCorFavorita', () => {
    it.each([
        ['Léo', 'Rosa'],
        ['Augusto', 'Preto'],
        ['Maria', 'Amarelo'],
        ['Matheus', 'Azul'],
        ['Marcelo', 'Vermelho'],
        ['Tyrone', 'Branco'],
    ])('retornarCorFavorita("%s") => "%s"', (name, color) => {
        expect(retornarCorFavorita(name)).toBe(color);
    })

    it('Deve retornar undefined caso passar um nome não previsto', () => {
        expect(retornarCorFavorita('Josué')).toBeUndefined();
        expect(retornarCorFavorita('')).toBeUndefined();
    })
})