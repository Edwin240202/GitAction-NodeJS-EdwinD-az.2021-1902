const saludo = require('./index');

test("Debe devolver un saludo con Mi Nombre y Mi Matrícula", () => {
    expect(saludo()).toBe("Hola, mi nombre es EDWIN DAVID DÍAZ MENDOZA y mi matrícula es 2021-1902.");
});
