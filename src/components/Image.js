import React, {useState, useContext} from 'react';
import { Context } from '../Context';


const Image = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleHeart, addToCart, cartItems, removeFromCart} = useContext(Context)

    //const heart = isHovered &&  <i className={props.img.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"} onClick={() => {toggleHeart(props.img.id)}}></i> 
    function heartIcon() {
        if(props.img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleHeart(props.img.id)}></i>
        } else if(isHovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleHeart(props.img.id)}></i>
        }
    }


    //const cart = isHovered && <i className="ri-add-circle-line cart" onClick={() => {addToCart(props.img)}}></i>
    function cartIcon() {
         const inCart = cartItems.some((item) => item.id === props.img.id)
        if(inCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => {removeFromCart(props.img.id)}}></i>
        } else if(isHovered) {
            return <i className="ri-add-circle-line cart" onClick={() => {addToCart(props.img)}}></i>
        }
    }

    return ( 
        <div 
        className={`${props.className} grid-container`}
        onMouseEnter={() => {setIsHovered(true)}}
        onMouseLeave={() => {setIsHovered(false)}}
        >
            <img 
            className="grid-item" 
            src={props.img.url}
            alt="new"
            
            />
            {heartIcon()}
            {cartIcon()}
        </div>
     );
}
 
export default Image;