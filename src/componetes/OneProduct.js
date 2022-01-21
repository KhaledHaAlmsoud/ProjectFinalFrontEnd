import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./oneproduct.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

export default function OneProduct({ token, userId }) {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const [ownerName, setOwnerName] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");

  useEffect(async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/OneProduct/${id}`);
      setProduct(result.data);
      console.log(result.data, userId);

      // setTitle(result.data.title)
      // setDes(result.data.des)
      // setImg(result.data.img)
      // setPrice(result.data.price)
    } catch (error) {
      console.log("Erroooooor !");
    }
  }, []);
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

  const submit = async (id) => {
    const ruslt = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/product/${id}`,
      { ownerName, title, des, img, price },
      { headers: { authorization: `Bearer ${token}` } }
    );
    setProduct(ruslt.data);
  };

  return (
    <>
      <div>
        {product && (
          <div className="oneproduct">
            <img className="imges" src={product.img} />
            <div>
              <h3>{product.name}</h3>
              <h4>{product.title}</h4>
              <p>{product.des}</p>
              <h4>{product.price}</h4>
            </div>
          </div>
        )}
      </div>

      <div style={{ width: "18rem" }}>
        {product.user && product.user._id == userId ? (
          <div className="productInput">
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
                submit(product._id);
              }}
              variant="primary"
            >
              {" "}
              UpDate 🔄{" "}
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
