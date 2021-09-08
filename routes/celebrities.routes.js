const app = require("../app");
const router = require("express").Router();
const Celebrity= require("../models/celebrity.model")



// displayes all the celebritis from DB
router.get("/celebrities", (req,res, next) => {
    Celebrity.find()
    .then(celebritiesFromDataBase => {
        console.log(celebritiesFromDataBase);
        res.render("celebrities/celebrities", {celebrities: celebritiesFromDataBase})
    }) 
})


// displayes all the Movies from DB
router.get("/movies", (req,res, next) => {
   Movie.find()
   .then(moviesFromDataBase => {
       console.log(moviesFromDataBase);
       res.render("movies/movies", {movies: moviesFromDataBase})
   }) 
})




//displayes the new celebrity form for add a celebrity
router.get("/create", (req,res, next) => {
    res.render("celebrities/new-celebrity")
})


router.post("/celebrities", (req, res, next) => {
	console.log(req.body);
	const { name, occupation, catchPhrase } = req.body;
	// create a new book in the database
	Celebrity.create ({
		name: name,
		occupation: occupation,
		catchPhrase: catchPhrase
	})
		.then(createdCelebrity => {
			console.log(createdCelebrity);
			// redirect / render the detail view for this book
			// res.render('bookDetails', { book: createdBook });
			// redirect to a specific url
			res.redirect('/celebrities');
		})
		.catch(err => next(err));
});





//router.post("/celebrities/create", (req,res) => {
//    console.log(req.body);
//})
//


module.exports = router;