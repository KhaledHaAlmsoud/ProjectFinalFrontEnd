import React, { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

export default function Clothing({ token , userId }) {

    
    const [clothing, setClothing] = useState([])
    const [ownerName, setOwnerName] = useState("");
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const history = useHistory(); 
    //
    useEffect(async () => {
      try {
        const result = await axios.get("http://localhost:5000/Clothing");
        setClothing(result.data);
        // احفظ القيم اللي جت من الباك اند عن طريق اليوزستيت
        console.log(result.data);
      } catch (error) {
        console.log("Erroooooor !");
      }
    }, []);
  
    const deleteProduct = async (id) => { 
      const sendDelete = await axios.delete(
        `http://localhost:5000/Clothing/${id}`,
        // id = البرودكت اللي ابي احذفه يكون عن طريق الاي دي 
        {
          headers: { authorization: `Bearer ${token}` },
          // جبت التوكن من الهيدر , عشان كل يوزر يحذف البرودكت اللي هو ضافه وما اقدر احدد اليوزر الا عن طريق التوكن
        }
      );
      // const copyed = [...product];
      // copyed.splice(i, 1);
      setClothing(sendDelete.data);
      console.log(sendDelete.data, "Delete !");
    };
  
    const changeName = (e) => {
      setOwnerName(e.target.value);
    };
    const changeTitle = (e) => {
      setTitle(e.target.value);
    };
    const changeDes = (e) => {
      setDes(e.target.value);
    };
    const changeImg = (e) => {
      setImg(e.target.value);
    };
    const changePrice = (e) => {
      setPrice(e.target.value);
    };
  
    const submit = async () => {
      const ruslt = await axios.post(
        "http://localhost:5000/Clothing",
        { ownerName, title, des, img, price },
        { headers: { authorization: `Bearer ${token}` } }
      );
      setClothing (ruslt.data);
    };
  
    /////////////////////
  
    const toClothing = (id)=>{
      history.push(`/OneDevices/${id}`)
    }
  
    return (
      <div>
        <div className="title">
          <h1> Galaxy Store </h1>
        </div>
        <br />
  
        <div className="continer">
          {clothing && clothing.map((element, i) => {
            return (
              <div onClick={()=>{toClothing (element._id)}} className="boxproduct">
                <Card style={{ width: "18rem" }}>
                  <Card.Img  variant="top" src={element.img} />
                  {/* onClick={()=>{toProduct(element._id)}}  */}
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>{element.des}</Card.Text>
                    <div className="infoo" style={{ display: "flex" }}>
                      <h4>
                        <Card.Text>{element.price}</Card.Text>
                      </h4>
                      <Button variant="primary"> Buy </Button>
                      { element.user._id == userId ? 
                      <Button
                        onClick={() => {
                          deleteProduct(element._id);
                        }}
                        variant="primary"
                      >
                        Delete Product
                      </Button>
                      :
                      ""
          }
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
  
          <div>
            <Card style={{ width: "18rem" }}>
              <input
                type="text"
                placeholder="Your Name"
                onChange={(e) => {
                  changeName(e);
                }}
              />
              <input
                type="text"
                placeholder="Title product"
                onChange={(e) => {
                  changeTitle(e);
                }}
              />
              <input
                type="text"
                placeholder="Add Des"
                onChange={(e) => {
                  changeDes(e);
                }}
              />
              <input
                type="text"
                placeholder="Add Img"
                onChange={(e) => {
                  changeImg(e);
                }}
              />
              <input
                type="text"
                placeholder="Add Price"
                onChange={(e) => {
                  changePrice(e);
                }}
              />
  
              <Button
                onClick={() => {
                  submit();
                }}
                variant="primary"
              >
                {" "}
                Add Product {" "}
              </Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }
  