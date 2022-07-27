import React, {useEffect, useState} from 'react'
import Card from './Card'
import "../styles/Library.css"
import Search from './Search'

function Library() {
  
    const[allBooks, setAllBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:5004/Books")
        .then((res) => res.json())
        .then((data)=> setAllBooks(data))
    },[])


  return (
    <div className='Lib'>
        {/* {allBooks} */}
         <Search/>
        {
          allBooks.map((book) => {
            return <Card 
            title={book.title}
            author={book.author}
            image={book.imgUrl}
            alt={book.title}
            />
          })
        }
    </div>
  )
}

export default Library