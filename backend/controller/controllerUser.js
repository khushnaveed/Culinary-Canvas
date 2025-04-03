import userModel from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userSignUp = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password is requried" });
    }

    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exsits." });
    }

    const hashPwd = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({ email, password: hashPwd });

    let token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "1hr",
    });

    return res.status(200).json({ token, newUser });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    // Validate input fields
    if (!email || !password || !userName ) {
      return res
        .status(400)
        .json({ message: "Username, email and password are required" });
    }

    // Find user by email
    const newUser = await userModel.findOne({ email });
    if (!newUser) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare hashed password with entered password
    const isMatch = await bcrypt.compare(password, newUser.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    return res.status(200).json({ token, newUser });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getUser = async (req, res) => {
  const newUser = await userModel.findById(req.params.id);
  res.json({ email: newUser.email });
};
