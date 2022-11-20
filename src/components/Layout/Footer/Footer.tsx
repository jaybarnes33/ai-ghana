import Socials from "@/components/Socials/Socials";
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
          <div>
            <Socials />
            <p>&copy; AI Ghana - {new Date().getFullYear()}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
