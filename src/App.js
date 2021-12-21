import React,{useState} from "react";
import { Route } from "react-router-dom";
import "./App.css";

import signUp from "./componetes/SignUp"
import Login from './componetes/Login'
import Navbar from './componetes/Navbar'
import Home from './componetes/Home'
import Store from './componetes/Store'
import Fav from './componetes/Fav'


function App() {
  const [token, setToken] = useState("") 
 
  return (
  <div className="App">

<Navbar token={token} />
<Route exact path="/signUp" component={signUp} /> 
<Route exact path="/home" component={Home} /> 
<Route exact path="/Login" render={()=>{return <Login changeToken={setToken} />} }/> 
<Route exact path="/store" component={Store} />
<Route exact path="/fav" component={Fav} />
{token}

</div>


  );
}

export default App;
