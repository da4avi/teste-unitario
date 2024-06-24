const ServicoExercicio = require('../../src/services/service')

describe('Teste multiplicar', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio() 
    })

    it('Multiplicar números positivos', () => {
        const result = servicoExercicio.Multiplicar(5, 2)

        expect(result).toBe(10)
    })

    it('Multiplicar um número e uma letra', () => {
        const result = () => servicoExercicio.Multiplicar(2, 'a')

        expect(result).toThrowError('Digite um número inteiro')
    })

    it('Multiplicar um número positivo e um número negativo', () => {
        const result = servicoExercicio.Multiplicar(5, -2)

        expect(result).toBe(-10)
    })

    it('Multiplicar 0 e um número positivo', () => {
        const result = servicoExercicio.Multiplicar(0, 5)

        expect(result).toBe(0)
    })

})