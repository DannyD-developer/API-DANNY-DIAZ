// routes/teachersRoutes.js
const express = require('express');
const router = express.Router();

let teachers = [
  { id: 1, name: 'Santiago', age: 27, enroll: true },
  { id: 2, name: 'Luis', age: 23, enroll: false },
  { id: 3, name: 'Nelson', age: 24, enroll: false }
];

router.get('/', (req, res) => res.send(teachers));

router.get('/:id', (req, res) => {
  const teacher = teachers.find(t => t.id === parseInt(req.params.id));
  if (!teacher) return res.status(404).send('Teacher not found');
  res.send(teacher);
});

router.post('/', (req, res) => {
  if (!req.body.name || !req.body.age) return res.status(400).send('Nombre y edad son obligatorios');
  const teacher = {
    id: teachers.length + 1,
    name: req.body.name,
    age: parseInt(req.body.age),
    enroll: req.body.enroll === true
  };
  teachers.push(teacher);
  res.send(teacher);
});

router.delete('/:id', (req, res) => {
  const teacher = teachers.find(t => t.id === parseInt(req.params.id));
  if (!teacher) return res.status(404).send('Teacher not found');
  teachers = teachers.filter(t => t.id !== teacher.id);
  res.send(teacher);
});

module.exports = router;
