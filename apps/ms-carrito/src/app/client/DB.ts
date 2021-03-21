import * as mongoose from 'mongoose';

const HOST = process.env.DB_HOST || 'localhost'
const USER = process.env.DB_USER || 'brandDiscountsUser'
const PASSWORD = process.env.DB_PASSWORD || 'brandDiscountsPassword'
// const URL = `mongodb://${USER}:${PASSWORD}@${HOST}:27017`
const URL = `mongodb://${USER}:${PASSWORD}@${HOST}:27017/desafio_walmart?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1`;

export const connect = () => {
  console.log("entrando en connect", URL)

  mongoose.connect(URL, (err: any) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Succsesfully Connected!");
    }
  });
}

export const disconnect = async () => {
  mongoose.disconnect();
};