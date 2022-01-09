import React,{useState,useEffect} from 'react'
import { Link  } from 'react-router-dom'
import axios from 'axios'
import "./NavBar.css"
export default function Navbar ({ token , setToken ,admin}) {

    const [users, setUser] = useState("")
    
      useEffect( async() => {
      const result = await axios.get("http://localhost:5000/user",
      {headers: { authorization: "Bearer " + token }})
    try {
        setUser(result.data)
  } catch (error) {
        console.log(error);
  }
  }, [users])


    return (
        <div>
            <div className='topnav'>
            {!token ? 
            <>
            <Link to="/home"> Home </Link>
            <Link to="/Product"> Product </Link>
            {/* <Link to="/Fav"> Fav</Link>  */}
            <div className='signl'>   
            <Link to="/signUp"> Sign Up </Link> 
            <Link to="/login"> login </Link> 
            {/* <Link to="/signUp">Logout</Link> */}
            
            </div> 
            </>
            : 
            <>
            <Link to="/home"> Home </Link> 
            <Link to="/Product"> Product </Link>
            <Link to="/Devices"> Devices </Link>
            <Link to="/Clothing"> Clothing </Link>
            <Link to="/Perfumes"> Perfumes </Link>
            <Link to="/Cart"> 🛒 </Link> 

            <Link  to="/User"> <img className='userImg' src={users.img}  width={"40"} height={"50"}/> </Link>

            {/* <img  src={user.img}/> */}
            <div className='signl'>   
            {/* <Link to="/signUp"> Sign Up </Link> 
            <Link to="/login"> login </Link>  */}
            <Link onClick={()=>{setToken("")}} to="/signUp">Logout</Link>
            </div>
            </>
            }

            {/* {token} */}

          
            </div>
            <footer />
        </div>
    )
}

