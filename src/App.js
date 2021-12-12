import React from "react";
import "./App.css";
import { Route} from "react-router-dom";

import Store from './Components/Store'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import SignUp from './Components/Signup'
import Fav from './Components/Fav'

function App() {



  return (
    <div className="App">
      <div>

      <Navbar />
      <Route exact path="/Store" component={Store} /> 
      <Route exact path="/Home" component={Home} /> 
      <Route exact path="/Login" component={Login} /> 
      <Route exact path="/Signup" component={SignUp} /> 
      <Route exact path="/Fav" component={Fav} /> 




      </div>
    <Footer />
    </div>
  );
}

export default App;
