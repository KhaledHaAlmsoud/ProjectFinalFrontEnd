import React,{useState} from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

export default function Login({changeToken , setUserId}) {

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
    setUserId(res.data.userId);
    console.log(res.data.userId);
    console.log(res.data.token);
    // ناخذ كامل البيانات , ولا نظهرهم الا للي عنده توكن 
    history.push("/Home");
        
    } catch (error) {
        console.log(error);
    } };

    return (
        
     <div>
            
        {/* <input placeholder='EnterEmail' onChange={(e)=>setEmail(e.target.value)} />
        <input  placeholder='EnterPassword' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={()=>{ addUser ()}}> Click LogIn </button>  */}


        <div className="vh-100 d-flex text-light justify-content-center align-items-center ">
            <div style={{ height:"500px ", borderRadius:"15px "}} className=" p-2 col-md-3 bg-dark text-center pt-3  ">
            <h4 >E-mail</h4>
            <input placeholder="enter Email" onChange={(e)=>setEmail(e.target.value)} className="form-control mb-5 w-75 m-auto" />
            <h4> Password </h4>
            <input type="password" placeholder="enter Password" onChange={(e)=>setPassword(e.target.value)} className=" m-auto mb-5 form-control w-75 m-3" />
            <button className=" btn btn-info px-5 fw-bold py-1" onClick={()=>{  addUser ()}}> LogIn </button>
            <Link to="/SignUp">  <p className="mt-5 mb-5 ,  btn btn-info px-5 fw-bold py-1 "> new registration </p></Link> 

            </div>
        </div>

     </div>
        
    )
}
