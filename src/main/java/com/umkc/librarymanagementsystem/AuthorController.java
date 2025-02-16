package com.umkc.librarymanagementsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/authors")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthorController {
    @Autowired
    private AuthorService authorService;

    @Autowired
    private AuthorRepository authorRepository;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping("/books")
    public List<Book> getBooksByAuthor(@RequestParam String name) {
        return authorRepository.findBooksByAuthorName(name);
    }

        @PostMapping
    public ResponseEntity<Author> addAuthor(@RequestBody Author author) {
        Author savedAuthor = authorService.addAuthor(author);
        return new ResponseEntity<>(savedAuthor, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Author> getAllAuthors() {
        return authorService.getAllAuthors();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Author> getAuthorById(@PathVariable long id) {
        Author author = authorService.getAuthorById(id);
        return ResponseEntity.ok(author);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAuthor(@PathVariable long id) {
        authorService.deleteAuthor(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Author> updateAuthor(@PathVariable long id, @RequestBody Author author) {
        Optional<Author> updatedAuthor = authorService.updateAuthor(id, author);

        return updatedAuthor
                .map(ResponseEntity::ok) // ✅ Returns ResponseEntity<Author>
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build()); // ✅ Correct return type
    }

}

