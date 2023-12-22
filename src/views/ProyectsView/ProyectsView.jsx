import StylesProyectsView from "./ProyectsView.module.css";
import PiCountries from "../../assets/images/PiCountries.jpg";
import GithubIcon from "../../assets/images/GithubIcon.png";
import Html from "../../assets/images/Html.png";
import Css from "../../assets/images/Css.png";
import Js from "../../assets/images/Js.png";
import React from "../../assets/images/React.png";
import Vite from "../../assets/images/Vite.png";
import Redux from "../../assets/images/Redux.png";
import NodeJs from "../../assets/images/NodeJs.png";
import PostgreSql from "../../assets/images/PostgreSql.png";
import Sequelize from "../../assets/images/Sequelize.png";
//import ComingSoon from "../../assets/images/ComingSoon.jpg";
import { Link } from "react-router-dom";

const ProyectsView = () =>{

   const cards = [
    {
      image:[PiCountries],
      name: 'Country Search',
      descrption: `This project brings countries from all over the world, 
      from a database and an external API, 
      it has their details as well as activities, 
      the coolest thing is that you can also create activities, 
      edit them and even delete them.`,
      tecno:[Html, Css, Js, React, Vite, Redux, NodeJs, PostgreSql, Sequelize],
      url:'https://github.com/MaxiHerrera97/PI-Countries/tree/master',
    },
    /*{
      image:[ComingSoon],
      name: 'Cooming Soon',
      descrption: `This project brings countries from all over the world, 
      from a database and an external API, 
      it has their details as well as activities, 
      the coolest thing is that you can also create activities, 
      edit them and even delete them.`,
      tecno:[Html, Css, Js, React, Vite, Redux, NodeJs, PostgreSql, Sequelize],
      url:'https://github.com/MaxiHerrera97/PI-Countries/tree/master',
    },*/
   ]

    return (
      <section className={StylesProyectsView.proyects}>
        <h2>PROYECTS</h2>
        <div className={StylesProyectsView.cards}>
             {
              cards.map((card, index)=>{
                return(
                  <div key={index} className={StylesProyectsView.card}>
                    <div className={StylesProyectsView.img}>
                       <img width="100%" height="200px" src={card.image} alt=""/>
                    </div>

                    <h3>{card.name}</h3>

                    <p>{card.descrption}</p>

                    <div className={StylesProyectsView.tecno}>
                       {card.tecno && card.tecno.length > 0 ? (
                        card.tecno.map((tech, techIndex) => (
                      <img key={techIndex} width="20px" src={tech} alt="" />
                    ))
                    ) : (
                      <p>No technologies specified</p>
                    )}
                    </div>

                    <div className={StylesProyectsView.git}>
                      <Link to={card.url} target="_blank">
                      <img width="30px" src={GithubIcon} alt="GithubIcon" title="GithubIcon"/>
                      </Link>
                    </div>
                  </div>
                )
              })
             }
        </div>
      </section>
    )
}

export default ProyectsView;