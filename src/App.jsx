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
    <div class="bubbles">
        <span styles="-i:11"></span>
        <span styles="-i:12"></span>
        <span styles="-i:24"></span>
        <span styles="-i:10"></span>
        <span styles="-i:14"></span>
        <span styles="-i:23"></span>
        <span styles="-i:18"></span>
        <span styles="-i:16"></span>
        <span styles="-i:19"></span>
        <span styles="-i:20"></span>
        <span styles="-i:22"></span>
        <span styles="-i:25"></span>
        <span styles="-i:18"></span>
        <span styles="-i:21"></span>
        <span styles="-i:15"></span>
        <span styles="-i:13"></span>
        <span styles="-i:26"></span>
        <span styles="-i:17"></span>
        <span styles="-i:13"></span>
        <span styles="-i:28"></span>
        </div>
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
