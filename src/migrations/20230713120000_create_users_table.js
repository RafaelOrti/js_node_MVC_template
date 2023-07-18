const mongoose = require('mongoose');

// Define el esquema de la tabla "users"
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Crea la tabla "users" utilizando el esquema definido
const UserModel = mongoose.model('User', UserSchema);

// Exporta la migración
module.exports = {
  up: async () => {
    // Realiza las operaciones para crear la tabla "users"
    await UserModel.createCollection();
  },

  down: async () => {
    // Deshace las operaciones realizadas en "up" para eliminar la tabla "users"
    await UserModel.collection.drop();
  }
};
