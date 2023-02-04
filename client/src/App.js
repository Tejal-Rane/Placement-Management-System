import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch,Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import  Navbar  from "./Navbar";
import Placement from "./Placement";
import { Createprofile } from "./Createprofile";
import Viewprofile from "./Viewprofile";
import Listalluser from "./Listalluser";
import Viewplacement from "./Viewplacement";

const App=()=> {
  return (
    <>
  
    
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/placement" component={Placement}/>
    <Route exact path="/profile" component={Createprofile}/>
    <Route exact path="/vprofile/:id" component={Viewprofile}/>
    <Route exact path="/vplacement/:id" component={Viewplacement}/>
    <Route exact path="edit-user/vprofile/:id" component={Createprofile}/>
    <Route exact path="/listall" component={Listalluser}/>
    <Redirect to="/"/>
    </Switch>
   
    </>
    );
}

export default App;
