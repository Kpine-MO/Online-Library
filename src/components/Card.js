import React from 'react'
import "../styles/Card.css"
import { Link } from "react-router-dom"

function Card({title,author,image,alt,id}) {
  return (
    <div className='cardContainer'>
       <div className='card' style={{width:300, height:400}}>
           <img style={{width:200, height:300}}src={image} alt={alt} />
           <h3>{title}</h3>
           <p> Author "<i>{author}</i>"</p>
           <Link to={`/BookDetails/${id}`}  className="btn">DETAILS</Link>
       </div>
    </div>
  )
}

export default Card