import { instance } from "./index";

async function registerUser(name, email, password) {
    const response = await instance.post('/register', { name, email, password });
    return response.data;
}

async function loginUser(email, password) {
    const response = await instance.post('/login', { email, password });
    return response.data;
}

async function createBook(formData) {
    const response = await instance.post('/books', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.data;
  }

async function getAllBooks() {
    const response = await instance.get('/books');
    return response.data;
}

async function editBook(id, title, author, publisher, year, pages) {
    const response = await instance.put(`/books/${id}`, { title, author, publisher, year, pages });
    return response.data;
}

async function deleteBook(id) {
    const response = await instance.delete(`/books/${id}`);
    return response.data;
}

async function getBookDetailById(id) {
    const response = await instance.get(`/books/${id}`);
    return response.data;
}

export { registerUser, loginUser, createBook, getAllBooks, editBook, deleteBook,getBookDetailById };