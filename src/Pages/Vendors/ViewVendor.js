/** @format */
import HOC from "../../Layout/HOC";
import { Form, FloatingLabel, InputGroup } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const ViewVendor = () => {
  return (
    <>
      <section className="sectionCont">
        <Form>
          <h3>Basic Details</h3>
          <hr />
          <div className="vendor-profile-div">
            <img
              src={
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              }
              alt=""
              className="profile-img"
            />
          </div>

          <Row>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" value={"4578512547"} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" value={"Shirts"} />
              </Form.Group>
            </Col>

            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Grocery name</Form.Label>
                <Form.Control type="text" value={"Grocery"} />
              </Form.Group>
            </Col>

            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Owner's Full Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Store Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>

            <Col xs={12} md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Bio of the Restaurant </Form.Label>
                <FloatingLabel>
                  <Form.Control as="textarea" style={{ height: "100px" }} />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </section>

      <section className="sectionCont mt-3">
        <h3>Working Days</h3>
        <hr />
        <Form>
          <Row>
            <Col xs={12} md={12}>
              <Form.Group className="mb-3">
                <div className="d-flex gap-2 flex-wrap">
                  <Form.Check type={"checkbox"} label={`Monday`} />
                  <Form.Check type={"checkbox"} label={`Tuesday`} />
                  <Form.Check type={"checkbox"} label={`Wednesday`} />
                  <Form.Check type={"checkbox"} label={`Thrusday`} />
                  <Form.Check type={"checkbox"} label={`Friday`} />
                  <Form.Check type={"checkbox"} label={`Saturday`} />
                  <Form.Check type={"checkbox"} label={`Sunday`} />
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </section>

      <section className="sectionCont mt-3">
        <h3>Opening & Closing Time</h3>
        <hr />
        <Form>
          <Row>
            <Col xs={12} md={12}>
              <InputGroup>
                <InputGroup.Radio />
                <Form.Control
                  value="I open and close my restaurant at the same time on all working
                  days"
                  checked={true}
                />
              </InputGroup>
            </Col>
            <Col xs={12} md={12}>
              <InputGroup className="mt-3">
                <InputGroup.Radio />
                <Form.Control value="Seperate day wise timing" checked={true} />
              </InputGroup>
            </Col>
          </Row>
        </Form>
      </section>

      <section className="sectionCont mt-3">
        <h3>Address Details</h3>
        <hr />
        <Row>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Shop/Plot no</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Floor</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Builing/Mail/Complex Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Area</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
      </section>

      <section className="sectionCont mt-3">
        <h3>Bank Account Details</h3>
        <hr />
        <Row>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Account Holder Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
        </Row>
      </section>

      <section className="sectionCont mt-3">
        <h3>Aadhar Card Details</h3>
        <hr />
        <div className="aadhar-images">
          <img
            src="https://buddyloan-wordpress-blog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2024/04/22080806/top-features-of-masked-aadhar-card.webp"
            alt=""
          />
          <img
            src="https://www.paisabazaar.com/wp-content/uploads/2018/06/Aadhaar-helps-the-government-and-the-citizens.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="sectionCont mt-3">
        <h3>PAN Card Details</h3>
        <hr />
        <div className="aadhar-images">
          <img
            src="https://acko-cms.ackoassets.com/PAN_Card_Eligiblity_4012718e40.png"
            alt=""
          />
          <img
            src="https://www.shutterstock.com/image-vector/pan-dummy-logo-template-design-600nw-2313790919.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="sectionCont mt-3">
        <h3>Driving License Details</h3>
        <hr />
        <div className="aadhar-images">
          <img
            src="https://media.istockphoto.com/id/1073597286/vector/driver-license-with-male-photo-identification-or-id-card-template-vector-illustration.jpg?s=612x612&w=0&k=20&c=WkW7yo2wPw9HEfLAqyXqiDMX4Apditfd-bDuf8ENXcU="
            alt=""
          />
          <img
            src="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-women-driver-license-sign-png-image_4911308.png"
            alt=""
          />
        </div>
      </section>

      <section className="sectionCont mt-3">
        <h4>Subscription Plan</h4>
        <hr />
        <Row>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Plan</Form.Label>
              <Form.Control type="text" value={"Advance"} />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" value={"500"} />
            </Form.Group>
          </Col>
     
        </Row>
      </section>
    </>
  );
};

export default HOC(ViewVendor);
