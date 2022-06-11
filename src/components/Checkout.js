import React from "react";
import { useNavigate,  } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate()
    return ( 
        <div className="cart-container checkout">
            <h1>Your Order Has Been Shipped</h1>
            <button onClick={() => navigate("/", { replace: true })}>Back To Home</button>
        </div>
     );
}
 
export default Checkout;