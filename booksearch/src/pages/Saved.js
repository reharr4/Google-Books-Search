import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import {List, ListItem} from "../components/List";
import DeleteBtn from "../components/DeleteBtn"

class Saved extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          {/* <Col size="md-12"> */}
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>
                My Books
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}>
                <Link to={"/books/" + book._id}>
                  <strong>
                    {book.title} by {book.author}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => this.deleteBook(book._id)} />
              </ListItem>
            ))}
          </List>
          <Col size="md-10 md-offset-1">
            <article>
              <p>
                {this.state.book.synopsis}
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    );
  }
};
export default Saved;