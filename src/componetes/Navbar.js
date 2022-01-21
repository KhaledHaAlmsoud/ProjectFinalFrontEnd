import React,{useState,useEffect} from 'react'
import { Link  } from 'react-router-dom'
import axios from 'axios'
import "./NavBar.css"
export default function Navbar ({ token , setToken ,admin}) { 

    const [users, setUser] = useState("")
    
      useEffect( async() => {
      const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`,
      {headers: { authorization: "Bearer " + token }})
    try {
        setUser(result.data)
  } catch (error) {
        console.log(error);
  }
  }, [token])


    return (
        <div>
            {/* <div className='topnav'>
            {!token ? 
            <>
            <Link to="/home"> Home </Link>
            <Link to="/Product"> Product </Link>
            <div className='signl'>  

            <Link to="/signUp"> SignUp </Link> 
            <Link to="/login"> login </Link> 
            
            </div> 
            </>
            : 
            <>
            <Link to="/home"> Home </Link> 
            <Link to="/Product"> Product </Link>
            <Link to="/Cart"> 🛒 </Link> 

            <Link  to="/User"> <img className='userImg' src={users.img} /> </Link>

            <div className='signl'>   
            <Link onClick={()=>{localStorage.setItem("token", JSON.stringify(""));setToken("")}} to="/signUp">Logout</Link>
            </div>
            </>
            }

          
            </div>
            <footer /> */}


        </div>
    )
}

