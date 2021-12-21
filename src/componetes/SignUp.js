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
            <input placeholder='Add Your Name'
            onChange={(e)=>{nameValue(e)}} /> 

            <input placeholder='Add Your Email'
            onChange={(e)=>{emailValue(e)}} />

            <input placeholder='Add Your PassWord'
            onChange={(e)=>{passValue(e)}} />

            <input placeholder='Add Your PhoneNumber'
            onChange={(e)=>{phoneValue(e)}} />

            <button onClick={()=>{addUser()}}> 
            Click to register </button>




{/* <button class="w3-button w3-block w3-section w3-blue w3-ripple w3-padding">Send</button> */}


        </div>
    )
}
