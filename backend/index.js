const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/signup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for user
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

// Define a schema for shirts
const shirtSchema = new mongoose.Schema({
  title: String,
  price: Number,
  img: String,
});

// Define a model for user
const User = mongoose.model('User', userSchema);
const Shirt = mongoose.model('Shirt', shirtSchema);

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create a new user
    const newUser = new User({
      username,
      email,
      password
    });

    // Save user to database
    await newUser.save();

    // Return success response
    res.status(201).json({ message: 'User signed up successfully!' });
  } catch (error) {
    console.error('An error occurred during signup:', error);
    res.status(500).json({ error: 'An error occurred during signup' });
  }
});


// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // User found, login successful
    return res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    console.error('An error occurred during login:', error);
    return res.status(500).json({ error: 'An error occurred during login' });
  }
});
// Add Shirt endpoint
app.post('/shirts', async (req, res) => {
  const { title, price, img } = req.body;

  try {
    const newShirt = new Shirt({
      title,
      price,
      img,
    });

    await newShirt.save();

    res.status(201).json({ message: 'Shirt added successfully!' });
  } catch (error) {
    console.error('An error occurred while adding shirt:', error);
    res.status(500).json({ error: 'An error occurred while adding shirt' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
