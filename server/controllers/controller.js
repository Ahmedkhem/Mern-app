const Movie = require("../models/model")





//!-------CRUD

// READ ALL
module.exports.findALLMovies = (req, res) => {
    Movie.find()
        .then(allMovies => {
            res.status(200).json({ allMovies })
        })
        .catch(err => res.status(400).json({ message: "There is an ERROR", error: err }))
}

// CREATE

module.exports.newMovie = (req, res) => {
    const movie = {
        title:req.body.title,
        reviews: [{
            name: req.body.name,
            rating: req.body.rating,
            review: req.body.review
        }]
    }
    Movie.create(movie)
        .then(newMovie => {
            res.status(200).json({ newMovie })
        })
        .catch(err => res.status(400).json(err))
}


// Find One

module.exports.findOneMovie = (req, res) => {
    Movie.findOne({ _id: req.params.id })
        .then(oneMovie => res.status(200).json({
            oneMovie
        }))
        .catch(err => res.status(400).json(err))
}



// Delete

module.exports.deleteMovie = (req, res) => {
    Movie.deleteOne({ _id: req.params.id })
        .then(result => { res.json({ result }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })


}
module.exports.addReview = (req, res) => {
    Movie.findByIdAndUpdate(
        { _id: req.params.id },
        {$push:{reviews:req.body}},
        { new: true, runValidators: true }
    )
        .then(updatedMovie => { res.status(200).json({updatedMovie}) })
        .catch(err => res.status(400).json(err))
}