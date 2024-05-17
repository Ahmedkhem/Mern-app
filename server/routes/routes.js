const MovieControllers = require("../controllers/controller")


module.exports = (app) => {
    app.get("/api/movie", MovieControllers.findALLMovies)
    app.post("/api/movie", MovieControllers.newMovie)
    app.get("/api/movie/:id", MovieControllers.findOneMovie)
    
    app.put("/api/movie/:id", MovieControllers.addReview)
    app.delete("/api/movie/:id", MovieControllers.deleteMovie)
}