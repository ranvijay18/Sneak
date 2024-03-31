import { useState } from 'react';
import CartContext from './cart-context';
import axios from 'axios';



const CartProvider =(props) => {

    const [addItem, setAddItem] = useState([])


    const handleAddItem = (item) => {
        const email = localStorage.getItem('email').replace(/[@.]/g, "");

        console.log(email);

        setAddItem(prev => {
            return [...prev, item]
        })
      
    
        fetch(`https://crudcrud.com/api/388c220a680b45c0a072f717d98f7aec/cart${email}`,{
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(item),
            }).then((res) => {
                res.json().then((data) => console.log(data))
            })

        console.log(addItem);
    }

    const handleRemoveItem = (id) => {
        console.log(id)
    }

    const cartContext = {
        items: addItem, 
        totalAmount: 0,
        addItem : handleAddItem,
        removeItem: handleRemoveItem
    }


    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartProvider;