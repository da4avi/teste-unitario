const ServicoExercicio = require('../../src/services/service')

describe('Teste dividir', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio() 
    })

    it('Dividir dois números positivos', () => {
        const result = servicoExercicio.Dividir(10, 5)

        expect(result).toBe(2)
    })

    it('Dividir um número e uma letra', () => {
        const result = () => servicoExercicio.Dividir(2, 'a')

        expect(result).toThrowError('Digite um número inteiro')
    })

    it('Dividir um número positivo e um número negativo', () => {
        const result = servicoExercicio.Dividir(10, -5)

        expect(result).toBe(-2)
    })

    it('Dividir 0 e um número positivo', () => {
        const result = servicoExercicio.Dividir(0, 5)

        expect(result).toBe(0)
    })

})