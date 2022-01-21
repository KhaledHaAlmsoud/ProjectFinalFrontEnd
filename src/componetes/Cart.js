import React, { useState, useEffect } from "react";
import axios from "axios";
import './cart.css'
export default function Cart({ token }) {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [buy, setbuy] = useState(false);
  const [massege, setmassege] = useState("");

  useEffect(async () => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cart`, {
        headers: { authorization: `Bearer ${token}` },
      });
      setCart(result.data);
      // احفظ القيم اللي جت من الباك اند عن طريق اليوزستيت
      // console.log(result.data);
    } catch (error) {
      // console.log("Erroooooor !");
    }
  }, []);
  ///////////////////////////

  const increaseCart = async (id) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/cart/${id}`,
        {},
        { headers: { authorization: `Bearer ${token}` } }
      );
      setCart(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCart = async (id) => {
    try {
      const sendDelete = await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/cart/${id}`,
        // id = البرودكت اللي ابي احذفه يكون عن طريق الاي دي
        {
          headers: { authorization: `Bearer ${token}` },
          // جبت التوكن من الهيدر , عشان كل يوزر يحذف البرودكت اللي هو ضافه وما اقدر احدد اليوزر الا عن طريق التوكن
        }
      );
      setCart(sendDelete.data);
    } catch (error) {
      // console.log(sendDelete.data, "Delete !");
    }
  };

  const surebuy = (elm) => {
    setbuy(!buy);
    setmassege(` Congratulations, you have completed your purchase `); 
  };

  return (
    <div>
      {cart.map((elm, i) => {
        console.log(elm);
        return (
          <div>
            <div  className="Container" key={i}>
              <p> {elm.items.ownerName} </p>
              <img className="cartImg" src={elm.items.img} alr="" />
              <p> {elm.items.des} </p>
              <h4> {elm.priceTotal} $</h4> 

              {/* <p> {elm.counter} </p>
              <h1> {massege}</h1> */}
             
              {/* <button class="button-75" role="button"><span class="text">Button 75</span></button> */}

              <button className="button-75"
                onClick={() => {
                  increaseCart(elm.items._id);
                }}
              >

                {" "}
                +{" "}
              </button>
              <p className="button-75"> {elm.counter} </p>
              
              <button className="button-75"
                onClick={() => {
                  deleteCart(elm._id);
                }}
              >
                {" "}
                -{" "}
              </button>
              </div>
              <br></br>
              {/* <p> {elm.counter} </p> */}
              <button className="button-75 addBtn" onClick={surebuy}> Confirm purchase </button>
              
              <h1> {massege}</h1>
              {/* <button onClick={surebuy}> تاكيد الشراء </button> */}
            {/* </div> */}
          </div>
        );
      })}
    </div>
  );
}
