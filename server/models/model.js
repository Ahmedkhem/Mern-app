const mongoose = require("mongoose")



const MovieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Movie title is required"],
    },
    reviews:[
        {
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        max: [10, 'Maximum rating is 10'],
        min: [0, 'Minimum rating is 0']
    },
    review: {
        type: String,
        required: [true, "Review is required"],
        minlength: [10, "Review must be at least 10 characters long"]
    }
    
        }]
    

}, { timestamps: true });


module.exports = mongoose.model("Movie", MovieSchema)