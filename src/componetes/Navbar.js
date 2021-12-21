import React from 'react'
import { Link , useHistory } from 'react-router-dom'

export default function Navbar() {

    const history = useHistory (); 

    return (

        <div>
            <div className='topnav'>
                
            <Link to="/home"> Home </Link>
            <Link to="/Store"> Store </Link>
            <Link to="/Fav"> Fav</Link> 
            <Link to="/signUp"> Sign Up </Link> 
            <Link to="/login"> login </Link> 


            <Link to="/signUp">Logout</Link>
            </div>
        </div>
    )
}

