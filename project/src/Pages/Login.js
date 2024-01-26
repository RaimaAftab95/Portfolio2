import {
  Container,
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { setActiveUser } from "./redux/user";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";

export function Login({ name = "n/a", place, dob }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setusername] = useState("");

  const handleChange = (event) => {
    setusername(event.target.value);
  };

  const handlelogin = () => {
    if (username.length > 4) dispatch(setActiveUser({ username, navigate }));
    else toast("username is not valid", { type: "error" });
  };
  return (
    <div className="Login">
      <h1 className="login-heading">Login Form</h1>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form id="contact-form">
              <FormGroup>
                <Label for="contact-form-name">Username</Label>
                <Input
                  type="text"
                  className="contact-inputfields input-box"
                  required
                  minLength="8"
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="contact-form-email">Email:</Label>
                <Input
                  type="email"
                  id="contact-form-email"
                  className="contact-inputfields input-box"
                  placeholder="Email:"
                  required
                  minLength="12"
                />
              </FormGroup>
              <FormGroup>
                <Label for="contact-form-subject">Password</Label>
                <Input
                  type="password"
                  id="contact-form-password"
                  className="contact-inputfields input-box"
                  placeholder="Password"
                  required
                  minLength="6"
                />
              </FormGroup>
              <Button
                onClick={handlelogin}
                id="contact-formbtn"
                type="submit"
                className="contact-send-message checkout-btn"
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
