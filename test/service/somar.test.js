const ServicoExercicio = require('../../src/services/service')

describe('Teste somar', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio() 
    })

    it('Somar dois números positivos', () => {
        const result = servicoExercicio.Somar(2, 3)

        expect(result).toBe(5)
    })

    it('Somar um número e uma letra', () => {
        const result = () => servicoExercicio.Somar(2, 'a')

        expect(result).toThrowError('Digite um número inteiro')
    })

    it('Somar um número positivo e um número negativo', () => {
        const result = servicoExercicio.Somar(2, -3)

        expect(result).toBe(-1)
    })

    it('Somar nulo e um número positivo', () => {
        const result = () => servicoExercicio.Somar(null, 5)

        expect(result).toThrowError('Digite um número inteiro')
    })

})