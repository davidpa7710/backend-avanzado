import express from 'express';
import { authorRoutes, authRoutes } from './routes/index.js';
import { protectedRoute } from './middleware/index.js';

const api = express();

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use(authRoutes);
api.get('/', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(protectedRoute);

api.use(authorRoutes);


export default api;