const express = require('express');
const app = express();

const auth = require('./middlewares/auth');
const teachersRoutes = require('./routes/teachersroutes');

app.use(express.json());

// Ruta pública
app.get('/', (req, res) => res.send('Node JS API Danny'));

// 🔹 Middleware aplicado a todas las rutas /api
app.use('/api/teachers', auth, teachersRoutes);

// Puerto 3000
const port = 3000;
app.listen(port, () => console.log(` Servidor escuchando en puerto ${port}...`));
