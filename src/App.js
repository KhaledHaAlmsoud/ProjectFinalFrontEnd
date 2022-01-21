import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";

///////////////////
import signUp from "./componetes/SignUp";
import Login from "./componetes/Login";
import Navbar from "./componetes/NavbarV2";
// import Home from "./componetes/Home";
import Product from "./componetes/Product";
import Cart from "./componetes/Cart";
// import Footer from "./componetes/Footer";
import OneProduct from "./componetes/OneProduct";
import User from "./componetes/User";
import PostProduct from "./componetes/PostProduct"
require("dotenv").config();
//
function App() {
  console.log(process.env.REACT_APP_BACKEND_URL,"kh");
  // const [token, setToken] = useState("rt");
  const [userId, setUserId] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState(() => {
    const saved = localStorage.getItem("token");
    const myuserId = localStorage.getItem("userId");
    const defultValue = JSON.parse(saved,myuserId);
    return defultValue ;
  });
  useEffect(() => {
    localStorage.getItem("token", JSON.stringify(token));
    localStorage.getItem("userId", JSON.stringify(userId));
  }, []);
  // useEffect(() => {
  //   if (!token) {
  //     const mytoken = JSON.parse(localStorage.getItem("token"));
  //     const myuserId = JSON.parse(localStorage.getItem("userId"));
  //     setToken(mytoken);
  //     setUserId(myuserId);
  //   }

  // }, []);

  return (
    <div className="App">
      <div>
        <Navbar token={token} setToken={setToken} />
        {/* السيت للتغير  */}
        <Route exact path="/signUp" component={signUp} />
        {/* <Route exact path="/home" component={Home} /> */}
        <Route
          exact
          path="/Login"
          render={() => {
            return <Login changeToken={setToken} setUserId={setUserId} setAdmin={setAdmin}/>;
          }}
        />
        <Route
          exact
          path="/OneProduct/:id"
          render={() => {
            return <OneProduct token={token} userId={userId} />;
          }}
        />
         <Route
          exact
          path="/PostProduct"
          render={() => {
            return <PostProduct token={token}/>;
          }}
        />
        {/* <Route
          exact
          path="/OneDevices/:id"
          render={() => {
            return <OneDevices token={token} />;
          }}
        /> */}
        {/* <Route
          exact
          path="/OneClothing/:id"
          render={() => {
            return <OneClothing token={token} />;
          }}
        /> */}
        {/* <Route
          exact
          path="/OnePerfumes/:id"
          render={() => {
            return <OnePerfumes token={token} />;
          }}
        /> */}
        <Route
          exact
          path="/User"
          render={() => {
            return <User token={token} setToken={setToken} />;
          }}
        />
        <Route
          exact
          path="/"
          render={() => {
            return <Product token={token} userId={userId} admin={admin} />;
            // عشان ارسلها بدون تعديل 
          }}
        />
        {/* <Route
          exact
          path="/Devices"
          render={() => {
            return <Devices token={token} userId={userId} />;
          }}
        />
        <Route
          exact
          path="/Clothing"
          render={() => {
            return <Clothing token={token} userId={userId} />;
          }}
        />
        <Route
          exact
          path="/Perfumes"
          render={() => {
            return <Perfumes token={token} userId={userId} />;
          }}
        /> */}
        <Route
          exact
          path="/Cart"
          render={() => {
            return <Cart token={token} userId={userId} />;
          }}
        />

        {/* {token} */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
