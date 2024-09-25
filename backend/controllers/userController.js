import asyncHandler from "../middlewares/asyncHandler.js";
import Users from "../models/userModel.js";
import bcrypt from "bcryptjs";

const getUsers = asyncHandler(async (req, res) => {
  const users = await Users.find();
  res.status(200).json(users);
});

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
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
  });
  try {
    const savedUser = await newuser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500);
    throw new Error("Tidak dapat membuat user");
  }
});

export { getUsers, createUser };
