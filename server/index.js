import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import routes from './routes/route.js';

const app = express();

app.use(cors({
    origin: [
        'http://localhost:3000', 
        'https://gmail-clone-sand.vercel.app'  
    ],
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
