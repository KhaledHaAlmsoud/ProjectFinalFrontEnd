import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Navbar, Row, Col, Button, Form, FormControl, Nav } from 'react-bootstrap';
import "./NavBar.css"

export default function Navbar2 ({ token , setToken ,admin}) {

  const [users, setUser] = useState("");
  
  useEffect(async () => { 
    const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`, {
      headers: {
        authorization: "Bearer " + token
      }
    });
    setUser(result.data)
  }, [users]);

  return (

    

    <nav className="header-navbar">
      {/* <div class="search">
        <form>
          <input type="search" style={{width: "95% !important",
    margin: "20px auto !important"}} className="form-input" placeholder="Search" />
        </form>
      </div> */}
      {!token ?
        <div className="list" style={{ justifyContent: 'space-between' }}>
          <div>
          {/* <Link  className="nav-item" to="/home"> Home </Link> */}
          {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
          <Link  className="nav-item" to="/"> Product </Link>  
                
          </div>
          <div>
            <Link className="nav-item" to="/signUp"> Sign Up </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link  className="nav-item" to="/login"> Login </Link> 
          </div>
      </div>
      :
        <div className="nav-items">

          {/* <Link className="nav-item" to="/home">Home</Link> */}
          <Link className="nav-item" to="/">Product</Link>
          <Link  className="nav-item" to="/PostProduct"> Add Product </Link>      
          <Link className="nav-item" to="/Cart">🛒</Link>
          {/* {console.log(users,"imj user")} */}
          <Link to="/User"><img className='userImg' src={users.img}  width={"60"} height={"50"}/> </Link>
          <Link className="itemlog" onClick={()=>{localStorage.setItem("token", JSON.stringify(""));setToken("")}} to="/signUp">Logout</Link> 
        </div>  
      }
    </nav>
  );
}


{/* <Container fluid style={{backgroundColor: '#FFD700', justifyContent: 'center'}}>
      <Navbar className="w-75 mx-auto py-4">
      <Row>
        <Col xs={12} className="w-100">
          <Form>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{width: "100%"}}
            />
          </Form>
        </Col>
        {!token ? 
          <Col md={12} className="pt-3 d-flex" style={{ justifyContent: 'space-between' }}>
            <Link  className="navLink bg-dark p-1 px-3 rounded text-light" to="/home"> Home </Link>
            <Link  className="navLink bg-dark p-1 px-3 rounded text-light" to="/Product"> Product </Link>              
            <Link  className="navLink bg-dark p-1 px-3 rounded text-light" to="/signUp"> Sign Up </Link> 
            <Link  className="navLink bg-dark p-1 px-3 rounded text-light" to="/login"> login </Link> 
          </Col>
          :
          <Col md={12} className="pt-3 d-flex" style={{justifyContent: 'space-between'}}>
          <Link className="navLink bg-dark p-1 px-3 rounded text-light" to="/home"> Home </Link> 
          <Link className="navLink bg-dark p-1 px-3 rounded text-light" to="/Product"> Product </Link>
          <Link className="navLink bg-dark p-1 px-3 rounded text-light" to="/Cart"> 🛒 </Link>
          <Link className="navLink bg-dark p-1 px-3 rounded text-light" onClick={()=>{setToken("")}} to="/signUp">Logout</Link>
        </Col>
        }
      </Row>
    </Navbar>
    </Container> */}