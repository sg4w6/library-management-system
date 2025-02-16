import axios from "axios";

//  Backend API Base URL
const API_URL = "http://localhost:8080/api";

//  Create Axios instance with error handling
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

//  Fetch all books
export const fetchBooks = async () => {
    try {
        const response = await axios.get(`${API_URL}/books`);
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error.response?.data || error.message);
        throw new Error(error.response?.data || "Failed to load books");
    }
};

//  Fetch all authors
export const fetchAuthors = async () => {
    try {
        const response = await apiClient.get("/authors");
        return response.data;
    } catch (error) {
        console.error("Error fetching authors:", error);
        throw error;
    }
};

//  Search books by author name
export const searchBooksByAuthor = async (authorName) => {
    try {
        const response = await apiClient.get(`/authors/books?name=${authorName}`);
        return response.data;
    } catch (error) {
        console.error("Error searching books by author:", error);
        throw error;
    }
};

//  Search author by book title
export const searchAuthorByBook = async (bookTitle) => {
    try {
        const response = await apiClient.get(`/books/author?title=${bookTitle}`);
        return response.data;
    } catch (error) {
        console.error("Error searching author by book:", error);
        throw error;
    }
};

//  Add a new book (Requires existing author ID)
export const addBook = async (book, authorId) => {
    try {
        const response = await apiClient.post("/books", { book, authorId });
        return response.data;
    } catch (error) {
        console.error("Error adding book:", error);
        throw error;
    }
};

//  Add a new author
export const addAuthor = async (author) => {
    try {
        const response = await apiClient.post("/authors", author);
        return response.data;
    } catch (error) {
        console.error("Error adding author:", error);
        throw error;
    }
};

export const updateBook = async (bookId, updatedBook) => {
    try {
        console.log("📡 Sending PUT Request: Book ID", bookId, "Data:", updatedBook);

        const response = await axios.put(
            `http://localhost:8080/api/books/${bookId}`,
            updatedBook, // ✅ Send as an object (no JSON.stringify)
            {
                headers: {
                    "Content-Type": "application/json", // ✅ Ensure proper headers
                    "Accept": "application/json"
                }
            }
        );

        console.log("✅ Update Successful:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ API Error:", error.response?.data || error.message);
        throw error;
    }
};






// 🗑 Delete a Book
export const deleteBook = async (bookId) => {
    try {
        await apiClient.delete(`/books/${bookId}`);
    } catch (error) {
        console.error("Error deleting book:", error);
        throw error;
    }
};

// 🆕 Update an Author
export const updateAuthor = async (authorId, updatedAuthor) => {
    try {
        const response = await apiClient.put(`/authors/${authorId}`, updatedAuthor);
        return response.data;
    } catch (error) {
        console.error("Error updating author:", error);
        throw error;
    }
};
