import React, { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Context} from "../Context"

const CartItem = () => {
    const [buttonText, setButtonText] = useState("Check Out")
    const navigate = useNavigate()
    const {cartItems, removeFromCart, emptyCart} = useContext(Context);
    const items = cartItems.map((item) => {
        return (
            <div className='cart-items' key={item.id}>
                <img src = {item.url}/>
                <h2> {item.price}$6.99</h2>
                <i class="ri-delete-bin-6-fill" onClick={() => {removeFromCart(item.id)}}></i>   
            </div>
        )
    })

    const cost = cartItems.length*6.99;
    const totalCost = cost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    //console.log(cartItems)

    function placeOrder(){
        setButtonText("Ordering...")
        setTimeout(() => {
                emptyCart()
        }, 3000);

        if(buttonText ==="Ordering..."){
            navigate("/checkout", { replace: true })
        }
    }

    function render(){
        if(cartItems.length > 0){
            return <div>
                        <button onClick={placeOrder}>{buttonText}</button>
                        <br/><br/>
                        <hr/>
                        <h3>Total: {totalCost} </h3>
                    </div>
        }
        return <div>
                <h2>You Have No Items In Your Cart</h2>
                <button onClick={() => navigate("/", { replace: true })}>Back To Home</button>
            </div>
        
    }


    return ( 
        <div className='cart-container'>
            <h1>Your Cart</h1>
            {items}
            {render()}
        </div>
     );
}
 
export default CartItem;