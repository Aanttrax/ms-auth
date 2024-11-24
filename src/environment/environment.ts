process.loadEnvFile()

export interface IEnviroment {
    readonly PORT: string;
    readonly HOST: string;
    readonly MONGO_USER: string;
    readonly MONGO_PWD: string;
    readonly MONGO_HOST: string;
    readonly MONGO_DB_NAME: string;
    readonly MONGO_OPTIONS: string;
    readonly TOKEN_SECRET: string;
  }

if (!process.env.PORT) throw new Error('The environment variable PORT is not defined');
if (!process.env.HOST) throw new Error('The environment variable HOST is not defined');
if (!process.env.MONGO_USER) throw new Error('The environment variable MONGO_USER is not defined');
if (!process.env.MONGO_PWD) throw new Error('The environment variable MONGO_PWD is not defined');
if (!process.env.MONGO_HOST) throw new Error('The environment variable MONGO_HOST is not defined');
if (!process.env.MONGO_DB_NAME) throw new Error('The environment variable MONGO_DB_NAME is not defined');
if (!process.env.MONGO_OPTIONS) throw new Error('The environment variable MONGO_OPTIONS is not defined');
if (!process.env.TOKEN_SECRET) throw new Error('The environment variable TOKEN_SECRET is not defined');
  

export const environment: IEnviroment = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PWD: process.env.MONGO_PWD,
  MONGO_HOST: process.env.MONGO_HOST,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  MONGO_OPTIONS: process.env.MONGO_OPTIONS,
  TOKEN_SECRET: process.env.TOKEN_SECRET
};
  