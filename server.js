const express=require('express');
require('dotenv').config();
const app=express();
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'API web';
const APP_ENV = process.env.APP_ENV || 'desarrollo';

// Ruta principal para hacer la app
app.get('/', (req,res) => {
    res.status(200).json({
        mensaje: 'API funcionando',
        aplicacion: APP_NAME,
        entorno: APP_ENV
    });
});

// Verificar el entorno
app.get('/api/entorno', (req, res) => {
    res.status(200).json({
        aplicacion: APP_NAME,
        entorno: APP_ENV,
        puerto: PORT,
        descripcion: 'Ruta para verificar el entorno'
    });
});

// simular proyecto
app.get('/api/proyecto', (req, res) => {
    res.status(200).json({
        aplicacion: APP_NAME,
        modulo: 'Arquitectura web',
        tema: 'Controles de versiones y entornos',
        tecnologias: ['Node.js', 'Express', 'Dotenv', 'Git', 'Github']
    });
});

app.use((req, res) => {
    res.status(404).json({
        mensaje: 'Ruta no encontrada',
        ruta: req.originalUrl
    });
});

app.listen(PORT, () => {
    console.log(`${APP_NAME} ejecutandose en http://localhost:${PORT}`);
    console.log(`Entorno actual: ${APP_ENV}`);
});