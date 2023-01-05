import React from "react";

import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";

const InboxPage = () => {
  let navigate = useNavigate();

  const mailData = useSelector((state) => state.mail.value);

  const spamMailData = mailData.filter((data) => {
    return data.mailStatus == "spam";
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
            {spamMailData.map((data) => {
              return (
                <div className="d-grid gap-2">
                  <Button
                    onClick={() => {
                      navigate(`/mail/${data.id}`);
                    }}
                  >
                    {data.subject}
                  </Button>
                  <br />
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InboxPage;
