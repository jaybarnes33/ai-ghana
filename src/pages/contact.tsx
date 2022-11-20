import Head from "next/head";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import IconWithText from "@/components/IconWithText";
import Typography from "@/components/Typography";
import Banner from "@/components/Banner";

import { HiLocationMarker } from "react-icons/hi";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  const contacts = [
    {
      icon: <HiLocationMarker />,
      text: "Accra, Ghana",
    },
    {
      icon: <FaEnvelope />,
      text: "mail@aighana.com",
    },
    {
      icon: <BsFillTelephoneFill />,
      text: (
        <>
          +250 790 003 743, <br />
          +233 55 349 4195
        </>
      ),
    },
  ];
  return (
    <>
      <Head>
        <title>Get in Touch</title>
      </Head>
      <Banner title="Contact us" image="/contact.jpg" />
      <Container className="pt-5">
        <Row>
          <Col md={7} className="border-right">
            <Typography
              heading="Send us a message"
              text="Hi there, your feedback means a great deal to us"
            />{" "}
            <Form className="text-capitalize">
              <Form.Group>
                <Form.Label>full name</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group>
                <Form.Label>Your message</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
              <Button
                variant="primary"
                className="d-flex mx-auto m-5"
                style={{ borderRadius: 50 }}
              >
                Share Feedback
              </Button>
            </Form>
          </Col>
          <Col md={5}>
            <Container>
              {contacts.map((contact, key) => (
                <IconWithText
                  text={contact.text}
                  icon={contact.icon}
                  key={`contact-${key}`}
                />
              ))}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
