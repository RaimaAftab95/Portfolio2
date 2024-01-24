// // import { Button } from "reactstrap";
// import { useDispatch } from "react-redux";
// import { setActiveUser } from "./redux/user";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// export function Login({ name = "n/a", place, dob }) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [username, setusername] = useState("");
//   const handleChange = (event) => {
//     setusername(event.target.value);
//   };

//   return (
//     //  style={{ marginTop: '100px' }}
//     <div className="Login">
//       {/* <h4>Name:{name}</h4>
//       {dob ? <h4>DOB:{dob}</h4> : <p>DOB is na</p>}
//       <h4>Place: {place}</h4> */}
//       <input placeholder="username" value={username} onChange={handleChange} />
//       <input placeholder="password" />
//       <button onClick={() => dispatch(setActiveUser({ username, navigate }))}>
//         login
//       </button>
//       <header>
//     <h4>Login</h4>
//   </header>
//       <form>
//     <div class="form_wrapper">
//       <input id="input" type="text" required />
//       <label for="input">Username</label>
//       <i class="material-icons">person</i>
//     </div>
//     <div class="form_wrapper">
//       <input id="password" type="password" required />
//       <label for="password">Password</label>
//       <i class="material-icons">lock</i>
//     </div>
//     <div class="remember_box">
//       <div class="remember">
//         <input type="checkbox" />
//         Remember me
//       </div>
//       <a href="#">Forgot Password ?</a>
//     </div>
//     <button>Login</button>
//     <div class="new_account">
//       Don't have account ? <a href="#">Sign up</a>
//     </div>
//   </form>
//     </div>
//   );
// }

import {  Container, Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { setActiveUser } from './redux/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { toast } from 'react-toastify';

export function Login({ name = 'n/a', place, dob }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setusername] = useState('');

  const handleChange = (event) => {
    setusername(event.target.value);
  };

  const handlelogin = () => {
  if(username.length > 4) dispatch (setActiveUser({username, navigate}));
  else toast("username is not valid",{type:"error"});
  }
  return (
    <div className="Login">
      {/* <Form className='mt-5'>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" id="password" placeholder="Enter your password" required minLength="12" />
        </FormGroup>
        <Button onClick={() => dispatch(setActiveUser({ username, navigate }))}>
          Login
        </Button>
      </Form> */}
      <h1>Login Form</h1>
      <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form id="contact-form">
            <FormGroup>
              <Label for="contact-form-name">Username</Label>
              <Input type="text" className="contact-inputfields"  required minLength="8" 
               id="username"
               placeholder="Enter your username"
               value={username}
               onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="contact-form-email">Email:</Label>
              <Input type="email" id="contact-form-email" className="contact-inputfields" placeholder="Email:" required minLength="12" />
            </FormGroup>
            <FormGroup>
              <Label for="contact-form-subject">Password</Label>
              <Input type="password" id="contact-form-password" className="contact-inputfields" placeholder="Password" required minLength="6" />
            </FormGroup>
            <Button onClick={handlelogin} id="contact-formbtn" type="submit" className="btn contact-send-message" >Login</Button>
            {/*only dispatch if user name is true */}


            {/* <Button onClick={() => dispatch(setActiveUser({ username, navigate }))} id="contact-formbtn" type="submit" className="btn contact-send-message" >Login</Button> */}


            {/* <Button onClick={() => dispatch(setActiveUser({ username, navigate }))}>
          Login old
        </Button> */}
          </Form>
        </Col>
      </Row>
    </Container>

 </div>
  );
}

