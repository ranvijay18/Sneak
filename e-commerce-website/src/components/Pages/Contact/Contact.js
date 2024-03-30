import './Contact.css'
import Header from '../../Layout/Header/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Contact = (props) => {

    const [contact, setContact] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setContact(values => ({...values, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch('https://ecommerce-website-b61c5-default-rtdb.firebaseio.com/contact.json',{
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(contact),
            })
    
            if (!res.ok) {
                throw new Error(`Error: ${res.status}`);
              }
            const data = await res.json();
            console.log(data)
        }catch(err){
            console.error('Error:', err);
        }
        
    }


      return(
        <>
        <Header />
        <div className='container card contact-form'>
        <Form onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' onChange={handleChange} placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' onChange={handleChange} placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" name='phone' onChange={handleChange} placeholder="Enter phone number" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

        </div>
        </>
        
      )
}


export default Contact