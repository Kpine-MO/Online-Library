import React from 'react'
import {Link} from "react-router-dom"
import DehazeIcon from '@mui/icons-material/Dehaze';
import Tippy from '@tippyjs/react';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CommentIcon from '@mui/icons-material/Comment';
import 'tippy.js/dist/tippy.css'; 
import "../styles/Nav.css"

function Nav() {

  let iconStyles = { color: "#0b6d88", fontSize: "1.5em"};

  return (
    <div className='navbar'>
       <div className='leftnav'>
           {/* <img src={} /> */}
       </div>
       <div className='rightnav'>
       <Tippy content={<span style={{color: "grey"}}>home</span>}>
            <Link to="/"><HomeIcon className='icon home' style={iconStyles}/></Link>
         </Tippy>
         <Tippy content={<span style={{color: "grey"}}>library</span>}>
            <Link to="/library"><MenuBookIcon className='icon library' style={iconStyles}/></Link>
         </Tippy>
         <Tippy content={<span style={{color: "grey"}}>comment</span>}>
            <Link to="/donations"><CommentIcon className='icon comment' style={iconStyles}/></Link>
         </Tippy>
         <button>
            <DehazeIcon/>
         </button>
       </div>
    </div>
  )
}

export default Nav