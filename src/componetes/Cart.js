import React, {useState,useEffect} from 'react'
import axios from 'axios';
export default function Cart ({ token }) {

    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);


    let increaseCart = ()=>{
      setCount (count + 1 );
    }
    let decreaseCart = ()=>{
      setCount (count - 1 );
    }

    

    useEffect( async () => { 
        try {
          const result = await axios.get("http://localhost:5000/cart",
          { headers: { authorization: `Bearer ${token}` } });
          setCart(result.data);
          // احفظ القيم اللي جت من الباك اند عن طريق اليوزستيت
          // console.log(result.data);
        } catch (error) {
          // console.log("Erroooooor !");
        }
    }, [cart]);




      const deleteCart= async (id)=>{
        try {
          const sendDelete = await axios.delete( `http://localhost:5000/cart/${id}`,
            // id = البرودكت اللي ابي احذفه يكون عن طريق الاي دي 
            { headers: { authorization: `Bearer ${token}` },
              // جبت التوكن من الهيدر , عشان كل يوزر يحذف البرودكت اللي هو ضافه وما اقدر احدد اليوزر الا عن طريق التوكن
            } );
          setCart(sendDelete.data);

        } catch (error) {
          // console.log(sendDelete.data, "Delete !"); 

        } }; 


      
    return (

        <div>

               { cart.map((elm,i)=>{ 
                 console.log(elm);
               return (
        <div>
            <div   key={i} >
                  <p> {elm.items.name} </p>
                  <img className='cartImg' src= {elm.items.img} alr="" />  
                  <p> {elm.items.des} </p>
                  <p> {elm.items.price} </p>

                  <p> {elm.counter} </p>
                  
            <button onClick={()=>{increaseCart () }}> + </button> 
            <h4> Counter </h4>
            <button onClick={()=>{decreaseCart () }}> - </button> 

            </div>
                  <button onClick={()=>{deleteCart (elm._id) }}> Delete </button> 
        </div>    
        
        
             )
         })}
            
        </div>
    )
}
