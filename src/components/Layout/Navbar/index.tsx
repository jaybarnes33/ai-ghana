import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const index = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container className="d-flex align-items-center">
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-5">
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} href="/blog">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default index;
