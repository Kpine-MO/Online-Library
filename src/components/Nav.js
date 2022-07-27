import React from 'react'
import {Link} from "react-router-dom"
import DehazeIcon from '@mui/icons-material/Dehaze';
import "../styles/Nav.css"

function Nav() {
  return (
    <div className='navbar'>
       <div className='leftnav'>
           {/* <img src={} /> */}
       </div>
       <div className='rightnav'>
         <Link to="/">Home</Link>
         <Link to="/library">Library</Link>
         <Link to="/donations">Donations</Link>
         <button>
            <DehazeIcon/>
         </button>
       </div>
    </div>
  )
}

export default Nav