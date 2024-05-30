const ServicoExercicio = require('../../src/services/service')

describe('ServicoExercicio', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio() 
    })

    it('Subtrair deve retornar a subtração de dois números positivos', () => {
        const result = servicoExercicio.Subtrair(5, 2)

        expect(result).toBe(3)
    })

    it('Subtrair um número e uma letra', () => {
        const result = () => servicoExercicio.Subtrair(2, 'a')

        expect(result).toThrowError('Digite um número inteiro')
    })

})