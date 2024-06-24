const app = require('../../index')
const request = require('supertest')

describe('Teste da API subtrair', () => {

    it('Subtrair dois números positivos', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 3, num2: 2 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 1 });
    })

    it('Subtrair um número e uma letra', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 1, num2: 'a' });

        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ message: "Erro ao Subtrair" });
    })

    it('Subtrair um número positivo e um número negativo', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: 1, num2: -2 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 3 });
    })

    it('Subtrair nulo e um número positivo', async () => {
        const response = await request(app).post('/api/subtrair').send({ num1: null, num2: 1 });

        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ message: "Erro ao Subtrair" });
    })

})