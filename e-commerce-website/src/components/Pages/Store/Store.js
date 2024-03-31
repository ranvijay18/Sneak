import './Store.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Header from '../../Layout/Header/Header';
import { useContext } from 'react';
import CartContext from '../../context/cart-context';
import { Link } from 'react-router-dom';


const Store = () => {

    const productsArr = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }]

        const cartCtx = useContext(CartContext)

        const handleAddItem = (id) => {
          const item = productsArr[id]
             cartCtx.addItem(item);
        }

     return(
        <div>
        <Header />
        <h1 className='heading'>Music</h1>
        <div className='store'>
    <Container className='container'>
      <Row>
        {productsArr.map((ele, index) =>{
          return <Col xs={6} md={5}  className='rows' key={index}>
            <br/>
            <br/>
          <Image src={ele.imageUrl} rounded />
          <div>
            <h5>{ele.title}</h5>
            <p>${ele.price}</p>
          </div>
          <Button className='buy-btn' onClick={() => handleAddItem(index)}>Add to cart</Button>
          <Button className='detail-btn'><Link className="link" to={`/product/${index}`}>Details</Link></Button>
        </Col>
        })}
      </Row>
    </Container>
    </div>
    </div>
     )
}

export default Store