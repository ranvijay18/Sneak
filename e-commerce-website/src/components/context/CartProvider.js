import { useState } from 'react';
import CartContext from './cart-context';



const CartProvider =(props) => {

    const [addItem, setAddItem] = useState([])


    const handleAddItem = (item) => {
        setAddItem(prev => {
            return [...prev, item]
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