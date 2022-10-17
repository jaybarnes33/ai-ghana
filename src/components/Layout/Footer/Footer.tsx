import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="py-5">
      <Container>
        <Row>
          <Col lg={3} md={4} sm={6}>
            <h4>AI GHANA</h4>
            <p>Promoting the use of AI in Ghana</p>
          </Col>
          <Col lg={3} md={4} sm={6}>
            <h4>Other Links</h4>
            <Nav className="d-flex flex-column">
              <Nav.Item>Blog</Nav.Item>
              <Nav.Item>Resources</Nav.Item>
            </Nav>
          </Col>{" "}
          <Col lg={3} md={4} sm={6}>
            <h4>Other Links</h4>
            <Nav className="d-flex flex-column">
              <Nav.Item>Blog</Nav.Item>
              <Nav.Item>Resources</Nav.Item>
            </Nav>
          </Col>
          <Col lg={3} md={4} sm={6}>
            {" "}
            <h4>Other Links</h4>
            <Nav className="d-flex flex-column">
              <Nav.Item>Blog</Nav.Item>
              <Nav.Item>Resources</Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
