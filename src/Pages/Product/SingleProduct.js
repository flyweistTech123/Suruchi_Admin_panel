/** @format */
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HOC from "../../Layout/HOC";
import img from "../../assests/Images/product/4.png";
import img1 from "../../assests/Images/product/1.png";
import img2 from "../../assests/Images/product/2.png";
import img3 from "../../assests/Images/product/3.png";

const SingleProduct = () => {
  return (
    <>
      <section className="sectionCont">
        <div className="img-cont">
          <img src={img} alt="" className="centerImage" />
          <img src={img1} alt="" className="centerImage" />
          <img src={img2} alt="" className="centerImage" />
          <img src={img3} alt="" className="centerImage" />
        </div>

        <Form className="mt-3">
          <Row>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" value={1} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" value={"Men Black raglan jacket"} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" value={"H&M"} />
              </Form.Group>
            </Col>

            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" min={0} value={10000} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Discounted Price</Form.Label>
                <Form.Control type="number" min={0} value={2000} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Product Size</Form.Label>
                <Form.Control type="text" value="M" />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Minimum Order Quantity</Form.Label>
                <Form.Control type="number" min={0} value={2} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" value={"Men"} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Sub-category</Form.Label>
                <Form.Control type="text" value={"Shirts"} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="text" value={5} />
              </Form.Group>
            </Col>

            <Col xs={12} md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <FloatingLabel>
                  <Form.Control
                    as="textarea"
                    style={{ height: "100px" }}
                    value={
                      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. "
                    }
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <Link to={-1}>
          <Button variant="dark">Back</Button>
        </Link>
      </section>
    </>
  );
};

export default HOC(SingleProduct);
