package com.umkc.librarymanagementsystem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findByTitleAndIsbn(String title, String isbn);

    // 🔹 Corrected query to fetch author by book title
    @Query("SELECT b.author FROM Book b WHERE LOWER(b.title) = LOWER(:title)")
    Optional<Author> findAuthorByBookTitle(@Param("title") String title);
}
