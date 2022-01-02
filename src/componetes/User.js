import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

export default function User({ token,setToken }) {

    const [users, setUser] = useState('')
    const [name, setName] = useState("")
    const [img, setImg] = useState('')
    const history = useHistory();

      useEffect( async() => {
      const result = await axios.get("http://localhost:5000/user",
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
      const updateInputImg = (e)=>{
      setImg(e.target.value)
    }
      const updateUserName = async() =>{
      const result = await axios.put("http://localhost:5000/userUpdate" ,
      { name:name , img:img },
      {headers: { authorization: "Bearer " + token },
    } )
      setUser(result.data)
    };
       
      const removeUser= async(id)=>{
      const result =await axios.delete(`http://localhost:5000/user/${id}`,{headers: { authorization: "Bearer " + token }})
      console.log(result);
      if(result.status===users){
      setUser(result.data)
    }
      if(result.status===200){
      setToken("");
      history.push("/SignUp")
    } };
       return (
          <div  >

              <p>{users.name}</p>

              <img className='iimg' src={users.img} alt="no img" />
              <br />

              <button onClick={()=>{removeUser(users._id)}}>delete user</button>
              <br />

              <input  type="text" placeholder='new name'  onChange={(e)=>{updateName(e)}}/>
              <br />

              <input  type="text" placeholder='new img '  onChange={(e)=>{updateInputImg(e)}}/>
              <br />

             <button onClick= {()=> { updateUserName (); }} > UpDate </button>
          </div>

        ) };
    
    
    
    
    
    
    
    
    
    