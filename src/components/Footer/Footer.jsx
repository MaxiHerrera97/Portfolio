import React from "react";
import StylesFooter from "./Footer.module.css";
import { Link } from "react-router-dom";
import GithubIcon from "../../assets/images/GithubIcon.png";
import LinkedinIcon from "../../assets/images/LinkedinIcon.png";

const Footer = () =>{
    return (
        <div className={StylesFooter.divFoot}>
            <Link to="https://github.com/MaxiHerrera97" target="_blank">
                
                <img className={StylesFooter.img} src={GithubIcon} alt="GithubIcon" title="GithubIcon"/>
               
            </Link>
            <Link to="https://www.linkedin.com/in/maximiliano-gabriel-herrera-44260524b/" target="_blank">
                
                <img className={StylesFooter.img} src={LinkedinIcon} alt="LinkedinIcon" title="LinkedinIcon"/>
                
            </Link>
           
        </div>
    )
}

export default Footer;