import React from 'react'
import { Link , useHistory } from 'react-router-dom'



export default function Navbar({token , setToken}) {
const history = useHistory (); 

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
            <Link to="/Cart"> 🛒 </Link> 
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

