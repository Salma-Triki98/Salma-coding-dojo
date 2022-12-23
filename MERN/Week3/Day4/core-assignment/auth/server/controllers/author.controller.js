const Author = require('../models/author.model');
 //Add new Author
module.exports.AddAuthor = (req, res) => {
    Author.create(req.body)
    .then((creatAuthor) =>res.json(creatAuthor) )
    .catch(err => res.status(400).json(err));
}

// Get All authors
module.exports.ShowAll = (req, res) => {
    Author.find()
    .then(showAuthors =>res.json(showAuthors) )
    .catch(err => {res.status(400).json(err)})
}


// Get one author
module.exports.ShowOne = (req, res) => {
    Author.findById(req.params.id)
    .then(showAuthor =>res.json(showAuthor) )
    .catch(err => {res.statu(400).json(err)})
}



// Update the author

module.exports.UpdateAuthor = (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
    .then(updateAuthor =>res.json(updateAuthor) )
    .catch(err => {res.status(400).json(err)})
}


//Delete the author
module.exports.DeleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
    .then(deleteAuthor =>res.json(deleteAuthor) )
    .catch(err => {res.status(400).json(err)})
}


//***************.Book.************************

module.exports.addBook = (req, res) => {
    Author.findByIdAndUpdate (req.params.id, {$push: {books: req.body}}, {new:true, runValidators:true})
    .then(author => res.json(author))
    .catch((err)=> res.status(400).json(err));
};