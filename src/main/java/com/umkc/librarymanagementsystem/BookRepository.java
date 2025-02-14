package com.umkc.librarymanagementsystem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {

    @Query("SELECT b.author FROM Book b WHERE b.title LIKE %:bookTitle%")
    Optional<Author> findAuthorByBookTitle(@Param("bookTitle") String bookTitle);
}

