import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Osman Temel </span>
            from <span className="purple"> Bayburt, Turkiye.</span>
            <br />
            Hello! I am Osman Temel, a 3rd year student at Samsun University Software Engineering. My passion for the world of software development stems from a combination of genuine curiosity and hands-on experience gained through various projects and coursework.
            <br />
            <br />

            Throughout my academic journey, I delved into basic computer science topics, especially excelling in courses such as web programming and embedded systems. Simultaneously, I gained extensive experience in various programming languages and improved my practical skills in software development processes.
            <br />
            <br />

            Taking part in various projects gave me both individual and collaborative working experiences. These efforts improved my analytical thinking and problem-solving skills, allowing me to provide solutions to real-world problems. I also focused on developing project management and communication skills, encouraging effective collaboration between teams.
            <br />
            <br />

            Due to my keen interest in following innovations in the software field, I am determined to constantly learn and develop throughout my career. My special interests are artificial intelligence, web development and embedded systems, and I wish to further specialize in these areas.
         
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Osman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
