import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const index = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container className="d-flex align-items-center">
        <Navbar.Brand>
          <Link href="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto gap-5">
            <Nav.Item as={Link} href="/">
              <Link href="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/about"> About</Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/contact"> Contact</Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/blog">Blog</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default index;
