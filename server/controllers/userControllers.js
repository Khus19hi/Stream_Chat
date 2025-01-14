const User = require("../models/user");

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = await User.create({ name, email, password });
        return res.status(201).json({ message: "User registered", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error registering user", error });
    }
};

module.exports = { registerUser };
