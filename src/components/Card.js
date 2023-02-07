import React from 'react'
import "../styles/Card.css"
import { Link } from "react-router-dom"
import { BsInfo } from "react-icons/bs"
import { FaRegComments } from "react-icons/fa"

function Card({title,author,image,alt,id}) {
  return (
    <div className='cardContainer'>
       <div className='card'>
           <img style={{width:200, height:300}}src={image} alt={alt} />
           <h3 className='titleHeaders'>{title}</h3>
           <p> by <i className='authorCard'>{author}</i></p>
           <div className='info'>
            <Link to={`/BookDetails/${id}`}  className="infoBtn"><BsInfo size={15}/></Link>
            <FaRegComments className='commentsBtn' size={15}/>
           </div>
       </div>
    </div>
  )
}

export default Card