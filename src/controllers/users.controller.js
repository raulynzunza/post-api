import { Users } from "../models/Users.js";
import bcryptjs from "bcryptjs";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.send(users);
  } catch (error) {
    return json.status(500).json({ message: error.message });
  }
};

export const createUsers = async (req, res) => {
  const { name, email, password, avatar } = req.body;
  let passwordHash = await bcryptjs.hash(password, 10);
  try {
    const newUser = await Users.create({
      name,
      email,
      password: passwordHash,
      avatar,
    });
    res.json(newUser);
  } catch (error) {
    return json.status(500).json({ message: error.message });
  }
};

export const existingUser = async (req, res) => {
  const { email, password } = req.params;

  try {
    const account = await Users.findAll({ email });
    if (!account) return res.status(404).json({ message: "User not found" });
    const checkPassword = await bcryptjs.compare(password, account[0].password);
    if (checkPassword === true) {
      return res.status(200).json({ message: true, account });
    } else {
      return res.status(200).json({ message: false });
    }
  } catch (error) {
    return json.status(500).json({ message: error.message });
  }
};
