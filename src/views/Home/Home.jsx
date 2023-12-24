import React from "react";
import StylesHome from "./Home.module.css";
import FotoAnthony from "../../assets/images/FotoAnthony.png";
import Animacion from "../../components/Animacion/Animacion";
import CVMaximilianoHerrera from "../../assets/curriculum/CVMaximilianoHerrera.pdf";
const Home = () => {
  return (
    
    <section className={StylesHome.divHome}>
        <article className={StylesHome.full}>
          <h2>Hi, my name is</h2>
          <h1>Anthony Maximiliano</h1>
          <p>Im currently actively searching for work, always
            open to new challenges and constantly learning.
            I really like to nourish myself with new knowledge,
            i am a proactive person, if i find something that is difficult
            to solve, i will not stop investigating untili solve it.
          </p>
          <h1>Full Stack Developer</h1>
         
        </article>
        <div className={StylesHome.buttons}>
          <div className={StylesHome.img}>
          <img src={FotoAnthony} alt="FotoAnthony" title="FotoAnthony"/>
           </div>
            <div className={StylesHome.btn}>
              <a href={CVMaximilianoHerrera} download="CurriculumVitae">CV</a>
            </div>

        </div>
        <Animacion/>
    </section>
  );
};

export default Home;

