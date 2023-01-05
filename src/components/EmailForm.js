import React, { useState } from "react";

import { Container, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { sendNewMail } from "../redux/slices/MailSlices";

const EmailForm = () => {
  const [newEmail, setNewEmail] = useState({
    id: Math.floor(Math.random() * 10000),
    author: "",
    email: "",
    subject: "",
    content: "",
    mailStatus: "sent",
  });

  console.log(newEmail, "newEmail"); // ask: its apperar lot of objects

  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Row>
          <h4>Write new Email</h4>
        </Row>
        <Row>
          {/* create and send new mail form */}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Recipients</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@gmail.com"
                onChange={(event) => {
                  setNewEmail({ ...newEmail, email: event.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                placeholder="Name"
                onChange={(event) => {
                  setNewEmail({ ...newEmail, author: event.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="subject"
                onChange={(event) => {
                  setNewEmail({ ...newEmail, subject: event.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={20}
                onChange={(event) => {
                  setNewEmail({ ...newEmail, content: event.target.value });
                }}
              />
            </Form.Group>
          </Form>
        </Row>
        <Button
          onClick={() => {
            dispatch(sendNewMail(newEmail));
          }}
        >
          Send
        </Button>
      </Container>
    </>
  );
};

export default EmailForm;
