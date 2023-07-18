
const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

const { validateUserUpdate, handleValidationErrors } = require('../helpers/validationHelper');

const authenticateUser = require('../middlewares/authMiddleware');


// Ruta para obtener todos los usuarios
router.get('/', UserController.getAllUsers);

// Ruta para obtener un usuario por su ID
router.get('/:id', UserController.getUserById);

// Ruta para actualizar un usuario
router.put('/:id', authenticateUser, validateUserUpdate, handleValidationErrors, UserController.updateUser);

// Ruta para eliminar un usuario
router.delete('/:id', authenticateUser, UserController.deleteUser);

module.exports = router;
