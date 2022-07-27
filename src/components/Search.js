import React from 'react'
import "../styles/Search.css"
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

function Search() {
  return (
    <div className='search'>
       <input type="text" placeholder="SEARCH AREA..."/>
       <ZoomOutIcon/>
    </div>
  )
}

export default Search