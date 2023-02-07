import React, {useEffect, useState} from 'react'
import Card from './Card'
import "../styles/Library.css"
import {BsSearch} from 'react-icons/bs';

function Library() {
  
    const[allBooks, setAllBooks] = useState([])
    const[searchQuery, setSearchQuery] = useState("")
    const[show, setShow] = useState(false)

    function handleSearchArea(){
      setShow((show) => !show)
    }

    useEffect(() => {
        fetch("http://localhost:5004/Books")
        .then((res) => res.json())
        .then((data)=> setAllBooks(data))
    },[])


  return (
    <div className='Lib'>
        <div className='filter'>
          
        </div>
        <div className='search'>
          {show ?  <input type="text" placeholder="SEARCH AREA..." onChange={event => setSearchQuery(event.target.value)} value={searchQuery} className="show"/> : null}
           <div className='zoomGlass' onClick={handleSearchArea}>
             <BsSearch size={20}/>
           </div>
        </div>
        {
          allBooks.filter((result) =>  {
            if(setSearchQuery===""){
              return result
            } else if(result.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())){
              return result
            }
          }).map((book,i) => {
            return <Card 
            key={i}
            title={book.title}
            author={book.author}
            image={book.imgUrl}
            alt={book.title}
            id={book.id}
            />
          })
        }
    </div>
  )
}

export default Library