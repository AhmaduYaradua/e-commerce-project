import { userModel } from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (validator.isEmpty(name, { ignore_whitespace: true }) === true) {
    return res
      .status(400)
      .json({ message: "Please provide your name", status: "Failed" });
  }
  if (validator.isEmail(email) === false) {
    return res
      .status(400)
      .json({ message: "please provide your email address", status: "Failed" });
  }
  if (
    validator.isStrongPassword(password, {
      minLength: 6,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    }) === false
  ) {
    return res
      .status(400)
      .json({ message: "Please provide a strong password", status: "failed" });
  }
  //   registter user here

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    const user = await userModel.create({
      name: name,
      password: hashPassword,
      email: email,
    });
    res
      .status(201)
      .json({ data: "User registered successfully", status: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "Failed" });
  }
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (validator.isEmail(email) === false) {
    return res
      .status(400)
      .json({ message: "please provide your email address", status: "Failed" });
  }
  if (
    validator.isStrongPassword(password, {
      minLength: 6,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    }) === false
  ) {
    return res
      .status(400)
      .json({ message: "Please provide a strong password", status: "failed" });
  }
  try {
    //   check if user with email exist
    const user = await userModel.findOne({ email: email });
    if (user === null) {
      return res.status(400).json({ message: "No account found with" + email });
    }

    //   check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (isPasswordCorrect === false) {
      return res
        .status(400)
        .json({ message: "Email or password not correct", status: "Failed" });
    }
    user.password = undefined;
    res.status(200).json({ data: user, status: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "Failed" });
  }
};

export { registerUser, loginUser };
