/** @format */
import HOC from "../../Layout/HOC";
import { Form, FloatingLabel, InputGroup } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { getApi, updateApi } from "../../Repository/Repository";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";



const CreateAdminStore = () => {
  const { id } = useParams();
  const [response, setResponse] = useState({});
  const [storelogo, setStoreLogo] = useState('');
  const [adminName, setAdminName] = useState('');
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [storeName, setStoreName] = useState('');
  const [openingHours, setOpeningHours] = useState({});
  const [storeImages, setStoreImages] = useState([]);
  const [sameTimeForAllDays, setSameTimeForAllDays] = useState(true);
  const [timing, setTiming] = useState({ open: "", close: "" });
  const [individualTimings, setIndividualTimings] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchHandler = () => {
    getApi({
      url: `api/v1/admin/store/getAdminStoreById/${id}`,
      setResponse,
      setLoading,
    });
  };

  // Fetch data on mount and when `id` changes
  useEffect(() => {
    fetchHandler();
  }, [id]);





  useEffect(() => {
    if (response?.data) {
      setStoreLogo(response.data.storeLogo || "");
      setAdminName(response.data.vendorName || "");
      setBio(response.data.bio || "");
      setEmail(response.data.email || "");
      setPhone(response.data.adminMobile || "");
      setStoreName(response.data.StoreName || "");
      setOpeningHours(response.data.openingHours);
      setIndividualTimings(response.data.openingHours);
      setStoreImages(response.data.storePhotos || []);
    }
  }, [response]);




  // Function to handle checkbox change
  const handleCheckboxChange = (day) => {
    setOpeningHours((prevHours) => ({
      ...prevHours,
      [day]: {
        ...prevHours[day],
        open: !prevHours[day].open, // Toggle the open state
      },
    }));
  };

  // Function to handle timing change when same time for all days is selected
  const handleSameTimingChange = (field, value) => {
    setTiming((prevTiming) => ({
      ...prevTiming,
      [field]: value,
    }));
  };

  const handleDayTimingChange = (day, type, value) => {
    setOpeningHours(prev => ({
      ...prev,
      [day]: { ...prev[day], [type]: value }
    }));
  };

  const transformOpeningHours = () => {
    console.log('Opening Hours Data:', openingHours); // Log openingHours to verify content
    const transformed = {};
    Object.entries(openingHours).forEach(([day, { open, openingTime, closingTime }]) => {
      if (open) {
        transformed[`${day}[open]`] = open;
        transformed[`${day}[openingTime]`] = openingTime;
        transformed[`${day}[closingTime]`] = closingTime;
      }
    });
    return transformed;
  };





  const payload = () => {
    const formData = new FormData();

    // Append regular fields
    formData.append('adminMobile', phone);
    formData.append('email', email);
    formData.append('StoreName', storeName);
    formData.append('vendorName', adminName);
    formData.append('bio', bio);
    formData.append('storeLogo', storelogo);

    storeImages.forEach((image, index) => {
      formData.append(`storePhotos[${index}]`, image);
    });

    // Add opening hours based on the selected option
    if (sameTimeForAllDays) {
      Object.keys(openingHours).forEach((day) => {
        formData.append(`${day}[open]`, openingHours[day].open);
        formData.append(`${day}[openingTime]`, timing.open);
        formData.append(`${day}[closingTime]`, timing.close);
      });
    } else {
      const transformedHours = transformOpeningHours();
      console.log('Transformed Hours:', transformedHours); // Debug log
      Object.entries(transformedHours).forEach(([key, value]) => {
        formData.append(key, value);
      });
    }
    return formData;
  };




  const updateHandler = (e) => {
    const formData = payload();
    e.preventDefault();
    updateApi({
      url: `api/v1/admin/store/updateBasicDetails/${id}`,
      payload: formData,
      setLoading,
      successMsg: "Updated",
    });
    fetchHandler()
  };



  return (
    <>
      <button className="submitBtn" onClick={() => navigate(-1)} style={{ marginBottom: "30px" }}>
        back
      </button>

      <section className="sectionCont">
        <Form>
          <h3>Basic Details</h3>
          <hr />
          <Row>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
            </Col>

            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Store name</Form.Label>
                <Form.Control type="text" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
              </Form.Group>
            </Col>

            <Col xs={12} md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Owner's Full Name</Form.Label>
                <Form.Control type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} />
              </Form.Group>
            </Col>
            <Col xs={12} md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Bio </Form.Label>
                <Form.Control as="textarea" value={bio} onChange={(e) => setBio(e.target.value)} />
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
                  {openingHours && Object.entries(openingHours).map(([day, { open }]) => (
                    <Form.Check
                      key={day}
                      type="checkbox"
                      label={day.charAt(0).toUpperCase() + day.slice(1)}
                      checked={open}
                      onChange={() => handleCheckboxChange(day)}
                    />
                  ))}
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
                <InputGroup.Radio
                  checked={sameTimeForAllDays}
                  onChange={() => setSameTimeForAllDays(true)}
                />
                <Form.Control
                  value="I open and close my restaurant at the same time on all working days"
                  readOnly
                />
              </InputGroup>
            </Col>
            {sameTimeForAllDays && (
              <Row className="mt-3">
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Opening Time</Form.Label>
                    <Form.Control
                      type="time"
                      value={timing.open}
                      onChange={(e) => handleSameTimingChange('open', e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Closing Time</Form.Label>
                    <Form.Control
                      type="time"
                      value={timing.close}
                      onChange={(e) => handleSameTimingChange('close', e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            )}
            <Col xs={12} md={12}>
              <InputGroup className="mt-3">
                <InputGroup.Radio
                  checked={!sameTimeForAllDays}
                  onChange={() => setSameTimeForAllDays(false)}
                />
                <Form.Control value="Seperate day wise timing" checked={true} />
              </InputGroup>
            </Col>
            {!sameTimeForAllDays && (
              <Row className="mt-3">
                {Object.entries(openingHours).map(([day, { open, openingTime, closingTime }]) => (
                  open && (
                    <Col xs={12} md={6} key={day}>
                      <Form.Group className="mb-3">
                        <Form.Label>{day.charAt(0).toUpperCase() + day.slice(1)} Opening Time</Form.Label>
                        <Form.Control
                          type="time"
                          value={openingTime}
                          onChange={(e) => handleDayTimingChange(day, 'openingTime', e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>{day.charAt(0).toUpperCase() + day.slice(1)} Closing Time</Form.Label>
                        <Form.Control
                          type="time"
                          value={closingTime}
                          onChange={(e) => handleDayTimingChange(day, 'closingTime', e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  )
                ))}
              </Row>
            )}
          </Row>
        </Form>
      </section>
      <section className="sectionCont mt-3">
        <h3>Store Logo Details</h3>
        <hr />

        <div className="aadhar-images">
          <img
            src={storelogo}
            alt=""
          />
        </div>
      </section>
      <section className="sectionCont mt-3">
        <h3>Store Photos Details</h3>
        <hr />

        <div className="aadhar-images">
          {storeImages?.map((img, index) => (
            <img
              src={img}
              alt=""
            />
          ))}
        </div>
      </section>

      <button className="submitBtn" onClick={updateHandler} style={{ marginBottom: "30px", marginTop: '20px' }}>
        submit
      </button>

    </>
  );
};

export default HOC(CreateAdminStore);
