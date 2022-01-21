import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import UploadForm from '../firebase/comp/UploadForm '
import './user.css'
export default function User({ token,setToken }) {

    const [users, setUser] = useState('')
    const [name, setName] = useState("")
    const [img, setImg] = useState('')
    const history = useHistory();

      useEffect( async() => {
      const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`,
      {headers: { authorization: "Bearer " + token }})
      try {
        setUser(result.data)
    } catch (error) {
       console.log(error);
    }
    }, [users]);

      const updateName = (e)=>{
      setName(e.target.value)
    }
    //   const updateInputImg = (e)=>{
    //   setImg(e.target.value)
    // }
      const updateUserName = async() =>{
        console.log(img);
      const result = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/userUpdate` ,
      { name:name , img:img },
      {headers: { authorization: "Bearer " + token },
    } )
      setUser(result.data)
      console.log(result.data);
    };
       
      const removeUser= async(id)=>{
      const result =await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`,{headers: { authorization: "Bearer " + token }})
      console.log(result);
      if(result.status===users){
      setUser(result.data)
    }
      if(result.status===200){
      setToken("");
      history.push("/SignUp")
    } };
       return (

        <div className='cssUser'>
               <h1> Profile/ UpDate Profile</h1>

     
          <div className='usersCss' >

              <h4>{users.name}</h4>

              <img className='iimg' src={users.img} alt="no img" />
              <br />

              <button className='form-button' onClick={()=>{removeUser(users._id)}}> Delete 🗑 </button>
              <br />

              <input className='formbutton' placeholder='Add new name'  onChange={(e)=>{updateName(e)}}/>
              <br />

              {/* <input  type="text" placeholder='new img '  onChange={(e)=>{updateInputImg(e)}}/> */}
              <UploadForm className="form-button" setImg={setImg}/>
              <br />

             <button className='form-button' onClick= {()=> { updateUserName (); }} > UpDate 🔄 </button>
          </div>
          </div>

        ) };
    
    
    
    
    
    
    
    
    
    