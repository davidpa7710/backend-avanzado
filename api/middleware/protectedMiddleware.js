import jwt from 'jwt-simple';
import config from '../../config/index.js';
import { User } from '../models/index.js';
const protectedRoute = (req, res, next) => {

  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      msg: 'Token requerido en la cabecera Authorization',
    });
  }
  try {
    const payload = jwt.decode(token, config.token.secret);
    const user = User.findById(payload.userId);
    if (!user) {
      return res.status(401).json('Usuario no existente');
    }
    next();
  } catch (error) {
    return res.status(401).json({
      msg: 'Token inválido',
      error,
    });
  }
};

export default protectedRoute;