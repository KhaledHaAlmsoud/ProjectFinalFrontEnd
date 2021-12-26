import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [phone, setPhone] = useState("")
// Definition of (useState)
// عشان احفظ واغير القيمة داخلها 
const history = useHistory(); 
// عرفتها عشان اتنقل بين الصفحات 


    const nameValue =(e)=>{
    setName (e.target.value)
    // القيمة الجديدة داخل input 
    // الحدث عشان اغير القيمة بدونها ما اقدر اغير 
    }

    const emailValue =(e)=>{
    setEmail (e.target.value)
    }

    const passValue =(e)=>{
    setPassword (e.target.value)  
    }

    const phoneValue =(e)=>{
    setPhone (e.target.value) 
    }

    const addUser = async()=>{
        // name Function === Come From "OnClick" - button !
        // من اجل اضافة مستخدم جديد .
        const result = await axios.post ("http://localhost:5000/signUp",
         {name: name, email: email, password: password, phone : phone })

         console.log(result.data);

         history.push("/LogIn"); 
    }



    return (
        <div>
            {/* <input placeholder='Add Your Name'
            onChange={(e)=>{nameValue(e)}} /> 

            <input placeholder='Add Your Email'
            onChange={(e)=>{emailValue(e)}} />

            <input placeholder='Add Your PassWord'
            onChange={(e)=>{passValue(e)}} />

            <input placeholder='Add Your PhoneNumber'
            onChange={(e)=>{phoneValue(e)}} />

            <button onClick={()=>{addUser()}}> 
             </button> */}

           <h3> Don't have an account ? Create account </h3>


            <div className="vh-100 d-flex text-light justify-content-center align-items-center ">
            <div style={{ height:"550px ", borderRadius:"10px "}} className=" p-2 col-md-3 bg-dark text-center pt-3  ">
                <h6 >User Name </h6>
                <input placeholder="Add Your Name" onChange={(e)=>{nameValue(e)}} className="form-control mb-5 w-75 m-auto" />
                <h6> E-mail </h6>
                <input type="text" placeholder="Add Your Email" onChange={(e)=>{emailValue (e)}} className=" m-auto mb-5 form-control w-75 m-3" />
                <h6> Password </h6>
                <input placeholder="Add Your PassWord" onChange={(e)=>{passValue(e)}} className="form-control mb-5 w-75 m-auto" />
                <h6> Phone Number </h6>
                <input placeholder="Add Your PhoneNumber" onChange={(e)=>{phoneValue(e)}} className="form-control mb-5 w-75 m-auto" />

                <button className=" btn btn-info px-5 fw-bold py-1" onClick={()=>{addUser()}}> register </button>
            
              {/* <Link to="/SignUp">  <p className="mt-2 mb-5"> Don't have an account? Create account</p></Link>   */}
            </div>
        </div>



{/* <button class="w3-button w3-block w3-section w3-blue w3-ripple w3-padding">Send</button> */}


        </div>
    )
}
