import express from 'express';
import axios from 'axios';
import cors from 'cors';
import {config} from 'dotenv';

const app = express();
config({ path:"./config.env" })

//Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
     res.send("API is Working!") 
});

app.get("/images",async (req, res) => { 
    const {q} = req.query;
    const API_KEY = process.env.IMAGE_APP_API_KEY;
    try {
        const response = await axios.get(`
        https://pixabay.com/api/?key=${API_KEY}&q=${q}`
        );
        const images = response.data.hits;
        res.json(images);
    } catch (error) {
        res.status(500).send('Error fetching images');
    }
});


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});