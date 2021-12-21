import React,{useState} from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'


export default function Login({changeToken}) {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const history = useHistory ();

const addUser = async ()=> {
    try { 
    const res = await axios.post("http://localhost:5000/login", {
    email: email,
    password : password })

    // يتم الارسال من فرونت لـ باك
    // اللي يستقبله الباك من الفرونت 
    changeToken(res.data.token);
    console.log(res.data.token);
    // ناخذ كامل البيانات , ولا نظهرهم الا للي عنده توكن 
    history.push("/Home");
        
    } catch (error) {
        console.log(error);
    } };

    return (
        
        <div>
            
        <input placeholder='EnterEmail' onChange={(e)=>setEmail(e.target.value)} />
        <input  placeholder='EnterPassword' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={()=>{ addUser ()}}> Click LogIn </button> 
        <Link to="/signUp">  <p> SignUp </p></Link>  

        </div>
    )
}
