import React from 'react'
import "../styles/Card.css"


function Info({title,author,image,alt}) {
  return (
    <div className='cardContainer'>
       <div className='card' style={{width:300, height:400}}>
           <img style={{width:200, height:300}}src={image} alt={alt} />
           <h3>{title}</h3>
           <p>{author}</p>
           
       </div>
    </div>
  )
}

export default Info