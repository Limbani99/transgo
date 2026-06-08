const usermodel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// User registration controller
const resgister = async (req, res) => {
    try {
        const { username, email, password,phone,address } = req.body;
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// User login controller
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usermodel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "9d" });
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { login, resgister };