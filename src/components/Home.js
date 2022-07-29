import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Home.css"
function Home() {
  return (
    <div className='landingPage'>
       <h1>TOP BOOKS BY TOP AUTHORS <br/> <strong>&</strong> <br/> <b>better prices</b></h1>
       <Link  to="/library"><button  className='homebtn colored'>Library</button></Link>
       <Link  to="/donations "><button className='homebtn notColored'>Comments</button></Link>
    </div>
  )
}

export default Home