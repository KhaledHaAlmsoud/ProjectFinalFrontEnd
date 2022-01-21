import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
// import { Container, Form, Button } from 'react-bootstrap';
import './login.css';

export default function Login({ changeToken, setUserId, setAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
//
  const addUser = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        email: email,
        password: password,
      });
      // يتم الارسال من فرونت لـ باك
      // اللي يستقبله الباك من الفرونت
      changeToken(res.data.token);
      setUserId(res.data.userId);
      setAdmin(res.data.payload.admin);
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("userId", JSON.stringify(res.data.userId));
      console.log(res.data.userId);
      console.log(res.data.token);
      // ناخذ كامل البيانات , ولا نظهرهم الا للي عنده توكن
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <main>
      <h1>Login</h1>
      <div>
        <label className="form-label">Email</label>
        <input type="email" className="form-input" onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label className="form-label">Password</label>
        <input type="password" className="form-input" onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button className="form-button" onClick={() => { addUser(); }}>Submit</button>
    </main>
  );
}