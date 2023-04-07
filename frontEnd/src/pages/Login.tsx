import React, { useRef, useState } from "react";
import {
  Col,
  Button,
  Form,
  Card,
  Container,
  Row,
  Spinner 
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, getLoadingData } from "../slices/authSlice";
import User from "../types/User";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Utility from "../utlis";

type LoginProps = {
    email : 'string',
    password : 'string'
}
const Login:React.FC<LoginProps> = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState<boolean>(false);
    const loading = useSelector(getLoadingData);
    const {
        control,
        handleSubmit,
        resetField,
        formState: { errors ,isDirty, isValid },
      } = useForm({
        defaultValues: {
          email: "",
          password: ""
        },
      });

const login =async (data : any) => {
    setError(false);
    let payload = {
        email : data.email,
        password: data.password
    }
    const check = Utility.checkKeyValue(payload); 
if(check)  {  
    dispatch(loginUser(payload))
    .unwrap()
    .then(() => {
        toast.success('Login Successful', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      navigate("/");
    })
    .catch((err : any) => {
        console.log(err);
        resetField("email");
        resetField("password");
        setError(true);
    });


}

}
  return (
    <Container className="mt-2">
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12} className="col-md-8-offset-md-2">
          <Card className="px-4 shadow rounded">
            <Card.Body>
              <div className="mb-3 mt-md-4">
               <h2>Login</h2>
                <div className="mb-3">
                  <Form noValidate onSubmit={handleSubmit(login)}>
                    {loading === 'pending' &&  <Spinner animation="grow" variant="info" />}
                    {error && <div className="fs-6" style={{color:'red'}}> Invalid Username or Password</div>}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Controller
                        name="email"
                        rules={{ required: true }}
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                          type="email" 
                          placeholder="Enter email"
                            {...field}
                            isInvalid={errors.email}
                          
                          />
                        )}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Enter Email.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicname">
                      <Form.Label>Password</Form.Label>
                      <Controller
                        rules={{ required: true }}
                        control={control}
                        name="password"
                        render={({ field }) => (
                          <Form.Control
                            isInvalid={errors.password}
                            type="password"
                            {...field}
                            placeholder="Enter Password"
                          />
                        )}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please Enter Password.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" disabled={!isDirty && !isValid} type="submit">
                Submit
              </Button>
                  </Form>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
