const app = require('../../index')
const request = require('supertest')

describe('Teste da API multiplicar', () => {

    it('Multiplicar dois números positivos', async () => {
        const response = await request(app).post('/api/multiplicar').send({ num1: 2, num2: 2 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 4 });
    })

    it('Multiplicar um número e uma letra', async () => {
        const response = await request(app).post('/api/multiplicar').send({ num1: 1, num2: 'a' });

        expect(response.statusCode).toBe(500);
        expect(response.body).toEqual({ message: "Erro ao Multiplicar" });
    })

    it('Multiplicar um número positivo e um número negativo', async () => {
        const response = await request(app).post('/api/multiplicar').send({ num1: 5, num2: -2 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: -10 });
    })

    it('Multiplicar 0 e um número positivo', async () => {
        const response = await request(app).post('/api/multiplicar').send({ num1: 0, num2: 1 });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ result: 0 });
    })

})