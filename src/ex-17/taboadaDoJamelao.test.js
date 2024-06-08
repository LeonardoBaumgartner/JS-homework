import { describe, expect, it, vi } from "vitest";
import { taboadaDoJamelao } from "./taboadaDoJamelao";

describe('taboadaDoJamelao', () => {
    it.each([
        5,
        0,
        2,
        10,
        -1,
        1
    ])('Execução de taboadaDoJamelao(%i)', (number) => {
        const fn = vi.spyOn(console, 'log');
        taboadaDoJamelao(number);
        for (let index = 0; index <= 10; index++){
            expect(fn).toHaveBeenCalledWith(`${number}x${index}=${number*index}`);
        }
    })
})