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

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { setActiveUser } from './redux/user';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export function Login({ name = 'n/a', place, dob }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setusername] = useState('');

  const handleChange = (event) => {
    setusername(event.target.value);
  };

  return (
    <div className="Login bg-dark">
      <Form className='mt-5'>
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
          <Input type="password" id="password" placeholder="Enter your password" />
        </FormGroup>
        <Button onClick={() => dispatch(setActiveUser({ username, navigate }))}>
          Login
        </Button>
        <header>
          <h4>Login</h4>
        </header>
        <FormGroup className="form_wrapper">
          <Input type="text" id="input" required />
          <Label for="input">Username</Label>
          <i className="material-icons">person</i>
        </FormGroup>
        <FormGroup className="form_wrapper">
          <Input type="password" id="password" required />
          <Label for="password">Password</Label>
          <i className="material-icons">lock</i>
        </FormGroup>
        <div className="remember_box">
          <div className="remember">
            <Input type="checkbox" />
            <span>Remember me</span>
          </div>
          <a href="#">Forgot Password ?</a>
        </div>
        <Button>Login</Button>
        <div className="new_account">
          Don't have an account ? <a href="#">Sign up</a>
        </div>
      </Form>
    </div>
  );
}

