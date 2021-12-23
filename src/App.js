import React,{useState} from "react";
import { Route } from "react-router-dom";
import "./App.css";

import signUp from "./componetes/SignUp"
import Login from './componetes/Login'
import Navbar from './componetes/Navbar'
import Home from './componetes/Home'
import Product from './componetes/Product'
import Fav from './componetes/Fav'
import Footer from './componetes/Footer'


function App() {
  const [token, setToken] = useState("") 
  return (
  <div className="App">
    <div>

<Navbar token={token} setToken = {setToken}/>
<Route exact path="/signUp" component={signUp} /> 
<Route exact path="/home" component={Home} /> 
<Route exact path="/Login" render={()=>{return <Login changeToken={setToken} />} }/> 
<Route exact path="/Product"  render={()=>{return <Product token={token} />} }/>
<Route exact path="/fav" component={Fav} />
{/* <Route exact path="/footer" component={Footer} /> */}

{/* {token} */}

</div>
<Footer />
</div>

  );
}

export default App;