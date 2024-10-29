    package com.umkc.librarymanagementsystem;

    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.data.domain.Page;
    import org.springframework.data.domain.PageRequest;
    import org.springframework.data.domain.Pageable;
    import org.springframework.data.domain.Sort;
    import org.springframework.stereotype.Service;

    import java.util.List;

    @Service
    public class BookService {
        @Autowired
        private final BookRepository bookRepository;

        public BookService(BookRepository bookRepository) {
            this.bookRepository = bookRepository;
        }


        public List<Book> getAllBooks() {
            return bookRepository.findAll();
        }

        public Book getBookById(long id) {
            return bookRepository.findById(id).orElse(null);
        }

        public Book addBook(Book book) {
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
