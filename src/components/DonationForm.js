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

// function DonationForm() {

//   const [author, setAuthor] = useState("");
//   const [title, setTitle] = useState("");
//   const [review, setReview] = useState("");
//   const [content, setContent] = useState("");

  // function handleNameChange(event){
  //   setName(event.target.value)
  // }

  // function handleTitleChange(event){
  //   setTitle(event.target.value)
  // }

  // function handleReviewChange(event){
  //   setReview(event.target.value)
  // }

  // function handleContentChange(event){
  //   setContent(event.target.value)
  //}

// function handleSubmit(e) {
//   e.preventDefault();
//   const itemData = {
//     title: title,
//     author: author,
//     review: review,
//     content: content
//   };
//   console.log(itemData);

//   fetch("http://localhost:5004/comments", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(itemData),
//   })
//     .then((r) => r.json())
//     .then((newItem) => console.log(newItem));
// }

// const[commentData, setCommentData] = useState({
//   title: "",
//   name: "",
//   review: "",
//   content: ""
// })


  // function handleChange(event){
  //      setCommentData({...commentData,[event.target.name]:event.target.value})
  // }
 

  // function handleSubmit(e){
  //    e.preventDefault();
  //    onSubmission(commentData)
  //     setCommentData({
  //       title: "",
  //       name: "",
  //       review: "",
  //       content: ""
  //      })

  //     console.log(commentData)
   
    //  fetch("http://localhost:5004/comments",{
    //   method: "POST",
    //   header: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(commentData),
    // })
     
    // .then((r) => r.json())
    // .then((newData) => console.log(newData));
  
