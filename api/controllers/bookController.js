import { Book } from '../models/index.js';

const getAllBooks = async (_, res) => {
  try {
    const books = await Book.find();
    return res.json({
      msg: 'Autores obtenidos',
      books,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar todos los libroes',
      error,
    });
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    return res.json({
      msg: 'Nuevo libro creado',
      book: newBook,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear un libro',
      error,
    });
  }
};

/**
 * req.body
 * req.parms
 * req.query
 * req.header
 */

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    return res.json({
      msg: 'Libro encontrado',
      book,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar libro por id',
      error,
    });
  }
};

const updateBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    return res.json({
      msg: 'Libro actualizado',
      book,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar libro por id',
      error,
    });
  }
};

const deleteBookById = async (req, res) => {
  try {
    await Book.deleteOne({
      id: req.params.id,
    });
    return res.json({
      msg: 'Libro eliminado',
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Ha ocurrido un error al borrar libro',
      error,
    });
  }
};

const booksWithAuthors = async (req, res) => {
  try {
    const booksWithAuthors = await Book.find().populate('authors');
    return res.json({
      msg: 'Libros con autores encontrados',
      books: booksWithAuthors,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Ha ocurrido un error al consultar libros con autores',
      error,
    });
  }
};

export {
  getAllBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById,
  booksWithAuthors,
};