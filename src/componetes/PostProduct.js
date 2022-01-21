import React, { useState } from "react";
import axios from 'axios';
export default function PostProduct({token}) {
    const [product, setProduct] = useState([]);
    const [ownerName, setOwnerName] = useState("");
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");

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
        const result = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/product`,
          { ownerName, title, des, img, price },
          { headers: { authorization: `Bearer ${token}` } }
        );
        const copyArray=[...product]
        copyArray.push(result.data)
        setProduct(copyArray)
        // setProduct(ruslt.data);
      };
  return (
  <div>
      
      <h1>Add product</h1>
       <div className="allinput">
          <input   style={{ width: "20rem" , height: "3rem", left:"5px" , border: "1px solid black"}}
            className="dicinput"
            type="text"
            placeholder="Your Name"
            onChange={(e) => {
              changeName(e);
            }}
          />
          <input style={{ width: "20rem" , height: "3rem", left:"5px", border: "1px solid black" }}
            className="dicinput"
            type="text"
            placeholder="Title product"
            onChange={(e) => {
              changeTitle(e);
            }}
          />
          <input style={{ width: "20rem" , height: "3rem", left:"5px", border: "1px solid black" }}
            className="dicinput"
            type="text"
            placeholder="Add Des"
            onChange={(e) => {
              changeDes(e);
            }}
          />
          <input style={{ width: "20rem" , height: "3rem", left:"5px", border: "1px solid black" }}
            className="dicinput"
            type="text"
            placeholder="Add Img"
            onChange={(e) => {
              changeImg(e);
            }}
          />
          <input style={{ width: "20rem" , height: "3rem", left:"5px", border: "1px solid black" }}
            className="dicinput"
            value={price}
            type="text"
            placeholder="Add Price"
            onChange={(e) => {
              changePrice(e);
            }}
          />

          <button 
            className="form-button"
            onClick={() => {
              submit();
            }}
            variant="primary"
          >
            {" "}
            Add Product{" "}
          </button>
        {/* </Card> */}
      </div>
  </div>)
}
