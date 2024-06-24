const ServicoExercicio = require('../../src/services/service')

describe('Teste subtrair', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio() 
    })

    it('Subtrair dois números positivos', () => {
        const result = servicoExercicio.Subtrair(5, 2)

        expect(result).toBe(3)
    })

    it('Subtrair um número e uma letra', () => {
        const result = () => servicoExercicio.Subtrair(2, 'a')

        expect(result).toThrowError('Digite um número inteiro')
    })

    it('Subtrair um número positivo e um número negativo', () => {
        const result = servicoExercicio.Subtrair(2, -3)

        expect(result).toBe(5)
    })

    it('Subtrair nulo e um número positivo', () => {
        const result = () => servicoExercicio.Subtrair(null, 5)

        expect(result).toThrowError('Digite um número inteiro')
    })

})