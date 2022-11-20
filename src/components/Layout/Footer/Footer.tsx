import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="py-5">
      <Container>
        <div className="d-flex flex-col flex-md-row justify-content-between">
          <div>
            <h4>AI GHANA</h4>
            <p>Promoting the use of AI in Ghana</p>
          </div>
          <p>&copy; AI Ghana - {new Date().getFullYear()}</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
