import axios from "axios";

const API_URL = "http://localhost:8080/api"; // Adjust backend URL if needed

// Fetch books
export const fetchBooks = async () => {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
};

// Fetch authors
export const fetchAuthors = async () => {
    const response = await axios.get(`${API_URL}/authors`);
    return response.data;
};

// Add book
export const addBook = async (book) => {
    const response = await axios.post(`${API_URL}/books`, book);
    return response.data;
};

// Add author
export const addAuthor = async (author) => {
    const response = await axios.post(`${API_URL}/authors`, author);
    return response.data;
};
