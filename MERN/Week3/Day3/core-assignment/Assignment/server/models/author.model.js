const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true,'Name is required'],
        minlength :[3,"the name must be at least 3 characters"]
    },
    books: [
        {
            title: {
                type : String,
                required: true,
            },
            numberOfPages : {
                type: Number,
                required : true
            },
        },
    ],
}, {timestamps:true});
    
    const Author =  mongoose.model('Author', AuthorSchema);
    module.exports= Author