const express = require('express');
const path = require('path');
const allRouter = require('../routes/allRoutes'); // Asegúrate de que esta ruta sea correcta
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname))); // Servir archivos estáticos desde la carpeta web

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html')); // Respuesta para la ruta principal
});

app.use(allRouter); // Usa las rutas definidas en allRoutes.js

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});