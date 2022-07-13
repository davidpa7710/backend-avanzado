import { User } from '../models/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
import config from '../../config/index.js';

const register = async (req, res) => {
  try {
   const encryptedPass = await bcrypt.hash(req.body.password, 3);
    req.body.password = encryptedPass;
    const newUser = await User.create(req.body);
    newUser.password = undefined;
    return res.json({
      msg: 'Usuario registrado satisfactoriamente',
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al registrar usuario',
    });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;
 
  try {
    const user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(401).json({
        msg: 'Credenciales erroneas',
      });
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        msg: 'Credenciales erroneas',
      });
    }

    const payload = {
      userId: user.id,
    };
    const token = jwt.encode(payload, config.token.secret);
    return res.json({
      msg: 'Login correcto',
      token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al hacer login',
    });
  }
};

export { register, login };