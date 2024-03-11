import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMysql,
  SiWindows,
  SiAzuredataexplorer,
  SiMicrosoftsqlserver,
  SiJetbrains,
  SiLibreoffice,
  SiMicrosoftoffice,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiMicrosoftoffice/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiLibreoffice/>
      </Col>
    </Row>
  );
}

export default Toolstack;
