import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Container>
        <Row>
          <Button
            variant="outline-primary"
            onClick={() => {
              navigate("/newMail");
            }}
          >
            Compose
          </Button>
        </Row>
        <Row>
          <Button
            variant="outline-primary"
            onClick={() => {
              navigate("/mail/inbox");
            }}
          >
            Inbox
          </Button>
        </Row>
        <Row>
          <Button variant="outline-primary">Starred</Button>
        </Row>
        <Row>
          <Button variant="outline-primary">Snooozed</Button>
        </Row>
        <Row>
          <Button
            variant="outline-primary"
            onClick={() => {
              navigate("/mail/sent");
            }}
          >
            Sent
          </Button>
        </Row>
        <Row>
          <Button
            variant="outline-primary"
            onClick={() => {
              navigate("/mail/draft");
            }}
          >
            Drafts
          </Button>
        </Row>
        <Row>
          <Button
            variant="outline-primary"
            onClick={() => {
              navigate("/mail/spam");
            }}
          >
            Spam
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Sidebar;
