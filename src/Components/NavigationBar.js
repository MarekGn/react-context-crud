import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";
import { homePaths } from "../Constants/Paths";

export const NavigationBar = () => {
  return (
    <Navbar color="dark">
      <Container>
        <NavbarBrand href={homePaths.HOME1}>Home</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              Add user
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
