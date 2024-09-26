import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";
import Users from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import generateToken from "../utils/generateToken.js";

const getUsers = asyncHandler(async (req, res) => {
  const users = await Users.find();
  res.status(200).json(users);
});

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password, isAdmin } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Tolong isi semua kolom");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const userExist = await Users.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("Email sudah terdaftar");
  }

  const newuser = await Users.create({
    username,
    email,
    password: hashedPassword,
    isAdmin,
  });
  try {
    const savedUser = await newuser.save();
    generateToken(res, savedUser._id);
    res.status(201).json({ msg: "User created", user: savedUser });
  } catch (error) {
    res.status(500);
    throw new Error("Tidak dapat membuat user");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });
  try {
    if (user && (await bcrypt.compare(password, user.password))) {
      generateToken(res, user._id);
      res.status(200).json({ msg: "Login success", user: user });
    } else {
      res.status(401);
      throw new Error("Pasword atau email salah");
    }
  } catch (error) {
    res.status(500);
    throw new Error("Tidak dapat login");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "development",
      expires: new Date(0),
    });
    res.status(200).json({ msg: "Logout success" });
  } catch (error) {
    res.status(500);
    throw new Error("Tidak dapat logout");
  }
});

const getProfileUser = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.user._id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const updateProfileUser = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.user._id);
  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = await bcrypt.hash(req.body.password, 10);
    }
    const updatedUser = await user.save();
    res.status(200).json({ msg: "User updated", user: updatedUser });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id);
  if (user) {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ msg: "User deleted" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const getUsersbyId = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const updateUserbyId = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id);
  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin || user.isAdmin;
    if (req.body.password) {
      user.password = await bcrypt.hash(req.body.password, 10);
    }
    const updatedUser = await user.save();
    res.status(200).json({ msg: "User updated", user: updatedUser });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  getUsers,
  createUser,
  loginUser,
  logoutUser,
  getProfileUser,
  updateProfileUser,
  deleteUser,
  getUsersbyId,
  updateUserbyId,
};
