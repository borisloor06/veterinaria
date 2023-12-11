// express-backend/authMiddleware.js
const axios = require('axios');
const { auth_url } = require('../constants/server');

const authenticateMiddleware = async (req, res, next) => {
  try {
    // Verifica la existencia del token en el encabezado de autorización
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Llama al microservicio de Nest.js para validar el token
    const response = await axios.get(`${auth_url}/auth/validate`, {
      headers: { Authorization: token },
    });

    // Asigna la información del usuario al objeto de solicitud si la autenticación es exitosa
    req.user = response.data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authenticateMiddleware;