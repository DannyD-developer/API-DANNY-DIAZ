// api.test.js
const request = require('supertest');
const express = require('express');
const teachersRoutes = require('./routes/teachersroutes');

const app = express();
app.use(express.json());
app.use('/api/teachers', teachersRoutes);

describe('Pruebas API Teachers', () => {
  it('Debe obtener la lista de teachers (GET)', async () => {
    const res = await request(app).get('/api/teachers');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('Debe agregar un nuevo teacher (POST)', async () => {
    const newTeacher = { name: 'Danny', age: 25, enroll: true };
    const res = await request(app)
      .post('/api/teachers')
      .send(newTeacher);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Danny');
  });
});
