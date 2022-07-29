import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../styles/BookDetails.css"


function BookDetails() {

    const[image,setImage] = useState("")
    const[author,setAuthor] = useState("")
    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")
    const[review,setReview] = useState("")
    const[price,setPrice] = useState("")

    let {id} = useParams()

    // let id = 4


    const detailData = () => {
        fetch(`http://localhost:5004/Books/${id}`)
        .then((r) => r.json())
        .then((data) => {

            setImage(data.imgUrl)
            setAuthor(data.author)
            setDescription(data.description)
            setPrice(data.price)
            setReview(data.review)
            setTitle(data.title)
        })
        
    }
    // console.log(image)

    useEffect(function(){
        detailData()
    },[id])
    
  return (
    <div>
           <div className='flex'>
              <div className='left'>
                <img style={{width:300, height:500}} src={image} alt=""/>
              </div>
                <div className='right'>
                   <br/>
                   <div className='negative title'><i style={{color:"black"}}>TITLE:</i> {title}</div>
                   <br/>
                   <br/>
                   <div className='negative author'><i style={{color:"black"}}>AUTHOR:</i> {author}</div>
                   <br/>
                   <br/>
                   <div className='negative price'><i style={{color:"black"}}>PRICE:</i> {price}</div> 
                   <br/>
                   <br/>
                   <div className='review'><i style={{color:"black"}}>REVIEW:</i> {review}</div>
                   <br/>
                   <br/>
                   <br/>
                   <h3 style={{color:"gray"}}><i>SYNOPSIS</i></h3>
                   <p className='negative description' >{description}</p>
                </div>
           </div>
    </div>
  )
}

export default BookDetails