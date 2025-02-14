package com.umkc.librarymanagementsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private final BookRepository bookRepository;

    @Autowired
    private final AuthorRepository authorRepository; // Add AuthorRepository

    public BookService(BookRepository bookRepository, AuthorRepository authorRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(long id) {
        return bookRepository.findById(id).orElse(null);
    }

    // Modified: Ensure author exists & prevent duplicate books
    public Book addBook(Book book, Long authorId) {
        // Prevent duplicate books
        Optional<Book> existingBook = bookRepository.findByTitleAndIsbn(book.getTitle(), book.getIsbn());
        if (existingBook.isPresent()) {
            throw new RuntimeException("Book already exists!");
        }

        // Check if the author exists
        Optional<Author> author = authorRepository.findById(authorId);
        if (!author.isPresent()) {
            throw new RuntimeException("Author not found!");
        }

        // Link the book to the author
        book.setAuthor(author.get());
        return bookRepository.save(book);
    }

    public Page<Book> getBooksPaginatedAndSorted(int page, int size, String sortBy) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy).ascending());
        return bookRepository.findAll(pageable);
    }

    public Book updateBook(long id, Book book) {
        Book bookToUpdate = getBookById(id);
        bookToUpdate.setAuthor(book.getAuthor());
        bookToUpdate.setTitle(book.getTitle());
        bookToUpdate.setIsbn(book.getIsbn());
        return bookRepository.save(bookToUpdate);
    }

    public void deleteBook(long id) {
        bookRepository.deleteById(id);
    }
}
