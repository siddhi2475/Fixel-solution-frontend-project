import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Books from './Books';
import './css/style.css';
const Bookdetails = () => {
  const {id}= useParams(); //will access the id of the book from the route path
  const book = Books.find((b)=> b.id === parseInt(id)); //find the book from Books array which matches the id from the route

  if(!book) return <h2>Book not found</h2>;
  return (
    <div className='bd'>
      {/* display name and image of the book */}
      <h1 >{book.title}</h1>
      <div className='flexed'>
      <img src={book.image} alt="no image" />
      {/* displayinf details of the book found */}
      <div >
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>Borrow Count:</strong> {book.borrowCount}</p>
      <p><strong>Availability:</strong> {book.availability}</p>
      <p>{book.description}</p>
      </div>
      </div>
      {/* button to go back to home */}
      <Link to= {`/home`} className='homebutton'> ⬅️ Go back to Home</Link>
      <br />
    </div>
  )
}

export default Bookdetails
