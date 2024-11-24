process.loadEnvFile()

export interface IEnviroment {
    readonly PORT: string;
    readonly HOST: string;
  }
  
export const environment: IEnviroment = {
  PORT: process.env.PORT || '3000' ,
  HOST: process.env.HOST || '0.0.0.0'
};
  