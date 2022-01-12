const userService = require('../services/userService');

const login = async (req, res) => {
  try {
    const response = await userService.login(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const register = async (req, res) => {
  try {
    const response = await userService.register(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    if (req.role !== 'administrator') throw new Error();
    const { email } = req.params;
    console.log(email);
    await userService.deleteUser(email);
    res.status(204).send();
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const registerByAdm = async (req, res) => {
  try {
    if (req.role !== 'administrator') throw new Error();
    const response = await userService.registerByAdm(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getAllSellers = async (_req, res) => {
  try {
    const response = await userService.getAllSellers();
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const response = await userService.getAllUsers();
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  login,
  register,
  getAllSellers,
  getAllUsers,
  registerByAdm,
  deleteUser,
};
