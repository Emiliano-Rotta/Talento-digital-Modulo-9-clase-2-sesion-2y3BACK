-- Crear la base de datos
CREATE DATABASE gestion_datos;

-- Conectar a la base de datos
\c gestion_datos;

-- Crear la tabla "usuarios"
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,         -- ID único autoincremental
    nombre VARCHAR(100) NOT NULL,  -- Nombre del usuario
    correo VARCHAR(100) UNIQUE,    -- Correo del usuario, único
    edad INT                       -- Edad del usuario
);

-- Insertar datos
INSERT INTO usuarios (nombre, correo, edad) 
VALUES 
('Ana López', 'ana.lopez@example.com', 28),
('Carlos Torres', 'carlos.torres@example.com', 35);

-- Ver todos los registros
SELECT * FROM usuarios;

-- Insertar otro registro
INSERT INTO usuarios (nombre, correo, edad) 
VALUES ('María Pérez', 'maria.perez@example.com', 22);

