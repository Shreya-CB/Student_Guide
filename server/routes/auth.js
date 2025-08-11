const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existing1 = await User.findOne({ email });
    const existing2 = await User.findOne({ username });
    if (existing1) return res.status(400).json({ message: 'User with this email already exists' });
    else if(existing2) return res.status(400).json({ message: 'Username is already used' });
    const newUser = new User({ username, email, password }); // password gets hashed automatically
    await newUser.save();
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Signup failed' });
  }
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;

    try{
      // Check if user exists by username or email
      const user = await User.findOne({ $or: [{username: username}, {email: username}] });
      if (!user) {
        return res.status(400).json({ message: 'Account doesn\'t exist with this username or email.' });
      }

      // Compare entered password with the stored hash
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Your Password is incorrect.' });
      }

      res.status(200).json({ message: 'Signed in successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Login failed' });
  }
});

module.exports = router;