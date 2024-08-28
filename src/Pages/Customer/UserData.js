/** @format */
import HOC from "../../Layout/HOC";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getApi } from "../../Repository/Repository";


const UserData = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    getApi({
      url: `api/v1/admin/viewUser/${id}`,
      setResponse,
      setLoading,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <>
      <section className="sectionCont">
        <div className="img-cont mb-3">
          <img
            src={response?.data?.image}
            alt=""
            className="centerImage"
          />
        </div>
        <Row>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={response?.data?.userName} disabled />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="text" value={response?.data?.phone} disabled />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="text" value={response?.data?.email} disabled />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" value={response?.data?.status} disabled />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" value={response?.data?.city} disabled />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Shipping Address</Form.Label>
              <Form.Control type="text" value={response?.data?.city} disabled />
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
