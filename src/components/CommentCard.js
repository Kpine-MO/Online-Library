import React, { useState } from 'react'

function CommentCard({ name,review,content,liky,id,onDeleteComment,item}) {

    let num = liky

    // console.log(num)

    const [like,setLike] = useState(num)

    function addLikes(){
        setLike(like + 1)
    }
    // console.log(like)

    function deleteComment(){
        fetch(`http://localhost:5004/comments/${id}`,{
            method: "DELETE"
          })
          .then((res) => res.json())
          .then(() => onDeleteComment(item))
    }

  return (
         <div className='cmdisplay'>
            <div className='cmflex'>
                <h4>{name} <b>rated it</b> <i>{review}</i></h4>
                <button onClick={deleteComment} className='xbtn'>X</button>
            </div>
            <p className='theme'>{content}</p>
            <span> {like} </span> <button style={{margin:10}} onClick={addLikes}className="likeBtn">likes</button>
        </div>
  )
}

export default CommentCard