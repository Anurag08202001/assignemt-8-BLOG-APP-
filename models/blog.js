const mongoose = require('mongoose');
const Comment = require('./comment');




const blogSchema = new mongoose.Schema({
    title:{
        type:String
    },
    img:{
        type:String
    },
    author:{
        type:String
    },
    desc:{
        type:String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
   
    
   
})


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;