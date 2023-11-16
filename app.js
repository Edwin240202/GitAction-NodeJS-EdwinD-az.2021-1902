const express = require('express');
const saludarConNombreYMatricula = require('./index');

const app = express();

app.get('/', (req, res) => {
  const saludo = saludarConNombreYMatricula();
  res.send(saludo);
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});

app.close = (callback) => {
  server.close(callback);
};

module.exports = app;
