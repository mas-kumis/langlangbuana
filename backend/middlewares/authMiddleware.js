import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.token;

  if (token === "undefined" || token === "null") {
    res.status(401);
    throw new Error("Anda harus login");
  }
  if (!token) {
    res.status(401);
    throw new Error("Anda harus login");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userid).select("-password");
    next();
  } catch (error) {
    res.status(401);
    throw new Error("Anda harus login");
  }
});

const adminMiddleware = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Anda harus login sebagai admin");
  }
});

const checkCookies = asyncHandler(async (req, res, next) => {
  res.cookie("KEY", "Value", {
    expires: new Date(new Date().getTime() + 10 * 86400000),
    httponly: true,
  });
  res.status(201).json({ data: null, message: "cookie set successfully." });
});

export { authMiddleware, adminMiddleware, checkCookies };
