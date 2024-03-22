import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartElements = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    }
    ]

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>Cart 0</Button>{' '}


      <Modal show={show} onHide={handleClose} animation={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example">
        <Container>
        <Row>
            <Col xs={6} md={4}>
              ITEM
            </Col>
            <Col xs={6} md={4}>
              PRICE
            </Col>
            <Col xs={6} md={4}>
              QUANTITY
            </Col>
          </Row>
          {cartElements.map((ele, index) => {
            return <Row>
            <Col xs={6} md={4}>
              <Image src={ele.imageUrl} fluid/>{ele.title}
            </Col>
            <Col xs={6} md={4}>
             $ {ele.price}
            </Col>
            <Col xs={6} md={4}>
              {ele.quantity} <button>Remove</button>
            </Col>
          </Row>
          })}
        </Container>
            <div>
                {cartElements.map((ele,index) => {
                    return 
                })}
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;