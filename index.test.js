const request = require('supertest');
const app = require('../index');

describe('Pruebas de la aplicación', () => {
  it('Debería retornar ¡Hola, mundo! en la ruta "/"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('¡Hola, mundo!');
  });


  afterAll((done) => {
    app.close(done); 
  });
});
