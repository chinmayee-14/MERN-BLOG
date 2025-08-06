//export default connectDB
import mongoose from 'mongoose';

const DB_Name = "mern-blog";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log("mongodb connected successfully");

    } catch (error) {
        console.log("mongodb error is ", error);
    }
}

export default connectDB;