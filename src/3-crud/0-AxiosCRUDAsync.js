// In async/await syntax, we need to wrap the axios.get() function call within an async function.
// We encase the method call with a try... catch block so that we can capture any errors,
// similar to the .catch() method we used in the Promise version.

import axios from 'axios';
const baseUrl = 'http://localhost:3000/books';

// GET ALL books
const getAllBooks = async () => {
  try {
    const response = await axios.get(`${baseUrl}/books`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// GET POST BY ID
const getBookById = async (bookId) => {
  try {
    const response = await axios.get(`${baseUrl}/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// CREATE NEW BOOK
const createBook = async (newBook) => {
  try {
    const response = await axios.post(`${baseUrl}/${newBook}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE BOOk BY ID
const deleteBookById = async (bookId) => {
  try {
    const response = await axios.delete(`${baseUrl}/${bookId}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// COMPLETE UPDATE - SPECIFY ALL VALUES.
const updateBookById = async (bookId, updatedBook) => {
  try {
    const response = await axios.put(`${baseUrl}/${bookId}`, updatedBook);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

// PARTIAL UPDATE - SPECIFY VALUES WHICH TO UPDATE.
const modifyBookById = async (bookId, modifiedBook) => {
  try {
    const response = await axios.patch(`${baseUrl}/books/${bookId}`, modifiedBook);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

const booksService = {
  getAllBooks,
  getBookById,
  createBook,
  deleteBookById,
  updateBookById,
  modifyBookById,
};

export default booksService;
