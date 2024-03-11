import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import suicide from "../../Assets/Projects/yapay-zeka.jpg";
import emotion from "../../Assets/Projects/github.webp";
import editor from "../../Assets/Projects/malicious.webp";
import chatify from "../../Assets/Projects/storeapp.jpg";
import leaf from "../../Assets/Projects/ai.jpeg";
import bitsOfCode from "../../Assets/Projects/library.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Store App Project"
              description="REACT.JS with StoreApp is an e-commerce application where users can view various products and comment on these products. The project offers to provide a summarized e-commerce experience including product management and user feedback. "
              ghLink="https://github.com/osmantemel/storeapp-project-frontend/tree/main/frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Library App Project"
              description="ASP.NET MVC .This project includes a library management system. Users can view, add, update and delete books. Admin users have the authority to manage books. "
              ghLink="https://github.com/osmantemel/library-App/tree/main/libbApp.FullStack"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Android App Malicious Anlysis"
              description="Artificial intelligence supported web application about vulnerability analysis in Mobile Applications"
              ghLink="https://github.com/osmantemel/Android-App-Malicious-anlysis"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Artificial İntelligence"
              description="Basic Exercises on Machine Learning and Deep Learning"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Pose App AI"
              description="This project involves real-time pose estimation using TensorFlow.js and the Teachable Machine Pose model. Using the webcam, this application allows the user's body movements to be recorded daily, reflecting the display of predictions in the order of poses, as well as controlling a moving box with the arrow keys."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="FOR MORE"
              ghLink="https://github.com/osmantemel"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
