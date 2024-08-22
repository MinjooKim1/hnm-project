import React from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log("login");
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <div className="login-page">
      <div className="login-wrapped">
        <h1>Welcome</h1>
        <div>please enter your details to sign in</div>
        <div className="button-wrap">
          <Button variant="light" size="lg">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </Button>
          <Button variant="light" size="lg">
            <FontAwesomeIcon icon={faGoogle} size="lg" />
          </Button>
          <Button variant="light" size="lg">
            <FontAwesomeIcon icon={faApple} size="lg" />
          </Button>
        </div>
        <div className="or-divider">
          <span>OR</span>
        </div>

        <Form onSubmit={(event) => loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
