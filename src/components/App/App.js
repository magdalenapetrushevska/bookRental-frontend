import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router,Routes, Navigate, Route} from 'react-router-dom'
import Categories from '../Categories/categories'
import Books from '../Books/BookList/books';
import BookAdd from '../Books/BookAdd/bookAdd';
import BookRentalService from "../../repository/bookRentalRepository"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      books: [],
      authors: [],
      selectedBook: {}

    }
  }
render(){
  return (
  
      <Router>
     
        <Routes>
          
      {/* <Route path={"/categories"} exact render={() =>
                  <Categories categories={this.state.categories}/>}/> */}
                  
        <Route path='/categories' element={<Categories categories={this.state.categories}/>} />
        
        <Route path={"/books/add"} element={<BookAdd categories={this.state.categories}
                            authors={this.state.authors}
                            onAddBook={this.addBook}/>}/>
              {/* <Route path={"/books/edit/:id"} exact render={() =>
                  <BookEdit categories={this.state.categories}
                               authors={this.state.authors}
                               onEditbook={this.editbBook}
                               book={this.state.selectedBook}/>}/> */}

        <Route path='/books' element={<Books books={this.state.books}
                            onDelete={this.deleteBook}
                            onEdit={this.getBook}/>}/>


        
                  

        <Route path="/" element={<Navigate replace to="/books" />} />
      
      </Routes>
      </Router>
      

  );
}

componentDidMount() {
  this.loadCategories();
  this.loadAuthors();
  this.loadBooks();
}


loadCategories = () => {
  BookRentalService.fetchCategories()
      .then((data) => {
        this.setState({
          categories: data.data
        })
      });
}
loadBooks = () => {
  BookRentalService.fetchBooks()
      .then((data) => {
        this.setState({
          books: data.data
        })
      });
}
loadAuthors = () => {
  BookRentalService.fetchAuthors()
      .then((data) => {
        this.setState({
          authors: data.data
        })
      });
}

deleteBook = (id) => {
  BookRentalService.deleteBook(id)
      .then(() => {
        this.loadBooks();
      });
}

addBook = (name,category, author, availableCopies) => {
  BookRentalService.addBook(name,category, author, availableCopies)
      .then(() => {
        this.loadBooks();
      });
}

getBook = (id) => {
  BookRentalService.getBook(id)
      .then((data) => {
        this.setState({
          selectedBook: data.data
        })
      })
}


  
  








}

export default App;
