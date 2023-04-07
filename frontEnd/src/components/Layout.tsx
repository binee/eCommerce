import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, getLoadingData, getCurrentUSer } from "../slices/authSlice";

const Layout: React.FC = (props: any) => {
  const auth : any = useSelector(getCurrentUSer);
  console.log(auth)

  return (
    <>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Online Shopping</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Product">Product</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            {/* {auth._id ? 
            <>
            {auth.isAdmin && <Nav.Link as={Link} to="/admin">Admin</Nav.Link>}
            <Nav.Link as={Link} to="logout">Logout</Nav.Link> </>: 
            <>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            <Nav.Link eventKey={2} as={Link} to='register'>Register</Nav.Link></>
            } */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Online Shopping</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Product">
              Product
            </Nav.Link>
            <Nav.Link as={Link} to="/aboutus">
              About Us
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link> | 
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      {/* <Banner/> */}
      <Container className="md-2">{props.children}</Container>
    </>
  );
};

export default Layout;
