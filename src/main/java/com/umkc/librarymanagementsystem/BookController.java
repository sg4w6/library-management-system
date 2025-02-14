package com.umkc.librarymanagementsystem;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
    private final BookService bookService;

    private final BookRepository bookRepository;

    public BookController(BookService bookService, BookRepository bookRepository) {
        this.bookService = bookService;
        this.bookRepository = bookRepository;
    }

    /**
     * ➕ Add a New Book (Requires a valid Author ID)
     */
    @PostMapping
    public ResponseEntity<?> addBook(@RequestBody BookRequest bookRequest) {
        try {
            if (bookRequest.getBook() == null || bookRequest.getAuthorId() == null) {
                return new ResponseEntity<>("Invalid request: Book and Author ID are required!", HttpStatus.BAD_REQUEST);
            }

            Book savedBook = bookService.addBook(bookRequest.getBook(), bookRequest.getAuthorId());
            return new ResponseEntity<>(savedBook, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>("Error adding book: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.getAllBooks();
        return ResponseEntity.ok(books);
    }



    /**
     * ✅ Make `BookRequest` Static (Fixes the Jackson error)
     */
    public static class BookRequest {
        private Book book;
        private Long authorId;

        // Getters and Setters (Required for JSON Parsing)
        public Book getBook() { return book; }
        public void setBook(Book book) { this.book = book; }

        public Long getAuthorId() { return authorId; }
        public void setAuthorId(Long authorId) { this.authorId = authorId; }
    }

    @GetMapping("/author")
    public ResponseEntity<?> getAuthorByBook(@RequestParam String title) {
        Optional<Author> author = bookRepository.findAuthorByBookTitle(title);

        if (author.isPresent()) {
            return ResponseEntity.ok(author.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Error: No author found for the book '" + title + "'");
        }
    }

}
