import { describe, expect, it } from "vitest";
import { isLeonardoBaumgartnerGay } from './obvious';

describe('Leonardo Baumgartner', () => {
    it('O Leonardo Baumgartner é boiola?', () => {
        expect(isLeonardoBaumgartnerGay()).toBe(true);
    })
})