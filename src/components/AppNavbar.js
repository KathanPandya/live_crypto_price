import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const AppNavbar = () => {
  return (
    <div>
      <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Live Crypto Prices</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
