const { mongoose } = require('./database');

const Book = mongoose.model('Book', {
    author: String,
    title: String
});

const newBook = new Book({
    title: 'el mejor libro del mundo',
    author: 'pepito perez'
})

newBook.save().then(console.log).catch(console.error)

