const app = require('../../index')
const request = require('supertest')

describe('Teste da API dividir', () => {

    it('Dividir dois números positivos', async () => {
        const response = await request(app).post('/api/dividir').send({ num1: 10, num2: 5 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 2 });
    })

    it('Dividir um número e uma letra', async () => {
        const response = await request(app).post('/api/dividir').send({ num1: 1, num2: 'a' });

        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ message: "Erro ao Dividir" });
    })

    it('Dividir um número positivo e um número negativo', async () => {
        const response = await request(app).post('/api/dividir').send({ num1: 10, num2: -5 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: -2 });
    })

    it('Dividir 0 e um número positivo', async () => {
        const response = await request(app).post('/api/dividir').send({ num1: 0, num2: 1 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 0 });
    })

})