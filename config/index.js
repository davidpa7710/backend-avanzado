
import dotenv from 'dotenv';

dotenv.config({});

console.log(process.env.DB_URI);

export default {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    uri: process.env.DB_URI || 'mongodb://localhost',
    name: process.env.DB_NAME || 'test',
  },
};