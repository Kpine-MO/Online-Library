import React, { useEffect, useState } from 'react'
import CommentCard from './CommentCard'
import "../styles/Comments.css"
import DonationForm from './DonationForm'

function Donations() {

  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch("http://localhost:5004/comments")
    .then((res) => res.json())
    .then((data) => setComments(data))
  },[])

  function handleAddComment(newUpdate){
        setComments([...comments,newUpdate])
  }

  function handleDeleteComment(deletedComment){
    const updatedItems = comments.filter((item) => item.id !== deletedComment.id);
    setComments(updatedItems);
  }



  return (
    <div className='comments'>
       <DonationForm onAddComment={handleAddComment}/>
      {/* <div className='cmleft'>
            <form className="comment-form">
               <input className='commentInput' name="title" type="text" placeholder="title" />
               <input className='commentInput' name="name" type="text"  placeholder="name" />
               <input className='commentInput' name="review" type="text"  placeholder="rate out of 5" />
               <textarea className='commentInput'  name="content" type="text"   placeholder="Write your comment here..." rows={10} />
               <input className='commentInput-btn' type="submit" value="Share your masterpiece" />
            </form>
      </div> */}
      
      <div className='cmright'>
       <div className='cmflex'>
           <h4 className='header'>COMMUNITY REVIEWS</h4>
           <p className='cmflexsmall'>showing { comments.length } reviews</p> 
       </div><hr/>

        {
          comments.map((item,id) => {
          return <CommentCard
          key={id}
          id={item.id}
          name={item.name}
          title={ item.title} 
          review={item.review}
          content={item.content}
          liky={item.likes}
          item={item}
          onDeleteComment={handleDeleteComment}
          />
          })
        }
      </div>

    </div>
  )
}

export default Donations