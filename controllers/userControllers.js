const useServices = require('../services/userServices');

const createUseController = async (req, res) => {
  const user = await useServices.createUseServices(req.body);
  return res.status(201).json({ token: user });
};

const getAllUsersControllers = async (_req, res) => {
  const users = await useServices.getAllUsersServices();
  return res.status(200).json(users);
};

const getByIdControllers = async (req, res) => {
  const { id } = req.params;
  const user = await useServices.getByIdServices(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = {
  createUseController,
  getAllUsersControllers,
  getByIdControllers,
};
