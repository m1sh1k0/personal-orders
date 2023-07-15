import { config } from 'dotenv';
config();

export const MONGO_URI: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@main-cluster.pi2yatp.mongodb.net/?retryWrites=true&w=majority`;
