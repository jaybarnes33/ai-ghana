import Head from "next/head";
import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

import Banner from "@/components/Banner";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Banner title="about" image="/about.jpg" />
      <Container>
        <Accordion defaultActiveKey="0" className="my-3" defaultValue="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h2 className="text-dark">
                About <span className="text-danger">AI Ghana</span>
              </h2>
            </Accordion.Header>
            <Accordion.Body>
              <p data-aos="fade-up-left">
                AI GHANA is a non-profit organization, run by the AI Ghana
                community, focused on promoting the use of Artificial
                Intelligence in solving real-world problems in Ghana, Africa and
                beyond.{" "}
              </p>
              <p data-aos="fade-down-right">
                Artificial Intelligence (AI) has become very essential in recent
                times, as it has become one of the main tools used for solving
                major problems we face daily. Ghanaians, and Africans for that
                matter, are faced with a lot of challenges that can be solved
                using AI. However, there is paucity of AI talents in our part of
                the world to take up these challenges.{" "}
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h2 className="text-dark">
                Our <span className="text-danger">Mission</span>
              </h2>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                To provide technical AI skills to students and tech enthusiasts
                to enable them in identifying and solving real problems in their
                communities/organizations using the skills acquired. In five to
                ten years, we aim to be the number one go-to
                organization/community for AI talents. We achieve this through
                the use of MUM:
              </p>
              <ul>
                <li className="my-3">
                  <span className="text-success fw-bold">M</span>entorships: We
                  aim at providing mentorship to students and tech enthusiasts
                  by:
                  <ul>
                    <li>
                      Running one-on-one mentor-mentee sessions resulting in
                      knowledge sharing and acquisition.
                    </li>
                    <li>
                      Adding them to our various research groups where they will
                      collaborate on AI projects to gain relevant skills. There
                      are varied outcomes here including research papers,
                      software applications etc.
                    </li>
                    <li>
                      Connecting the students with partner organizations where
                      they can work on real projects as interns. This results in
                      them being absorbed by these organizations by the end of
                      their studies.
                    </li>
                  </ul>
                </li>
                <li className="my-2">
                  <span className="fw-bold text-success">U</span>niversity
                  Chapters: We seek to create active AI Ghana local chapters in
                  all public universities (and interested private universities)
                  in Ghana where members have regular meetups where they are
                  trained on the various AI concepts. Students will have
                  relevant/ employable AI skills by the time they graduate.
                </li>
                <li className="my-2">
                  <span className="fw-bold text-success">M</span>eetups: We
                  organize conferences / workshops / bootcamps / hackathons with
                  the aim of providing an enabling environment for knowledge
                  sharing, problem solving, and collaborations. Knowledge in
                  areas such as data science, machine learning, deep learning,
                  statistics and mathematics is gained through these activities.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h2 className="text-dark">
                Our <span className="text-danger">Vision</span>
              </h2>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                To provide technical AI skills to students and tech To promote
                the use of artificial intelligence in solving real-world
                problems in Ghana, Africa and beyond.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default About;
