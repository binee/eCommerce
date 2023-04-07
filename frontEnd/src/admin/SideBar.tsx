import React from "react";
import SidebarMenu from "react-bootstrap-sidebar-menu";
import { SidebarData } from "./SidebarData";
import { Container, Row, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideBar = () => {
  const activeLink = 'text-danger'
  const normalLink = 'text-white'
  // const activeLink =
  //   "";
  // const normalLink =
  //   "hover:bg-red-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold";
  // console.log(SidebarData);
  return (
    <>
      <Row md={2} xs={1} lg={3} className="g-3">
        <div
          className="d-flex position-sticky flex-column highlighted mb-3 font-weight-bolder text-center p-3 bg-light text-white"
          style={{
            maxWidth: '16vw',
            height: "100vh",
            zIndex: "1000",
            borderRight: "1px Solid black",
          }}
        >
          <h3>Quick Links</h3>
          {SidebarData.map((item, index) => {
            return (
              <div className="p-2 highlighted text-muted" key={index}>
                <Nav.Link
                  as={Link}
                  to={item.path}
                  className={({isActive}): "text-danger" | "text-white" => {
                    return (isActive ? activeLink : normalLink);
                  }}
                >
                  <span>{item.icon}</span>
                  <span className="ml-3">{item.title}</span>
                </Nav.Link>
              </div>
            );
          })}
        </div>
      </Row>
    </>
  );
};

export default Dashboard;
