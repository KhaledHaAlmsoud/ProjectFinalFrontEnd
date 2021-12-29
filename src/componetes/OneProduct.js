import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card,Button } from "react-bootstrap";

export default function OneProduct({token}) {

    const [product, setProduct] = useState(null);
    const {id} = useParams();

  const [ownerName, setOwnerName] = useState("");
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");

    useEffect( async() => {
        try {
            const result = await axios.get(`http://localhost:5000/OneProduct/${id}`);
            setProduct(result.data)
          } catch (error) {
            console.log("Erroooooor !");
          }
    }, [])
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

      const submit = async(id)=>{
      const ruslt = await axios.put(
       `http://localhost:5000/product/${id}`,
        { ownerName, title, des, img, price },
        { headers: { authorization: `Bearer ${token}` } }
    );
        setProduct(ruslt.data);
      }


    return (
        <div>
            {product?(  <Card style={{ width: "18rem" }}>

                <Card.Img  variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.des}</Card.Text>
                  <div className="infoo" style={{ display: "flex" }}>
                    <h4>
                      <Card.Text>{product.price}</Card.Text>
                    </h4>
                    </div>
                    </Card.Body>
              </Card>):("")}
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
                submit(product._id);
              }}
              variant="primary"
            >
              {" "}
              upDate Product {" "}
            </Button>
          </Card>
        </div>
    </div>

    ) };