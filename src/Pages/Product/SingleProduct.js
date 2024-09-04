/** @format */
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import HOC from "../../Layout/HOC";
import { getApi, removeApi } from "../../Repository/Repository";
import img from "../../assests/Images/product/4.png";
import img1 from "../../assests/Images/product/1.png";
import img2 from "../../assests/Images/product/2.png";
import img3 from "../../assests/Images/product/3.png";
import { useEffect, useState } from "react";

const SingleProduct = () => {
  const { id } = useParams();
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const fetchHandler = () => {
    getApi({
      url: `api/v1/admin/getProductByProductId/${id}`,
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
        {response?.data?.productImage?.map((img, index) => (
          <div className="img-cont" key={index}>
            <img src={img} alt={`Product ${index + 1}`} className="centerImage" />
          </div>
        ))}

        <Form className="mt-3">
          <Row>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>ID</Form.Label>
                <Form.Control type="text" value={response?.data?.ID} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" value={response?.data?.productName} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" value={response?.data?.brandName} />
              </Form.Group>
            </Col>

            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" min={0} value={response?.data?.originalPrice} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Discounted Active</Form.Label>
                <Form.Control type="text" value={response?.data?.discountActive ? "Active" : "Deactive"} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Discounted Price</Form.Label>
                <Form.Control type="number" min={0} value={response?.data?.discountPrice} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="text" value={response?.data?.stock} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Minimum Order Quantity</Form.Label>
                <Form.Control type="number" min={0} value={response?.data?.minimunOrderUnit} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" value={response?.data?.categoryId?.name} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Sub-category</Form.Label>
                <Form.Control type="text" value={response?.data?.subcategoryId?.name} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="text" value={response?.data?.totalRating} />
              </Form.Group>
            </Col>

            <Col xs={12} md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <FloatingLabel>
                  <Form.Control
                    as="textarea"
                    style={{ height: "100px" }}
                    value={response?.data?.description}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
        </Form>

        <Link to={-1}>
          <Button variant="dark">Back</Button>
        </Link>
      </section >
    </>
  );
};

export default HOC(SingleProduct);
