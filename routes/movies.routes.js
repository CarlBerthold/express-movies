const app = require("../app");
const router = require("express").Router();
const Movie = require("../models/movie.model")



// displayes all the Movies from DB
router.get("/movie", (req,res, next) => {
    Movie.find()
    .then(moviesFromDataBase => {
        console.log(moviesFromDataBase);
        res.render("movies/movie", {movies: moviesFromDataBase})
    }) 
 })

//displayes the new Movies form for add a celebrity
router.get("/newMovie", (req,res, next) => {
    res.render("movies/new-movie")
})


 router.post("/movie", (req, res, next) => {
	console.log(req.body);
	const { title, genre, plot } = req.body;
	// create a new book in the database
	Movie.create ({
		title: title,
		genre: genre,
		plot: plot
	})
		.then(createdMovie => {
			console.log(createdMovie);
			// redirect / render the detail view for this book
			// res.render('bookDetails', { book: createdBook });
			// redirect to a specific url
			res.redirect('/movie');
		})
		.catch(err => next(err));
});

 module.exports = router; 