const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// Habilitar CORS
app.use(cors());

// Middleware para parsear JSON en el body de las solicitudes
app.use(bodyParser.json());

// Datos de ejemplo (normalmente esto se conectaría a una base de datos)
let users = [
  { nombre: 'Juan', correo: 'juan@ejemplo.com', edad: 30 },
  { nombre: 'María', correo: 'maria@ejemplo.com', edad: 25 },
];

// Endpoint para obtener usuarios
app.get('/usuarios', (req, res) => {
  try {
    res.json(users); // Asegurarse de que la respuesta sea JSON
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' }); // Enviar un mensaje de error en JSON
  }
});

// Endpoint para agregar usuarios
app.post('/usuarios', (req, res) => {
  try {
    const { nombre, correo, edad } = req.body;

    if (!nombre || !correo || !edad) {
      return res.status(400).json({ error: 'Faltan datos en la solicitud' });
    }

    // Agregar el nuevo usuario (en una base de datos real, se guardaría ahí)
    users.push({ nombre, correo, edad });
    res.status(201).json({ message: 'Usuario agregado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' }); // Enviar un mensaje de error en JSON
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
