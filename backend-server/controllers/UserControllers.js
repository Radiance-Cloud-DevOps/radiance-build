import User from '../models/UserModel.js';

export const createUser = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newUser = new User({ name, email, subject, message });
    await newUser.save();
    res.status(201).json({ message: 'User data stored successfully' });
  } catch (error) {
    console.error('Error storing user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
