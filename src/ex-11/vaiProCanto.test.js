import { describe, expect, it } from "vitest";
import { vaiProCanto } from "./vaiProCanto";

describe('vaiProCanto', () => {
    it.each([
        {name:'Jamelão'},
        {name:'Léo'},
        {name:'Bruno'},
        {name:'Jackson'},
        {name:'Felipe'},
        {name:'Zumbi dos Palmares'}
    ])('vaiProCanto($name) => Vai pro canto $name!', (nome) => {
        expect(vaiProCanto(nome)).toBe(`Vai pro canto ${nome}!`)
    });
})