import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import CartIcon from '../../UI/CartIcon';

const Header = () => {
    return(
        <Navbar expand="lg" className="header" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Sneak</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto'>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/store">Store</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <CartIcon />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}


export default Header