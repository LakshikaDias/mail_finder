import React from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import { Container, Card, Button } from "react-bootstrap";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

const MailPage = () => {
  let { id } = useParams();

  const mailData = useSelector((state) => state.mail.value);

  const mailContent = mailData.find((data) => {
    return data.id === id;
  });

  return (
    <>
      <Container>
        <Row>Search..</Row>
        <Row>
          <Col xs={4}>
            <Sidebar />
          </Col>

          <Col xs={8}>
            <Card>
              <Card.Header>
                <h4>{mailContent.subject}</h4>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  {mailContent.author + "<>" + mailContent.email}
                </Card.Title>
                <Card.Text>{mailContent.content}</Card.Text>
                <Button variant="outline-primary">Reply</Button>
                <Button variant="outline-success">Forward</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MailPage;
