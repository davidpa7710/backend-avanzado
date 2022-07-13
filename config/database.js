import mongoose from 'mongoose';
import config from './index.js';

export default () => {
  mongoose.connect(`${config.database.uri}/${config.database.name}`);
};