import dotenv from 'dotenv';
dotenv.config();

interface ConfigType {
  port: number;
  mongoUri: string;
}

export const config: ConfigType = {
  port: Number(process.env.PORT) || 9000,
  mongoUri: process.env.DB_URL || '',
};
