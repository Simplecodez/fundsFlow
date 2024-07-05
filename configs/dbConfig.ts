import mongoose, { Mongoose } from 'mongoose';
import { IDatabaseConnection } from './db.interface';

class MongoDBConnection implements IDatabaseConnection {
  private uri: string;
  constructor(uri: string) {
    this.uri = uri;
  }
  async connect(): Promise<void> {
    try {
      console.log('Connecting to database...');
      await mongoose.connect(this.uri);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }
}

export default MongoDBConnection;
