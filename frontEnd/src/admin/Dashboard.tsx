import React from "react";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import { SidebarData } from "./SidebarData";
import { Container, Row, Col,  Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet, NavLink } from "react-router-dom";

import SideBar from "./SideBar";
const Dashboard = () => {
  // const activeLink = 'red'
  // const normalLink = 'black'
  const activeLink =
    "hover:red mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-red-500";
  const normalLink =
    "hover:blue pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold";
  console.log(SidebarData);
  return (
    <>
    <Container fluid>
      <Row>
      <Col sm={2} xs={4} className="d-flex bg-dark flex-column justify-content-between min-vh-100">
<div>

</div>
<div
          className="text-decoration-none d-flex align-items-center d-sm-inline ms-4 text-white d-none"
          style={{
            maxWidth: '16vw',
            height: "100vh",
            zIndex: "1000",
            borderRight: "1px Solid black",
          }}
        >
          <span className="fs-4">Quick Links</span>
          {SidebarData.map((item, index) => {
            return (
              <div className="fs-4 nav highlighted mt-3 nav-pills flex-cloumn" key={index}>
                <NavLink
                  to={item.path}
                  className={({isActive}) => (isActive ? activeLink : normalLink)}
                >
                  <span className="ml-3 my-1 text-white">{item.icon}</span>
                  <span className="ms-2">{item.title}</span>
                </NavLink>
              </div>
            );
          })}
        </div>

      </Col>
<Col sm={10}><Outlet/></Col>
        {/* <div
          className="d-flex  mh-100 position-sticky flex-column highlighted mb-3 font-weight-bolder text-center p-3 bg-dark"
          style={{
            maxWidth: '16vw',
            height: "100vh",
            zIndex: "1000",
            borderRight: "1px Solid black",
          }}
        >
          <h3 className="light">Quick Links</h3>
          {SidebarData.map((item, index) => {
            return (
              <div className="p-2 highlighted text-muted" key={index}>
                <NavLink
                  to={item.path}
                  className={({isActive}) => (isActive ? activeLink : normalLink)}
                >
                  <span>{item.icon}</span>
                  <span className="ml-3">{item.title}</span>
                </NavLink>
              </div>
            );
          })}
        </div> */}
      </Row>

   
      </Container> 
    </>
  );
};

export default Dashboard;
