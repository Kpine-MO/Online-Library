import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import '../styles/App.css';
import Nav from "./Nav";
import Home from "./Home";
import React from "react";
import Library from "./Library";
import Donations from "./Donations";
import BookDetails from "./BookDetails";


function App() {
  return (
    <div className="App">
      <Router>
         <Nav/>

         <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/library' element={<Library/>}/>
         <Route exact path='/BookDetails/:id' element={<BookDetails/>}/>
         <Route exact path='/donations' element={<Donations/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
