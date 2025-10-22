import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
    // const DB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.afvw91v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const DB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.afvw91v.mongodb.net/gmailclone?retryWrites=true&w=majority&appName=Cluster0`;
    
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default Connection;
