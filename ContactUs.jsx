import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export function ContactUs() {
  return (
    <div
      className="container py-5"
      style={{
        backgroundColor: "#000000",
        color: "#fff",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Row className="align-items-center justify-content-center">
        <Col md={5} className="text-center mb-4 mb-md-0">
          <img src="img1.svg" style={{ width: "100%", maxWidth: "350px" }} />
        </Col>
        <Col md={6}>
          <h2 className="mb-4 fw-bold">Contact Us</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your message..."
              />
            </Form.Group>
            <Button
              style={{ backgroundColor: "#e3080f", borderColor: "#db1313" }}
              type="submit"
            >
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
