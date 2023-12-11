const { default: axios } = require("axios");
const { auth_url } = require("../../constants/server");

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(auth_url)
        const authResponse = await axios.post(`${auth_url}/auth/login`, { username, password });

        res.json(authResponse.data);
    } catch (error) {
      console.log(error)
        res.status(401).json({ message: 'Authentication failed' });
    }
};

const register = async (req, res) => {
    try {
      const { username, password, isUser } = req.body;
      console.log(req.body);
      console.log(typeof isUser);
      
      const authResponse = await axios.post(`${auth_url}/auth/register`, {
        username,
        password,
        isUser,
      });
  
      res.json(authResponse.data);
    } catch (error) {
      res.status(400).json({ message: error.response.data.message || 'Registration failed' });
    }
  };

module.exports = { login, register };