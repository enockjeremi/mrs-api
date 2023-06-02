import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST,
      dbName: process.env.DATABASE_NAME,
      port: process.env.PORT,
    },
    mongo: {
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
      dbName: process.env.MONGO_DB,
      port: parseInt(process.env.MONGO_PORT, 10),
      host: process.env.MONGO_HOST,
      connection: process.env.MONGO_CONNECTION,
    },
    apiKey: process.env.API_KEY,
  };
});
