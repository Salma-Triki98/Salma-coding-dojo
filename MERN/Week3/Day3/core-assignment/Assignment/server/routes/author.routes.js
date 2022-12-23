const {AddAuthor, ShowAll, ShowOne, UpdateAuthor, DeleteAuthor, addBook} = require('../controllers/author.controller');




module.exports = app => {
    app.post('/api/authors',AddAuthor);
    app.get('/api/authors',ShowAll);
    app.get('/api/authors/:id',ShowOne);
    app.put('/api/authors/:id',UpdateAuthor);
    app.delete('/api/authors/:id',DeleteAuthor);
    //Book
    app.put('/api/authors/book/:id', addBook);
};