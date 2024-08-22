/** @format */
import HOC from "../../Layout/HOC";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

const UserData = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="sectionCont">
        <div className="img-cont mb-3">
          <img
            src={
              "https://img.freepik.com/free-photo/portrait-happy-male-with-broad-smile_176532-8175.jpg?t=st=1714041244~exp=1714044844~hmac=ebd5a8df1e46b6ac862eeb6e7e75318c4d2c462f453bc3a8fcf927c81f908e5f&w=1380"
            }
            alt=""
            className="centerImage"
          />
        </div>
        <Row>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={"Faizan"} disabled />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="text" value={"Faizan@gmail.com"} disabled />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="text" value={"8114464299"} disabled />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" value={"Active"} disabled />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" value={""} disabled />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control type="text" value={""} disabled />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="dark" onClick={() => navigate(-1)}>
          Back
        </Button>
      </section>
    </>
  );
};

export default HOC(UserData);
