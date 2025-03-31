const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    user = await User.create({
      name,
      email,
      password,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    console.log("token is created");

    const token = jwt.sign(
      { user_id: user._id },
      `${(process.env.JWT_SECRET = "secret")}`,
      {
        expiresIn: "24h",
      }
    );
    console.log("token is created", token);
    res.status(200).json({ token });
  } catch (error) {
    console.log("something went wrong");
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
};
