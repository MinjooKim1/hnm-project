import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
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

        <div className="input-wrap">
          <div>Email</div>
          <input type="text" placeholder="Your email" />
        </div>
        <div className="input-wrap">
          <div>Password</div>
          <input type="text" placeholder="Your password" />
        </div>
        <Button className="login-btn" variant="primary">
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default Login;
