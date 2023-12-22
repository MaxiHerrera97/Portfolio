import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from "./views/Home/Home";
import ContactMe from "./views/ContactMe/ContactMe";
import ProyectsView from "./views/ProyectsView/ProyectsView";
import SkillsView from "./views/SkillsView/SkillsView";
import NavBar from "./components/NavBar/NavBar";





function App() {
  

  return (
    <>
    
      <div class="container">
        <NavBar/>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/contact" Component={ContactMe}/>
          <Route path="/proyects" Component={ProyectsView}/>
          <Route path="/skills" Component={SkillsView}/>
        </Routes>  
        
      </div>
    </>
  );
};

export default App;
