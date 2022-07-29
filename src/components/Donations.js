import React, { useEffect, useState } from 'react'
import CommentCard from './CommentCard'
import "../styles/Comments.css"
import DonationForm from './DonationForm'
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

function Donations() {

  const [comments, setComments] = useState([])

  const[searchQuery, setSearchQuery] = useState("")
 

  // function handleSearchArea(){
  //   setShow((show) => !show)
  // }

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
    <div className='static'>
        <div className='cmright '>
         <div className='search'>
             <input type="text" placeholder="Search by commentee..." onChange={event => setSearchQuery(event.target.value)} value={searchQuery} className="show"/>
             <div className='zoomGlass'>
               <ZoomOutIcon/>
             </div>
          </div> 
           <div className='cmflex'>
               <h4 className='header'>COMMUNITY REVIEWS</h4>
               <p className='cmflexsmall'>showing { comments.length } reviews</p> 
           </div><hr/>

        {
          comments.filter((result) =>  {
            if(setSearchQuery===""){
              return result
            } else if(result.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())){
              return result
            }
          }).map((item,id) => {
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

    </div>
  )
}

export default Donations