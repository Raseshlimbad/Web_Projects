import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 8000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB

// const connectDB = async () => {
//     try {
//         mongoose.set('strictQuery', true)
//         mongoose.connect(URI)
//         console.log('Database connected')
//     } catch (error) {
//         console.log("Error connected : ", error)
//         process.exit()
//     }
// }

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},).then((res) => {
    console.log("Database connected");
  }).catch(error => {
     console.log(error);
   });

// defining routes
app.use("/book" , bookRoute);
app.use("/user" , userRoute);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});