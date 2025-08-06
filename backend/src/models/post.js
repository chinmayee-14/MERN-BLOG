

import mongoose, { Scheme } from 'mongoose';

const PostSchema = new Schema({

    title: {
        type : String,
        required: true,
        
    },
    content: {
        type : String,
        required: true,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref:"User",
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    postImage: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fYaY9LEjaK0yhT3WsncM36y6MD9sLCHU4A&s",
    },
    slug:{
        type: String,
        required: true,
        unique: true,
    }
}, {timestamps: true})

const Post = mongoose.model('Post', PostSchema);

export default Post;

