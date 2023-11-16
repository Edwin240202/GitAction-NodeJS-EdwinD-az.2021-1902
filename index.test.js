
const request = require('supertest');
const app = require('./index');

describe('Pruebas Unitarias del Hola Mundo', () => {
  it('Debería retornar ¡Hola, mundo! en la ruta "/"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('¡Hola, mundo!');
  });
});
