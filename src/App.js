import "./App.css";
import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Form1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <Form className="container" onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Label style={{ lineHeight: 1 }} column="sm" sm={1}>
          Country (Incoming)
        </Form.Label>
        <Col sm={2}>
          <Form.Control size="sm" type="email" placeholder="Email" />
        </Col>
        <Form.Label column="sm" sm={1}>
          Country
        </Form.Label>
        <Col sm={2}>
          <Form.Control size="sm" type="email" placeholder="Email" />
        </Col>
        <Form.Label column="sm" sm={1}>
          Country
        </Form.Label>
        <Col sm={2}>
          <Form.Control size="sm" type="email" placeholder="Email" />
        </Col>
        <Form.Label column="sm" sm={1}>
          Country
        </Form.Label>
        <Col sm={2}>
          <Form.Control size="sm" type="email" placeholder="Email" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Form.Label column="sm" sm={1}>
          Country (Incoming)
        </Form.Label>
        <Col sm={2}>
          <Form.Control size="sm" type="email" placeholder="Email" />
        </Col>
        <Form.Label column="sm" sm={1}>
          Country
        </Form.Label>
        <Col sm={2}>
          <Form.Control size="sm" type="email" placeholder="Email" />
        </Col>
        <Form.Label column="sm" sm={1}>
          Country
        </Form.Label>
        <Col sm={2}>
          <Form.Control size="sm" type="email" placeholder="Email" />
        </Col>
        <Form.Label column="sm" sm={1}>
          Country
        </Form.Label>
        <Col sm={2}>
          <Form.Control size="sm" type="email" placeholder="Email" />
        </Col>
      </Form.Row>
      <br />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <h1>This is a form</h1>
          <Form1 />
        </div>
      </>
    );
  }
}

export default App;
