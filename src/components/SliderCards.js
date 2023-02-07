import React from 'react'
import "../styles/SliderCard.css"
import { Link } from "react-router-dom"
import { BsInfo } from "react-icons/bs"

function SliderCards({title,author,image,alt,id}) {
  return (
    <div className='SliderCardContainer'>
    <div className='SliderCard'>
        <img className='imageCard' src={image} alt={alt} />
        <h3 className='titleHeadersSlider'>{title}</h3>
        <p> by <i className='authorCardSlider'>{author}</i></p>
        <div className='info'>
         
        </div>
    </div>
 </div>
  )
}

export default SliderCards
