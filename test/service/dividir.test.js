const ServicoExercicio = require('../../src/services/service')

describe('ServicoExercicio', () => {
    let servicoExercicio;

    beforeEach(() => {
        servicoExercicio = new ServicoExercicio() 
    })

    it('Dividir deve retornar a divição de dois números positivos', () => {
        const result = servicoExercicio.Dividir(10, 5)

        expect(result).toBe(2)
    })

    it('Dividir um número e uma letra', () => {
        const result = () => servicoExercicio.Dividir(2, 'a')

        expect(result).toThrowError('Digite um número inteiro')
    })

})