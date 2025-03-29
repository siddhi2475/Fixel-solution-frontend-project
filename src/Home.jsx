import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';
import './css/style.css';
const Home = () => {
  const [search, setsearch] = useState(""); //usestate to store search value
  const [availability, setavailability]= useState("All"); //usestate to store availability value
  const [sort, setsort] = useState("title"); //usestate to store sorting criteria value
  const books = Books; //variable for Books array
  console.log(books)
  // below is the function to filter books out
  //checking availabity and searching according to search value (if no search value , include the book in result)
  const filteredBooks = Books
  .filter((book)=> 
    (availability === "All" || book.availability=== availability) && (search.trim() === "" || book.title.toLowerCase().includes(search.toLowerCase())) || (book.author.toLowerCase().includes(search.toLowerCase()))).sort((a,b)=>{
      if (sort=== "title") return a.title.localeCompare(b.title); //sorting based on selected criteria
      if (sort=== "author") return a.author.localeCompare(b.author);
      if (sort=== "borrowCount") return b.borrowCount - a.borrowCount;
      return 0;
    });
  return (
    <>
    <div className='maincontainer'>
      <h1>LIBRARY CATALOG</h1> <br />
      {/* taing input for searching */}
      <input type="text" className='search-bar' placeholder='search by title or author...' onChange={(e)=> setsearch(e.target.value)}/>
       <select onChange={(e) => setavailability(e.target.value)}> {/*changing value of availability accordinf to chosen criteria */}
        <option value="All">All</option>
        <option value="Available">Available</option>
        <option value="Borrowed">Borrowed</option>
      </select>
      <select onChange={(e) => setsort(e.target.value)}>  {/*changing value of sort accordinf to chosen criteria */}
        <option value="title">Sort by Title</option>
        <option value="author">Sort by Author</option>
        <option value="borrowCount">Sort by Borrow Count</option>
      </select>
      {/* table to display the books */}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book)=>( //displaying the filtered books (using map ffunction to get a new array of filtered books)
            <tr key={book.id}> {/*key (i.e. id) is the unique identifier of each book in the array so they can be accessed easily */}
              <td><Link to={`/book/${book.id}`} className='link'> {book.title}</Link></td> {/*link to book detail page */}
              <td>{book.author}</td>
              <td>{book.genre}</td> 
              <td>{book.availability}</td>
            </tr>))}
        </tbody>
      </table>
      <br />
      <br />
      {/* button to see borrow history */}
      <Link to="/borrowHistory" className="button">View Borrow History</Link>
    </div>
    </>
  );
};

export default Home
