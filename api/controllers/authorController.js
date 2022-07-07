import { Author } from '../models/index.js';

const getAllAuthors = async (_, res) => {
  try {
    const authors = await Author.find();
    return res.json({
      msg: 'Autores obtenidos',
      authors,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar todos los autores',
      error,
    });
  }
};

const createAuthor = async (req, res) => {
  try {
    const newAuthor = await Author.create(req.body);
    return res.json({
      msg: 'Nuevo autor creado',
      author: newAuthor,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al crear un autor',
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

const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    return res.json({
      msg: 'Autor encontrado',
      author,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al buscar autor por id',
      error,
    });
  }
};

const updateAuthorById = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body);
    return res.json({
      msg: 'Autor actualizado',
      author,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al actualizar autor por id',
      error,
    });
  }
};

const deleteAuhorById = async (req, res) => {
  try {
    await Author.deleteOne({
      id: req.params.id,
    });
    return res.json({
      msg: 'Autor eliminado',
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Ha ocurrido un error al borrar autor',
      error,
    });
  }
};

export {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuhorById,
};