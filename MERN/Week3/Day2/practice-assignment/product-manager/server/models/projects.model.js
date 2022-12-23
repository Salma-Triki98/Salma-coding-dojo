const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
    title: { 
        type: String,
        required:true,
        minlength: [2, "{PATH} must have at least 2 chars, but you entered {VALUE}"]
    },
    price: { 
        type: Number,
        required:[true,"{PATH} must put a price"]
    },
    description: { 
        type: String,
        required:true,
 }
}, { timestamps: true });
const Project =  mongoose.model('Project', ProjectSchema);
module.exports= Project