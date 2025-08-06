
import mongoose, { Scheme } from 'mongoose';

const userSchema = new Schema({

    userName: {
        type : String,
        required: true,
        unique: true,
        
    },
    email: {
        type : String,
        unique:true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    userImage: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fYaY9LEjaK0yhT3WsncM36y6MD9sLCHU4A&s",
    }
}, {timestamps: true})

const User = mongoose.model('User', UserSchema);

export default User;
