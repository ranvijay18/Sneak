import './CartIcon.css'
import Button from 'react-bootstrap/Button';

const CartIcon = () => {
    return(
        <div className='cart-icon'>
           <Button variant="outline-light">Cart 0</Button>{' '}
        </div>
    )
}

export default CartIcon