import React , {useState, useEffect, createContext} from 'react';
const Context = createContext()


const ContextProvider = (props) => {
    const[photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    const url ='https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    useEffect(() => {
        const promise= fetch(url)
        const response = promise.then(res => res.json());
        response.then(data => {
            setPhotos(data)
    })

    }, [])

    // console.log(photos)

    function toggleHeart(id){
        let newPhotos = photos.map((photo) =>{
            if(photo.id === id){
                //console.log(id)
                //console.log(!photo.isFavorite)
                return { ... photo, isFavorite : !photo.isFavorite}
            }
                return photo;
        })
        //console.log(newPhotos)
        setPhotos(newPhotos)
    }


    function addToCart(item){
        setCartItems((prev) =>{
            return[...prev, item]
        })
    }
    //console.log(cartItems)

    function removeFromCart(id){
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    function emptyCart(){
        setCartItems([])
    }

    return ( 
        <Context.Provider 
        value={
        {photos,
        toggleHeart, 
        addToCart, 
        cartItems, 
        removeFromCart,
        emptyCart
        }}>
            {props.children}
        </Context.Provider>
     );
}

export {ContextProvider, Context}