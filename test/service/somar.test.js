const ServicoExercicio = require('../../src/services/service')

describe('ServicoExercicio', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio() 
    })

    it('Somar deve retornar a soma de dois números positivos', () => {
        const result = servicoExercicio.Somar(2, 3)

        expect(result).toBe(5)
    })

    it('Somar um número e uma letra', () => {
        const result = () => servicoExercicio.Somar(2, 'a')

        expect(result).toThrowError('Digite um número inteiro')
    })

})