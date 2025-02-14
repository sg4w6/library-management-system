import axios from "axios";

// Define base API URL
const API_URL = "http://localhost:8080/api";

// Create an Axios instance
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Search books by author name
export const searchBooksByAuthor = async (authorName) => {
    const response = await axios.get(`${API_URL}/authors/books?name=${authorName}`);
    return response.data;
};

// Search author by book title
export const searchAuthorByBook = async (bookTitle) => {
    const response = await axios.get(`${API_URL}/books/author?title=${bookTitle}`);
    return response.data;
};

// API Functions
export const fetchAuthors = async () => {
    try {
        const response = await apiClient.get("/authors");
        return response.data;
    } catch (error) {
        console.error("Error fetching authors:", error);
        throw error;
    }
};

export const fetchBooks = async () => {
    try {
        const response = await apiClient.get("/books");
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
};

export const addAuthor = async (author) => {
    try {
        const response = await apiClient.post("/authors", author);
        return response.data;
    } catch (error) {
        console.error("Error adding author:", error);
        throw error;
    }
};

export const addBook = async (book) => {
    try {
        const response = await apiClient.post("/books", book);
        return response.data;
    } catch (error) {
        console.error("Error adding book:", error);
        throw error;
    }
};
