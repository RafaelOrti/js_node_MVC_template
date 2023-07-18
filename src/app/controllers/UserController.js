const User = require('../models/User');
const UserDTO = require('../dto/UserDTO');
const handleError = require('../utils/handleError');

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().select('name email').lean();
      const formattedUsers = users.map(user => UserDTO.format(user));
      res.status(200).json(formattedUsers);
    } catch (error) {
      handleError(error, res);
    }
  },

  getUserById: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId).select('name email').lean();
      const formattedUser = UserDTO.format(user);
      res.status(200).json(formattedUser);
    } catch (error) {
      handleError(error, res);
    }
  },

  createUser: async (req, res) => {
    try {
      const user = UserDTO.create(req.body);
      const createdUser = await User.create(user).select('name email').lean();
      const formattedUser = UserDTO.format(createdUser);

      res.status(201).json(formattedUser);
    } catch (error) {
      handleError(error, res);
    }
  },

  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const updates = UserDTO.create(req.body);

      const updatedUser = await User.findByIdAndUpdate(userId, updates, {
        new: true
      }).select('name email').lean();
      const formattedUser = UserDTO.format(updatedUser);
      res.status(200).json(formattedUser);
    } catch (error) {
      handleError(error, res);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userId = req.params.id;

      const deletedUser = await User.findByIdAndDelete(userId).select('name email').lean();
      const formattedUser = UserDTO.format(deletedUser);
      res.status(200).json({
        message: 'User deleted successfully', user: formattedUser
      });
    } catch (error) {
      handleError(error, res);
    }
  }
};

module.exports = UserController;
