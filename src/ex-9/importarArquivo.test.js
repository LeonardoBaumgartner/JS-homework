import { describe, expect, it } from "vitest";
import { importarArquivo } from "./importarArquivo";
import { funcaoMockada } from "./funcaoMockada";

describe('importarArquivo', () => {
    it('Deve chamar a função mockada', () => {
        importarArquivo();
        expect(funcaoMockada).toHaveBeenCalled();
    })
})