const mongoose = require('mongoose');

// Definir el esquema de la publicación
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Crear el modelo de la publicación a partir del esquema
const Post = mongoose.model('Post', postSchema);

// Exportar el modelo
module.exports = Post;
