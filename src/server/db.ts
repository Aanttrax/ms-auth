import { environment } from '@env/environment';
import mongoose from 'mongoose';

const { MONGO_USER, MONGO_PWD, MONGO_HOST, MONGO_DB_NAME, MONGO_OPTIONS } = environment;

const createMongoUri = () => {
    return `mongodb+srv://${MONGO_USER}:${MONGO_PWD}@${MONGO_HOST}${MONGO_DB_NAME}${MONGO_OPTIONS}`;
  };

const connectToMongoDB = async () => {
  try {
    const mongoUri = createMongoUri();
    await mongoose.connect(mongoUri);
    console.log('\x1b[32m%s\x1b[0m', '✅ Connected to MongoDB successfully')
  } catch (error:unknown) {
      if (error instanceof Error) {
          console.error('\x1b[31m%s\x1b[0m', '❌ Error connecting to MongoDB: ', error.message);
      } else {
          console.error('\x1b[31m%s\x1b[0m', "❌ An unknown error was thrown. ", error);
      }
    process.exit(1); 
  }
};

connectToMongoDB();

export default mongoose.connection;
