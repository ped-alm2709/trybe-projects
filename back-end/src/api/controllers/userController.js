const loginUser = async (req, res) => {
  try {
    const response = await userService.login(req.body);

    if (response.error) {
      return res.status(400).json({ error: response.error });
    }

    res.status(200)
  } catch (error) {}
};
