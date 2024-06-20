import UserModel from "../models/user.model.js";
import tokenAndSet from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't match" });
    }

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "email already exists " });
    }

    const newUser = new UserModel({
      fullname,
      email,
      password,
    });

    if (newUser) {
      
      tokenAndSet(newUser._id, res);
      await newUser.save();
      res.status(200).json({
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      });
    }
    // console.log(newUser);
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user || !password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    tokenAndSet(user._id, res);

    res.status(200).json({
      id: user._id,
      fullname: user.fullname,
      email: user.email,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
