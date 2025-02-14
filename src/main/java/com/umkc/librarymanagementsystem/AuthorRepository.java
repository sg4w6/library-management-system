package com.umkc.librarymanagementsystem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AuthorRepository extends JpaRepository<Author, Long> {

    @Query("SELECT b FROM Book b WHERE b.author.name LIKE %:authorName%")
    List<Book> findBooksByAuthorName(@Param("authorName") String authorName);
}

