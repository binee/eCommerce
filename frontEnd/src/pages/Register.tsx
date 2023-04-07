import React, { useRef, useState } from "react";
import { Col, Button, Form, Card, Container, Row, Image  } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/authSlice";
import User from "../types/User";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Utility from "../utlis";


interface RegisterProps {
  input: {
    User: any;
  };
}
const Register: React.FC<RegisterProps> = () => {
  const [inputs, setInputs] = useState<User[]>({});
  const [error, setError] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors ,isDirty, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phoneNo: "",
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: any) => state.getCurrentUSer);

  const handleInput = (e: string | any) => {
    setInputs((inputs: User[]) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const registerNewUser = (data : any) => {
    let payload = {
        name: data.username,
        email: data.email,
        password: data.password,
        phoneNo: data.phoneNo
      };
      const check = Utility.checkKeyValue(payload); 
if(check)  {  dispatch(registerUser(payload))
    .unwrap()
    .then(() => {
        toast.success('SignUp Successful...please login!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      navigate("/user");
    })
    .catch((err : any) => {
        console.log(err)
      setError(err);
      toast.error(`Error! ${err.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    });
}
  };
  return (
    <Container className="mt-2">
       <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12} className="col-md-8-offset-md-2">
          <Card className="px-4 shadow rounded">
              <Card.Body>
          <div className="mb-3 mt-md-4">
          <Image fluid src="../public/shp.png"/>

                  <div className="mb-3">

            <Form noValidate onSubmit={handleSubmit(registerNewUser)}>
              <Form.Group className="mb-3" controlId="formBasicname">
                <Form.Label>Name</Form.Label>
                <Controller
                  rules={{ required: true }}
                  control={control}
                  name="username"
                  render={({ field }) => (
                    <Form.Control
                      isInvalid={errors.username}
                      type="text"
                      {...field}
                      placeholder="Enter Name"
                    />
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Controller
                  name="email"
                  rules={{ required: true }}
                  control={control}
                  render={({ field }) => (
                    <Form.Control
                      type="email"
                      {...field}
                      isInvalid={errors.email}
                      name="email"
                      placeholder="Enter email"
                    />
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      isInvalid={errors.password}
                      type="password"
                      placeholder="Password"
                    />
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Password.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicContact">
                <Form.Label>Contact Number</Form.Label>
                <Controller
                  name="phoneNo"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Form.Control
                      type="text"
                      {...field}
                      isInvalid={errors.phoneNo}
                      placeholder="Enter Contact Number"
                    />
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Contact Number.
                </Form.Control.Feedback>
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicSeller">
                <Form.Check
                  type="checkbox"
                  label="Seller"
                  name="isSeller"
                  onChange={handleInput}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicBuyer">
                <Form.Check
                  type="checkbox"
                  label="Buyer"
                  name="isBuyer"
                  onChange={handleInput}
                />
              </Form.Group> */}
              <Button variant="primary" disabled={!isDirty && !isValid} type="submit" onClick={registerNewUser}>
                Submit
              </Button>
            </Form>
</div></div>        </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  );
};

export default Register;
