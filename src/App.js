import React,{useState} from "react";
import { Route } from "react-router-dom";
import "./App.css";

import signUp from "./componetes/SignUp"
import Login from './componetes/Login'
import Navbar from './componetes/Navbar'
import Home from './componetes/Home'
import Product from './componetes/Product'
import Cart from './componetes/Cart'
import Footer from './componetes/Footer'


function App() {
  const [token, setToken] = useState("")
  const [userId, setUserId] = useState("") 
  
  return (
  <div className="App">
    <div>

<Navbar token={token} setToken = {setToken}/>
<Route exact path="/signUp" component={signUp} /> 
<Route exact path="/home" component={Home} /> 
<Route exact path="/Login" render={()=>{return <Login changeToken={setToken} setUserId = {setUserId}/>} }/> 
<Route exact path="/Product"  render={()=>{return <Product token={token} userId = {userId}/>} }/>
<Route exact path="/Cart" component={Cart} />

{/* {token} */}

</div>
<Footer />
</div>

  );
}

export default App;