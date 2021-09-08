//const { Mongoose } = require("mongoose")
const mongoose = require ("mongoose")
const Celebrity = require("../models/Celebrity.model")
//const { create } = require("../models/User.model")
mongoose.connect("mongodb://localhost/expres-movies")

const celebrities = [

{
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "I robot"
},
{
    name: "Goofy",
    occupation: "Dog",
    catchPhrase: "Aaugh! Aah-oh"
},
{
    name: "Harry Potter",
    occupation: "magician",
    catchPhrase:"experiamus"
}
]

Celebrity.insertMany(celebrities) 
.then(celebrities => {
	console.log(`celebrities - ${celebrities.length}
    celebrtities are in the database`);
	// redirect / render the detail view for this book
	// res.render('bookDetails', { book: createdBook });
	// redirect to a specific url
	res.redirect(`/celebrities/${newCelebrity._id}`);

    mongoose.connection.close();
})
    .catch(err => {console.log(err);})
