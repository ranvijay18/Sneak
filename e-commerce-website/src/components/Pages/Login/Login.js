import { useRef } from "react";
import Header from "../../Layout/Header/Header"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAWnTSSM62-LxPcuSBx2HBV5wVcYcp6138',{
            method:'POST',
        body:JSON.stringify({ 
          email: email,
          password: password,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
        }).then(res => {
            if(res.ok){
              res.json().then(data => {
                console.log(data)
                localStorage.setItem('token', data.idToken)
                 navigate('/store');
              })
            }else{
              return res.json().then(data => alert(data.error.message))
            }
          }).catch(err => {
            console.log(err);
          })
    }

   return(
    <>
        <Header />
        <div className='container card contact-form'>
        <Form onSubmit={handleSubmit}>
            <h1>Login</h1>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" ref={emailRef}/>
        </Form.Group>
  
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='phone' placeholder="Enter password" ref={passwordRef}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

        </div>
        </>
   )
}


export default Login