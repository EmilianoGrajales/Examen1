const express = require('express');
const { getAllProducts, getAllUsers, getAllServicios } = require('../controllers/allControllers'); // Asegúrate de que la ruta sea correcta
const router = express.Router();

router.get('/producto/all', getAllProducts);
router.get('/usuarios/all', getAllUsers); // Asegúrate de que esta ruta esté definida
router.get('/api/servicio', getAllServicios);

module.exports = router;