import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  authors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
    },
  ],
  title: String,
  category: String,
  editorial: String,
  printingDate: Date,
  pageNumber: Number,
  isbn: String,
  languaje: String,
  cover: String,
});

const BookModel = mongoose.model('Book', bookSchema);

export default BookModel;