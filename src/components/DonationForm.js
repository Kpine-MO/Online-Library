import React, { useState } from 'react'

function DonationForm({onAddComment}) {

  const[title,setTitle] =useState("")
  const[name,setName] =useState("")
  const[review,setReview] =useState("")
  const[content,setContent] =useState("")


  const handleSubmit = (event) => {
    event.preventDefault()

    const comments = {title,review,name,content}


    fetch("http://localhost:5004/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(comments),
    }).then((r) => r.json(comments)).then((newComment) => onAddComment(newComment))

    setContent("")
    setName("")
    setReview("")
    setTitle("")
  }

    


  return (
    <div className='cmleft'>
        <form className="comment-form" onSubmit={handleSubmit} >
           <input className='commentInput'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title" type="text" 
            required placeholder="title" />
           <input className='commentInput'
            value={review}
            onChange={(e) => setReview(e.target.value)}
            name="review" type="text" 
            required  placeholder="rate out of 5" />
           <input className='commentInput'  
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name" type="text" 
            required placeholder="name" />
           <textarea className='commentInput'  
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content" type="text" 
            required  placeholder="Write your comment here..." rows={10} />
           <input className='commentInput-btn' type="submit"  value="Share your masterpiece" />
        </form>
    </div>
)


}

  

export default DonationForm


