import { describe, expect, it } from "vitest";
import { random } from "./random";

describe('random', () => {
    it('Deve retornar um número aleatório toda vez que for chamada', () => {
        let resultado = Math.random();
        for(let index = 0; index < 20; index++){
            const newRandom = random();
            expect(random()).not.toBe(resultado);
            resultado = newRandom;
        }
    })
})