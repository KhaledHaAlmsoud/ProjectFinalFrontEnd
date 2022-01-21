import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "../App.css";

export default function Product({ token, userId, admin }) {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState(null);
  const [searchArr, setSearchArr] = useState("");
  const [user, setUser] = useState([]);
  const history = useHistory();
  const [toogle, setToogle] = useState(false);

  //
  useEffect(async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Product`);
      setProduct(result.data);
      // احفظ القيم اللي جت من الباك اند عن طريق اليوزستيت
      console.log(result.data);
      
    } catch (error) {
      console.log("Erroooooor !");
    }
  }, []);
  useEffect(async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`, {
      headers: { authorization: "Bearer " + token },
    });
    try {
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteProduct = async (id) => {
    const sendDelete = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/Product/${id}`,
      // id = البرودكت اللي ابي احذفه يكون عن طريق الاي دي
      {
        headers: { authorization: `Bearer ${token}` },
        // جبت التوكن من الهيدر , عشان كل يوزر يحذف البرودكت اللي هو ضافه وما اقدر احدد اليوزر الا عن طريق التوكن
      }
    );
    // const copyed = [...product];
    // copyed.splice(i, 1);
    // setProduct(copyed);
    setProduct(sendDelete.data);
    console.log(sendDelete.data, "Delete !");
  };

 

  const addToCart = async (id) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/cart/${id}`,
        {},
        { headers: { authorization: `Bearer ${token}` } }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  /////////////////////
  const toProduct = (id) => {
    history.push(`/OneProduct/${id}`);
  };
  //
  const searchTarget = (e) => {
    setSearchArr(e.target.value);
  };
  const search = () => {
    const search1 = product.filter((elm) => {
      if (elm.title.toLowerCase().includes(searchArr.toLocaleLowerCase())) {
        return elm;
      }
    });
    setProduct(search1);
  };


  ////////////////////////////////////////////////////////////////////////////////////////
  return (<>
  <div className="search">
        <input
          type="text"
          className="searchTerm"
          onChange={(e) => {
            searchTarget(e);
          }}
        />
        <button
          className="searchButton"
          onClick={() => {
            search();
          }}
        >
          {" "}
          🔍{" "}
        </button>
      </div>
    <div>
      
      <h1> Today’s look Store </h1>
      <br />
      <div className="continer h-50 w-50">
        {product &&
          product.map((element, i) => {
            return (
              <div className="boxproduct w-50 h-50">
                <Card style={{ width: "16rem", height: "25rem" }}>
                  <Card.Img
                    className="iiiimgg"
                    onClick={() => {
                      toProduct(element._id);
                    }}
                    variant="top"
                    src={element.img}
                  />{" "}
                  <Card.Body>
                    <Card.Title>{element.name}</Card.Title>
                    <Card.Title>{element.title}</Card.Title>
                    {/* <Card.Text>{element.des}</Card.Text> */}
                    <div className="infoo" style={{ display: "flex" }}>
                      <h4>
                        <Card.Text>{element.price}$</Card.Text>
                      </h4>
                      <Button style={{ width: "4rem", height: "4rem"}}
                        onClick={() => {
                          addToCart(element._id);
                        }}
                        variant="primary"
                      >
                        {" "}
                        🛒{" "}
                      </Button>
                      {element.user._id == userId || user.admin == true ? (
                        <Button style={{ width: "4rem", height: "4rem"}}
                          onClick={() => {
                            deleteProduct(element._id);
                          }}
                          variant="primary"
                        >
                          {" "}
                           🗑{" "}
                        </Button>
                      ) : (
                        ""
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}

        

        {/* <div className="dicinput" >
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
        </div> */}
      </div>
    </div>
    </>
  );
}
