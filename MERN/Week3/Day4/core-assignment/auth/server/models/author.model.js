const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required."]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."]
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