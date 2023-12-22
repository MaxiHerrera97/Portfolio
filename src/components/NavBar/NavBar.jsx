import React from "react";
import StyleNavBar from "./NavBar.module.css"
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


const NavBar = () =>{
  
    return (
      
       <header className={StyleNavBar.divHeader}>
        
        <span className={StyleNavBar.logo}>ANTHONY</span>

        <nav className={StyleNavBar.nav}>
        <Link to="/">Home</Link>
        <Link to="/proyects">Proyects</Link>
        </nav>
        
         <Footer/>
       </header>
    
    )
    
}

export default NavBar;