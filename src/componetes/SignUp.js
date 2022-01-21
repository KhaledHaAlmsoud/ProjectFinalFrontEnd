import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import './signup.css';

export default function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    // Definition of (useState)
    // عشان احفظ واغير القيمة داخلها 
    const history = useHistory();
    // عرفتها عشان اتنقل بين الصفحات 


    const nameValue = (e) => {
        setName(e.target.value)
        // القيمة الجديدة داخل input 
        // الحدث عشان اغير القيمة بدونها ما اقدر اغير 
    }

    const emailValue = (e) => {
        setEmail(e.target.value)
    }

    const passValue = (e) => {
        setPassword(e.target.value)
    }

    const phoneValue = (e) => {
        setPhone(e.target.value)
    }

    const addUser = async () => {
        // name Function === Come From "OnClick" - button !
        // من اجل اضافة مستخدم جديد .
        const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signUp`,
            { name: name, email: email, password: password, phone: phone })

        console.log(result.data);

        history.push("/LogIn");
    }



    return (
        <main>
            <h1>Signup</h1>
            <div>
                <label className="form-label">User Name</label>
                <input type="text" className="form-input" onChange={(e)=>{nameValue(e)}} required />
            </div>
            <div>
                <label className="form-label">Email</label>
                <input type="email" className="form-input" onChange={(e)=>{emailValue (e)}} required />
            </div>
            <div>
                <label className="form-label">Password</label>
                <input type="password" className="form-input" onChange={(e)=>{passValue(e)}} required />
            </div>
            <div>
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-input" onChange={(e)=>{phoneValue(e)}} required />
            </div>
            <button className="form-button" onClick={()=>{addUser()}} >Submit</button>
        </main>
    )
}
