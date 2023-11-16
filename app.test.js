const request = require('supertest');
const app = require('./app');

test('se espera un hola mundo', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Hola, mi nombre es EDWIN DAVID DÍAZ MENDOZA y mi matrícula es 2021-1902.')
    .end((err) => {
      if (err) return done(err);
      done();
    });
});

afterAll((done) => {
  app.close(() => {
    done();
  });
});
