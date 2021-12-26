import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

export default function Product({ token , userId}) {
  const [product, setProduct] = useState([]);

  const [ownerName, setOwnerName] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");

  useEffect(async () => {
    try {
      const result = await axios.get("http://localhost:5000/Product");
      setProduct(result.data);
      console.log(result.data);
    } catch (error) {
      console.log("Erroooooor !");
    }
  }, []);

  const deleteProduct = async (id, i) => {
    const sendDelete = await axios.delete(
      `http://localhost:5000/Product/${id}`,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    // const copyed = [...product];
    // copyed.splice(i, 1);
    setProduct(sendDelete.data);
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
      "http://localhost:5000/product",
      { ownerName, title, des, img, price },
      { headers: { authorization: `Bearer ${token}` } }
    );
    setProduct(ruslt.data);
  };

  return (
    <div>
      <div className="title">
        <h1> Galaxy Store </h1>
      </div>
      <br />

      <div className="continer">
        {product && product.map((element, i) => {
          return (
            <div className="boxproduct">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={element.img} />{" "}
                <Card.Body>
                  <Card.Title>{element.name}</Card.Title>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>{element.des}</Card.Text>
                  <div className="infoo" style={{ display: "flex" }}>
                    <h4>
                      {" "}
                      <Card.Text>{element.price}</Card.Text>{" "}
                    </h4>
                    <Button variant="primary"> Buy </Button>
                    { element.user._id == userId ? 
                    <Button
                      onClick={() => {
                        deleteProduct(element._id, i);
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

            {/* <div class="col-auto my-1">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="autoSizingCheck2"/>
        <label class="form-check-label" for="autoSizingCheck2">
          Remember me
        </label>
      </div>
    </div> */}
            <Button
              onClick={() => {
                submit();
              }}
              variant="primary"
            >
              {" "}
              Submit{" "}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
