import Head from "next/head";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Banner from "@/components/Banner";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Banner title="about" image="/about.jpg" />
      <Container>
        <Row className="align-items-center">
          <Col className="mt-3">
            <h2
              className="text-primary"
              data-aos="fade-up-right"
              data-aos-delay={200}
            >
              About Us
            </h2>
            <p data-aos="fade-up-left" data-aos-delay={400}>
              AI GHANA is a non-profit organization, run by the AI Ghana
              community, focused on promoting the use of Artificial Intelligence
              in solving real-world problems in Ghana, Africa and beyond.{" "}
            </p>
            <p data-aos="fade-down-right" data-aos-delay={700}>
              Artificial Intelligence (AI) has become very essential in recent
              times, as it has become one of the main tools used for solving
              major problems we face daily. Ghanaians, and Africans for that
              matter, are faced with a lot of challenges that can be solved
              using AI. However, there is paucity of AI talents in our part of
              the world to take up these challenges.{" "}
            </p>
          </Col>
        </Row>
        <Row className="d-flex flex-row-reverse align-items-center">
          <Col>
            <h2 className="text-primary">Our Mission</h2>

            <p data-aos="fade-up-right" data-aos-delay={1000}>
              To provide technical AI skills to students and tech enthusiasts to
              enable them in identifying and solving real problems in their
              communities/organizations using the skills acquired. In five to
              ten years, we aim to be the number one go-to
              organization/community for AI talents. We achieve this through the
              use of MUM:
            </p>
            <ul>
              <li className="my-3" data-aos="fade-down" data-aos-delay={1500}>
                <span className="text-success fw-bold">M</span>entorships: We
                aim at providing mentorship to students and tech enthusiasts by:
                <ul>
                  <li data-aos="fade-right" data-aos-delay={1700}>
                    Running one-on-one mentor-mentee sessions resulting in
                    knowledge sharing and acquisition.
                  </li>
                  <li data-aos="fade-up" data-aos-delay={1900}>
                    Adding them to our various research groups where they will
                    collaborate on AI projects to gain relevant skills. There
                    are varied outcomes here including research papers, software
                    applications etc.
                  </li>
                  <li data-aos="fade-right" data-aos-delay={2300}>
                    Connecting the students with partner organizations where
                    they can work on real projects as interns. This results in
                    them being absorbed by these organizations by the end of
                    their studies.
                  </li>
                </ul>
              </li>
              <li className="my-2" data-aos="fade-down" data-aos-delay={2700}>
                <span className="fw-bold text-success">U</span>niversity
                Chapters: We seek to create active AI Ghana local chapters in
                all public universities (and interested private universities) in
                Ghana where members have regular meetups where they are trained
                on the various AI concepts. Students will have relevant/
                employable AI skills by the time they graduate.
              </li>
              <li className="my-2" data-aos="fade-up" data-aos-delay={3000}>
                <span className="fw-bold text-success">M</span>eetups: We
                organize conferences / workshops / bootcamps / hackathons with
                the aim of providing an enabling environment for knowledge
                sharing, problem solving, and collaborations. Knowledge in areas
                such as data science, machine learning, deep learning,
                statistics and mathematics is gained through these activities.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
