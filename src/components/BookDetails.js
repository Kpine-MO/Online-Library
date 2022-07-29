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
    {}
  )
}

export default BookDetails