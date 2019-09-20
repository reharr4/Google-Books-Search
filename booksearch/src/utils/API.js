import axios from "axios";
// const express = require("express");


// const router = express.Router();

// Google Books API request
// const BOOKURL = "https://www.googleapis.com/books/v1/volumes?q=" //+ search + "&key=AIzaSyB-70C5sCyrBEYvB66F8aOquCLJddMX9h4"
// router.get("/api/search/:book", (req,res)=>{
// axios.get(BOOKURL + req.params.book).then(results =>{
//   let books = results.data.items.map(ele => {
//     let {title, description, authors} = ele.volumeInfo;

//     return {
//       title: title,
//       description: description,
//       authors: authors,
//       image: Element.volumeInfo.imageLinks.smallThumbnail,
//       link: Element.volumeInfo.infoLink
//     };
//   });
//   res.json(books);
// }).catch(err => {
//   console.log(err);
//   res.status(404).end();
// });
// });



export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
