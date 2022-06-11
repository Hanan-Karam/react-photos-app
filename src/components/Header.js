import React, {useContext} from "react";
import {Link } from "react-router-dom";
import {Context} from "../Context"
const Header = () => {
    const {cartItems} = useContext(Context);
    return ( 
        <div className="nav">
            <h1><Link className="site-name" to="/">Fotoz</Link></h1>
            <Link  className="cart-main" to="/cart">
                <i className={cartItems.length > 0 
                ? "ri-shopping-cart-2-fill "
                : "ri-shopping-cart-2-line"}>
                </i>
            </Link>
        </div>
     );
}
 
export default Header;