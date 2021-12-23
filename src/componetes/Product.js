import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card , Button} from 'react-bootstrap'

export default function Product({token}) {

const [product, setProduct] = useState([]);

useEffect(async() => {

    try {
    const result = await axios.get ("http://localhost:5000/Product"); 
    setProduct(result.data)
    console.log(result.data);
    } catch (error) {
     console.log("Erroooooor !");
    }

}, []) 

const deleteProduct = async (id,i)=>{
const sendDelete = await axios.delete (`http://localhost:5000/Product/${id}`, {
headers: { authorization: `Bearer ${token}`}
})

setProduct (sendDelete.data) ;
// console.log(sendDelete.data, "Delete !");
}


return (
    <div >
            <div className='title' >
                
        <h1> Galaxy Store </h1> 
    </div>
     <br/>
        
    <div className='continer'>
        {product.map((element,i)=>{ 
             
             return <div className='boxproduct'>
                {/* <h2> {element.title} </h2> 
                <p style={{padding:"10px"}}> {element.des} </p> 
                <h3> {element.price} </h3>
                <img style={{width:"100%" ,height:"420px",borderRadius:"10px "}} src={element.img} /> */}


  <Card style={{ width: '18rem' }}>
    <Card.Img   variant="top" src= {element.img}/> <Card.Body>
    <Card.Title>{element.name}</Card.Title>
    <Card.Title>{element.title}</Card.Title>
    <Card.Text>{element.des}</Card.Text>
    <div className="infoo" style={{display : "flex"}}>
    <h4> <Card.Text>{element.price}</Card.Text> </h4>
    <Button variant="primary"> Buy </Button>

    <Button onClick ={()=> {deleteProduct (element._id)}} variant="primary"> Delete Product </Button>

    </div>
    
  </Card.Body>
  </Card>

             </div>

        })}

            </div>
        </div>
    ) };
