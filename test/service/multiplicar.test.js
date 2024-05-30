const ServicoExercicio = require('../../src/services/service')

describe('ServicoExercicio', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio() 
    })

    it('Multiplicar deve retornar a multiplicação de dois números positivos', () => {
        const result = servicoExercicio.Multiplicar(5, 2)

        expect(result).toBe(10)
    })

    it('Multiplicar um número e uma letra', () => {
        const result = () => servicoExercicio.Multiplicar(2, 'a')

        expect(result).toThrowError('Digite um número inteiro')
    })

})