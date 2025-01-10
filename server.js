const express = require('express');
const cors = require('cors');
const pool = require('./db'); // Conexión a la base de datos

require('dotenv').config();

const app = express();

// Middleware

app.use(express.json());
const corsOptions = {
  origin: 'https://front-nco8.onrender.com', // Asegúrate de poner la URL de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Los métodos que quieres permitir
  allowedHeaders: ['Content-Type', 'Authorization'] // Cabeceras que se permiten
};
app.use(cors(corsOptions));
// Rutas
// Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
});

// Agregar un usuario
app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, correo, edad } = req.body;
    const result = await pool.query(
      'INSERT INTO usuarios (nombre, correo, edad) VALUES ($1, $2, $3) RETURNING *',
      [nombre, correo, edad]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Error del servidor');
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
