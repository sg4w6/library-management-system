# 📚 Library Management System

A **full-stack** Library Management System built using **Spring Boot (Backend)** and **React.js (Frontend)**. The system allows users to **add, edit, delete, and search books and authors**.

## 🛠 Technologies Used

### 🔹 Backend (Spring Boot)
- **Spring Boot** (Java)
- **Spring Data JPA** (for database interactions)
- **MySQL** (Database)
- **Hibernate** (ORM)
- **Spring Boot REST API**
- **CORS Configuration**
- **Maven** (Dependency Management)

### 🔹 Frontend (React.js)
- **React.js** (JavaScript)
- **Axios** (for API calls)
- **React Router** (for navigation)
- **Tailwind CSS** (for styling)

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/sg4w6/library-management-system.git
```

---

## 🏗 Backend Setup (Spring Boot)

### 2️⃣ Configure Database
Modify `src/main/resources/application.properties` to match your MySQL setup:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/library_db
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 3️⃣ Run the Spring Boot Server
```sh
./mvnw spring-boot:run
```
The backend will start at **http://localhost:8080**

---

## 🎨 Frontend Setup (React.js)

### 4️⃣ Install Dependencies
```sh
cd library-management-frontend
npm install
```

### 5️⃣ Start React App
```sh
npm start
```
The frontend will run at **http://localhost:3000**

---

## 📌 API Endpoints

### 📘 Book APIs
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/books` | Get all books |
| GET | `/api/books/{id}` | Get book by ID |
| POST | `/api/books` | Add a new book |
| PUT | `/api/books/{id}` | Update book details |
| DELETE | `/api/books/{id}` | Delete a book |

### ✍️ Author APIs
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/authors` | Get all authors |
| GET | `/api/authors/{id}` | Get author by ID |
| POST | `/api/authors` | Add a new author |
| PUT | `/api/authors/{id}` | Update author details |
| DELETE | `/api/authors/{id}` | Delete an author |

---

## 🛠 Features Implemented
✅ Add, update, delete books  
✅ Link books to authors  
✅ Search books by author & search authors by book title  
✅ Error handling for missing books/authors  
✅ User-friendly interface with **React.js + Tailwind CSS**  

---

## 📌 GitHub Repository Structure

```
📂 library-management
 ┣ 📂 .mvn
 ┣ 📂 library-management-frontend (React.js)
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 api
 ┃ ┃ ┃ ┣ api.js
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┣ AuthorForm.js
 ┃ ┃ ┃ ┣ AuthorList.js
 ┃ ┃ ┃ ┣ BookForm.js
 ┃ ┃ ┃ ┣ BookList.js
 ┃ ┃ ┃ ┣ Navbar.js
 ┃ ┃ ┃ ┣ SearchAuthorByBook.js
 ┃ ┃ ┃ ┣ SearchBooksByAuthor.js
 ┃ ┃ ┃ ┣ SearchByAuthor.js
 ┃ ┃ ┃ ┣ SearchByBook.js
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ App.css
 ┃ ┃ ┣ App.js
 ┃ ┃ ┣ App.test.js
 ┃ ┃ ┣ index.css
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ logo.svg
 ┃ ┃ ┣ reportWebVitals.js
 ┃ ┃ ┣ setupTests.js
 ┃ ┣ .gitignore
 ┃ ┣ README.md
 ┃ ┣ package-lock.json
 ┃ ┣ package.json
 ┃ ┣ postcss.config.js
 ┃ ┣ tailwind.config.js
 ┣ 📂 src
 ┃ ┣ 📂 main/java/com/umkc/librarymanagementsystem
 ┃ ┃ ┣ 📂 config
 ┃ ┃ ┣ Author.java
 ┃ ┃ ┣ AuthorController.java
 ┃ ┃ ┣ AuthorRepository.java
 ┃ ┃ ┣ AuthorService.java
 ┃ ┃ ┣ Book.java
 ┃ ┃ ┣ BookController.java
 ┃ ┃ ┣ BookRepository.java
 ┃ ┃ ┣ BookService.java
 ┃ ┃ ┣ LibraryManagementSystemApplication.java
 ┃ ┣ 📂 resources
 ┣ 📂 test/java/com/umkc/librarymanagementsystem
 ┣ .gitattributes
 ┣ .gitignore
 ┣ mvnw
 ┣ mvnw.cmd
 ┣ package-lock.json
 ┣ package.json
 ┣ pom.xml
 ┣ README.md
```

---

## 🚀 Contributing

Want to contribute? 🎉  
Feel free to fork the repo, create a branch, and submit a PR!

---

## 📜 License

MIT License. Open-source project.

---

## 💡 Support

⭐ **If you found this project helpful, please give it a star!**  
