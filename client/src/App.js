import React, { useEffect } from "react"; 
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/screens/Home";
import Profile from "./components/screens/Profile"
import Signin from "./components/screens/Signin"
import Signup from "./components/screens/Signup";
import CreatePost from "./components/screens/Createpost";

function App() {
 
  useEffect(()=>{
    const user = localStorage.getItem("jwt")
    if (user) {
      if (window.location.pathname !== "/") {
        window.location.href = "/";
      }
    } else {
      if (window.location.pathname !== "/signin") {
        window.location.href = "/signin";
      }
    }
  },[])


  return (
    <>
  <BrowserRouter>
  <Navbar />
  <Routes >
  
      <Route exact path="/" element={<Home />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/create" element={<CreatePost/>} />
      </Routes>
  
  </BrowserRouter>
    
    </>
  );
}

export default App;
