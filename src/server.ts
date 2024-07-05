import MongoDBConnection from '../configs/dbConfig';
import 'dotenv/config';
import 'reflect-metadata';
import './diregistry/di';
import { app } from './app';

let server: any;
const port = process.env.PORT || 4000;
const mongoDBConnection = new MongoDBConnection(process.env.MONGODB_CONNECTION_URI as string);
mongoDBConnection
  .connect()
  .then(() => {
    console.log('Database Connection Established');
    server = app.listen(8080, () => {
      console.log(`App running on port: ${8080}`);
    });
  })
  .catch((e) => console.log(e));
