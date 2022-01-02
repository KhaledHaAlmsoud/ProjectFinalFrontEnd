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
import OneProduct from "./componetes/OneProduct";
import User from "./componetes/User";
import Devices from "./componetes/Devices";
import OneDevices from "./componetes/OneDevices";
import Clothing from "./componetes/Clothing";
import OneClothing from "./componetes/OneClothing";
import Perfumes from "./componetes/Perfumes";
import OnePerfumes from "./componetes/OnePerfumes";

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
<Route exact path="/OneProduct/:id" render={()=>{return <OneProduct token={token}/>} }/> 
<Route exact path="/OneDevices/:id" render={()=>{return <OneDevices token={token}/>} }/> 
<Route exact path="/OneClothing/:id" render={()=>{return <OneClothing token={token}/>} }/> 
<Route exact path="/OnePerfumes/:id" render={()=>{return <OnePerfumes token={token}/>} }/> 
<Route exact path="/User"render={() => {return <User  token={token} setToken={setToken}/>}}/>
<Route exact path="/Product"  render={()=>{return <Product token={token} userId = {userId}/>} }/>
<Route exact path="/Devices"  render={()=>{return <Devices token={token} userId = {userId}/>} }/>
<Route exact path="/Clothing"  render={()=>{return <Clothing token={token} userId = {userId}/>} }/>
<Route exact path="/Perfumes"  render={()=>{return <Perfumes token={token} userId = {userId}/>} }/>
<Route exact path="/Cart" component={Cart} />


{/* {token} */}

</div>
<Footer />
</div>

  );
}

export default App;