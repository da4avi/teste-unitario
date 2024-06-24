const app = require('../../index')
const request = require('supertest')

describe('Teste da API somar', () => {

    it('Somar dois números positivos', async () => {
        const response = await request(app).post('/api/somar').send({ num1: 1, num2: 2 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 3 });
    })

    it('Somar um número e uma letra', async () => {
        const response = await request(app).post('/api/somar').send({ num1: 1, num2: 'a' });

        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ message: "Erro ao somar" });
    })

    it('Somar um número positivo e um número negativo', async () => {
        const response = await request(app).post('/api/somar').send({ num1: 1, num2: -2 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: -1 });
    })

    it('Somar nulo e um número positivo', async () => {
        const response = await request(app).post('/api/somar').send({ num1: null, num2: 1 });

        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ message: "Erro ao somar" });
    })

})