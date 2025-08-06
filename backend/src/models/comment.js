
import mongoose, { Scheme } from 'mongoose';

const commentSchema = new Schema({

    content: {
        type : String,
        required: true,
        unique: true,
        
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    likes: {
        type: [mongoose.Schema.Types.PbjectId],
        default: [],
    }
}, {timestamps: true})

const Comment = mongoose.model("Comment", commentSchema)

export default Comment;
