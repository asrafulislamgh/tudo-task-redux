import React, { useState } from "react";
import {
  Col,
  Container,
  FormControl,
  Row,
  Button,
  Form,
} from "react-bootstrap";
import UseFirebase from "../hooks/useFirebase";



const Login = () => {
  const [loginInfo, setLoginInfo] = useState({});
  const { handleLogin } = UseFirebase();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginInfo = { ...loginInfo };
    newLoginInfo[field] = value;
    setLoginInfo(newLoginInfo);
  };
  const handleEmailLogin = (e) => {
    e.preventDefault();
    console.log(loginInfo)

    // signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
    //   .then((userInfo) => {
    //     // const user = userInfo.user;
    //     e.target.reset()
    //     navigate("/dashboard");
    //     dispatch(addEmailandPass(loginInfo))
    //     console.log(loginInfo)
    //   }).catch(error => {
    //     console.log(error)
    //   })
    handleLogin(loginInfo.email, loginInfo.password)

  };

  return (
    <div>
      <Container className="justify-content-center my-5">
        <Row className="d-flex justify-content-center text-center">
          <Col style={{ maxWidth: "400px" }}>
            <h3 className="py-3">Login</h3>

            <Form onSubmit={handleEmailLogin}>
              <FormControl
                type="email"
                name="email"
                onBlur={handleOnBlur}
                className="input-field mb-3"
                placeholder="Email"
                aria-label="email"
                aria-describedby="basic-addon2"
                required
              />
              <FormControl
                type="password"
                name="password"
                onBlur={handleOnBlur}
                className="input-field mb-3"
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon2"
                required
              />

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
              </Form.Group>
              <div className="d-grid">
                <Button type="submit" className="btn btn-primary py-3">
                  Login
                </Button>
              </div>


            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
