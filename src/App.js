import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import React from "react";
import Library from "./components/Library";
import Donations from "./components/Donations";


function App() {
  return (
    <div className="App">
      <Router>
         <Nav/>

         <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/library' element={<Library/>}/>
         <Route exact path='/donations' element={<Donations/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
