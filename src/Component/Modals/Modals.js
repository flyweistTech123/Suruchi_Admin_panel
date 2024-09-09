/** @format */

import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal, Row, Col } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { createApi, getApi, updateApi } from "../../Repository/Repository";
import { IoCloseSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";


const CreateBanner = ({ show, handleClose, edit, id, fetchApi, data }) => {
  const [type, setType] = useState(data?.type || '');
  const [desc, setDesc] = useState(data?.desc || '');
  const [image, setImage] = useState(data?.image || '');
  const [imagePreview, setImagePreview] = useState(data?.image || '');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (edit && data) {
      setType(data?.type || "");
      setDesc(data?.desc || "");
      setImage(data.image || "");
      setImagePreview(data.image || "");
    } else {
      setType("");
      setDesc("");
      setImage("");
      setImagePreview("");
    }
  }, [edit, data]);


  const resetForm = () => {
    setType("");
    setDesc("");
    setImage("");
    setImagePreview("");
  };



  const fd = new FormData();
  fd.append("type", type);
  fd.append("desc", desc);
  fd.append("image", image);

  const additionalFunctions = [handleClose, fetchApi];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/Banner/addBanner",
      payload: fd,
      setLoading,
      successMsg: "Created",
      additionalFunctions,
    });
    resetForm();
  };


  const updateHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("type", type);
    fd.append("desc", desc);
    fd.append("image", image);

    updateApi({
      url: `api/v1/Banner/updateBanner/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
    resetForm();
  };



  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {edit ? "Edit Banner" : "Add Banner"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={edit ? updateHandler : createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Selected"
                style={{ width: "100%", height: '300px', marginTop: "10px" }}
              />
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select your preference</option>
              <option value="Top">Top</option>
              <option value="Bottom">Bottom</option>
              <option value="LOGIN">Login</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
const CreateType = ({ show, handleClose, edit, id, fetchApi, data }) => {
  const [type, setType] = useState(data?.gender || '');
  const [desc, setDesc] = useState(data?.desc || '');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (edit && data) {
      setType(data?.gender || "");
      setDesc(data?.desc || "");
    } else {
      setType("");
      setDesc("");
    }
  }, [edit, data]);


  const resetForm = () => {
    setType("");
    setDesc("");
  };



  const fd = {
    gender: type,
    desc: desc
  }
  const additionalFunctions = [handleClose, fetchApi];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/admin/createGender",
      payload: fd,
      setLoading,
      successMsg: "Created",
      additionalFunctions,
    });
    resetForm();
  };


  const updateHandler = (e) => {
    e.preventDefault();
    const fd = {
      gender: type,
      desc: desc
    }

    updateApi({
      url: `api/v1/admin/updateGender/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
    resetForm();
  };



  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {edit ? "Edit Type" : "Add Type"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={edit ? updateHandler : createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const CreateCategory = ({ show, handleClose, edit, id, fetchApi, data }) => {

  const [name, setName] = useState(data?.name || '');
  const [type, setType] = useState(data?.gender || '');
  const [image, setImage] = useState(data?.image || '');
  const [imagePreview, setImagePreview] = useState(data?.image || '');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);


  // Add useEffect to update state when `data` prop changes
  useEffect(() => {
    if (edit && data) {
      setName(data.name || "");
      setType(data.gender || "");
      setImage(data.image || "");
      setImagePreview(data.image || "");
    } else {
      setName("");
      setType("");
      setImage("");
      setImagePreview("");
    }
  }, [edit, data]); // This effect runs whenever the `data` prop changes



  const resetForm = () => {
    setName("");
    setType("");
    setImage("");
    setImagePreview("");
  };





  const fd = new FormData();
  fd.append("name", name);
  fd.append("gender", type);
  fd.append("image", image);

  const additionalFunctions = [handleClose, fetchApi];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/Category/addCategory",
      payload: fd,
      setLoading,
      successMsg: "Created",
      additionalFunctions,
    });
    resetForm();
  };


  const updateHandler = (e) => {
    e.preventDefault();
    updateApi({
      url: `api/v1/Category/updateCategory/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
    resetForm();
  };

  const fetchHandler = () => {
    getApi({
      url: "api/v1/admin/getAllGenders",
      setLoading,
      setResponse: setResponse,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);


  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {" "}
          {edit ? "Edit Category" : " Add Category"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={edit ? updateHandler : createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Selected"
                style={{ width: "100%", height: '', marginTop: "10px" }}
              />
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Type</Form.Label>
            <Form.Select
              value={type}
              onChange={(e) => {
                const selectedType = response?.data?.find(type => type?.gender === e.target.value);
                // setCategoryId(selectedCategory?._id);
                setType(e.target.value);
              }}
            >
              <option>Select Type</option>
              {response?.data?.map(type => (
                <option key={type?._id} value={type?.gender}>{type?.gender}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <button className="submitBtn" type="submit">
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const EditVendorStatus = ({ show, handleClose, id }) => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);


  const data = {
    kycStatus: status,
    kycId: id
  }

  const additionalFunctions = [handleClose];


  const updateHandler = (e) => {
    e.preventDefault();
    updateApi({
      url: `api/v1/kyc/vendorKycVerification`,
      payload: data,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
  };
  console.log(id, "akda")
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Change KYC Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value=''>Select your preference</option>
              <option value="PENDING">Pending</option>
              <option value="APPROVED">Approved</option>
              <option value="REJECT">Reject</option>
            </Form.Select>
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const CreateSubCategory = ({ show, handleClose, edit, id, fetchApi, data }) => {
  const [name, setName] = useState(data?.name || '');
  const [image, setImage] = useState(data?.image || '');
  const [categoryid, setCategoryId] = useState(data?.categoryId._id || '');
  const [imagePreview, setImagePreview] = useState(data?.image || '');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [categoryName, setCategoryName] = useState(data?.categoryId.name || null);



  // Add useEffect to update state when `data` prop changes
  useEffect(() => {
    if (data) {
      setName(data.name || "");
      setImage(data.image || "");
      setImagePreview(data.image || "");
      setCategoryId(data?.categoryId._id || "");
      setCategoryName(data?.categoryId.name || "");
    }
  }, [data]); // This effect runs whenever the `data` prop changes


  const resetForm = () => {
    setName("");
    setImage("");
    setImagePreview("");
  };

  const fd = new FormData();
  fd.append("name", name);
  fd.append("image", image);
  fd.append("categoryId", categoryid);

  const additionalFunctions = [handleClose, fetchApi];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/SubCategory/addSubcategory",
      payload: fd,
      setLoading,
      successMsg: "Created",
      additionalFunctions,
    });
    resetForm();
  };

  const updateHandler = (e) => {
    e.preventDefault();
    updateApi({
      url: `api/v1/SubCategory/updateSubcategory/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
    resetForm();
  };


  const fetchHandler = () => {
    getApi({
      url: "api/v1/Category/allCategory",
      setLoading,
      setResponse: setResponse,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);


  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {" "}
          {edit ? "Edit Sub Category" : "Create Sub Category"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={edit ? updateHandler : createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Selected"
                style={{ width: "100%", height: '', marginTop: "10px" }}
              />
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={categoryName}
              onChange={(e) => {
                const selectedCategory = response?.data?.find(category => category?.name === e.target.value);
                setCategoryId(selectedCategory?._id);
                setCategoryName(e.target.value);
              }}
            >
              <option>Select Category</option>
              {response?.data?.map(category => (
                <option key={category?._id} value={category?.name}>{category?.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <button className="submitBtn" type="submit">
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const CreateNotification = ({ show, handleClose, fetchApi }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [total, setTotal] = useState('ALL');
  const [sendTo, setSendTo] = useState('');

  const resetForm = () => {
    setTitle("");
    setBody("");
    setSendTo("");
  };

  const data = {
    sendTo: sendTo,
    total: total,
    title: title,
    body: body
  };

  const additionalFunctions = [handleClose, fetchApi];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/notification/sendNotification",
      payload: data,
      setLoading: () => { },
      successMsg: "Notification Created",
      additionalFunctions,
    });
    resetForm();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create Notification</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <FloatingLabel label="Description">
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Send To</Form.Label>
            <Form.Select
              value={sendTo}
              onChange={(e) => setSendTo(e.target.value)}
              required
            >
              <option value="">Select User type</option>
              <option value="USER">User</option>
              <option value="VENDOR">Vendor</option>
            </Form.Select>
          </Form.Group>
          <button className="submitBtn" type="submit">
            Send
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const CreateSubscription = ({ show, handleClose, edit, id, name, fetchApi, data }) => {
  const [subscriptionData, setSubscriptionData] = useState({
    name: data?.name || '',
    monthly: data?.monthly || '',
    quarterly: data?.quarterly || '',
    halfYearly: data?.halfYearly || '',
    yearly: data?.yearly || '',
    discountmonthly: data?.discounts?.monthlyDiscount || '',
    discountquarterly: data?.discounts?.quarterlyDiscount || '',
    discounthalfYearly: data?.discounts?.halfYearlyDiscount || '',
    discountyearly: data?.discounts?.yearlyDiscount || '',
    data: data?.data || [],
  });

  const [adddiscount, setSetDiscount] = useState('');

  useEffect(() => {
    if (edit && data) {
      setSubscriptionData({
        name: data.name || '',
        monthly: data.monthly || '',
        quarterly: data.quarterly || '',
        halfYearly: data.halfYearly || '',
        yearly: data.yearly || '',
        discountmonthly: data?.discounts?.monthlyDiscount || '',
        discountquarterly: data?.discounts?.quarterlyDiscount || '',
        discounthalfYearly: data?.discounts?.halfYearlyDiscount || '',
        discountyearly: data?.discounts?.yearlyDiscount || '',
        data: data.data || [],
      });
    }
    else {
      setSubscriptionData({
        name: "",
        monthly: "",
        quarterly: "",
        halfYearly: "",
        yearly: "",
        discountmonthly: "",
        discountquarterly: "",
        discounthalfYearly: "",
        discountyearly: "",
        data: [],
      });
    }
  }, [edit, data]);


  const [newFeature, setNewFeature] = useState({ features: "", count: 0 });
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setSubscriptionData({
      name: "",
      monthly: "",
      quarterly: "",
      halfYearly: "",
      yearly: "",
      discountmonthly: "",
      discountquarterly: "",
      discounthalfYearly: "",
      discountyearly: "",
      data: [],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubscriptionData({ ...subscriptionData, [name]: value });
  };
  const handleNewFeatureChange = (e) => {
    const { name, value } = e.target;
    setNewFeature({ ...newFeature, [name]: value });
  };

  const addFeature = () => {
    if (newFeature.features && newFeature.count >= 0) {
      setSubscriptionData({
        ...subscriptionData,
        data: [...subscriptionData.data, { ...newFeature, count: parseInt(newFeature.count, 10) }],
      });
      setNewFeature({ features: "", count: 0 });
    }
  };

  const removeFeature = (index) => {
    setSubscriptionData({
      ...subscriptionData,
      data: subscriptionData.data.filter((_, i) => i !== index),
    });
  };

  const payload = {
    name: subscriptionData.name,
    monthly: parseFloat(subscriptionData.monthly),
    quarterly: parseFloat(subscriptionData.quarterly),
    halfYearly: parseFloat(subscriptionData.halfYearly),
    yearly: parseFloat(subscriptionData.yearly),
    data: subscriptionData.data.map((item) => ({
      features: item.features,
      count: parseInt(item.count, 10),
    })),
  };



  const additionalFunctions = [handleClose, fetchApi];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/admin/Plans/create",
      payload: payload,
      setLoading,
      successMsg: "Created",
      additionalFunctions,
    });
    resetForm();
  };


  const createHandler1 = (e) => {
    e.preventDefault();
    const payload1 = {
      monthlyDiscount: parseFloat(subscriptionData.discountmonthly),
      quarterlyDiscount: parseFloat(subscriptionData.discountquarterly),
      halfYearlyDiscount: parseFloat(subscriptionData.discounthalfYearly),
      yearlyDiscount: parseFloat(subscriptionData.discountyearly),
    };
    createApi({
      url: `api/v1/admin/plans/addDiscountToPlan/${name}`,
      payload: payload1,
      setLoading,
      successMsg: "Created",
      additionalFunctions,
    });
    resetForm();
  };


  const updateHandler = (e) => {
    e.preventDefault();
    // Use your update API function with payload
    updateApi({
      url: `api/v1/admin/Plans/update/${id}`,
      payload: payload,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
    resetForm();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {edit ? "Edit Subscription" : "Create New Subscription"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={edit ? updateHandler : createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Plan Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={subscriptionData.name}
              onChange={handleChange}
              placeholder="Enter plan name (e.g., Basic, pro, Premium, Advance)"
              required
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Monthly Price</Form.Label>
                <Form.Control
                  type="number"
                  name="monthly"
                  value={subscriptionData.monthly}
                  onChange={handleChange}
                  placeholder="Enter monthly price"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Quarterly Price</Form.Label>
                <Form.Control
                  type="number"
                  name="quarterly"
                  value={subscriptionData.quarterly}
                  onChange={handleChange}
                  placeholder="Enter quarterly price"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Half-Yearly Price</Form.Label>
                <Form.Control
                  type="number"
                  name="halfYearly"
                  value={subscriptionData.halfYearly}
                  onChange={handleChange}
                  placeholder="Enter half-yearly price"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Yearly Price</Form.Label>
                <Form.Control
                  type="number"
                  name="yearly"
                  value={subscriptionData.yearly}
                  onChange={handleChange}
                  placeholder="Enter yearly price"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          {edit &&
            <>

              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Discount Monthly Price</Form.Label>
                    <Form.Control
                      type="number"
                      name="discountmonthly"
                      value={subscriptionData.discountmonthly}
                      onChange={handleChange}
                      placeholder="Enter monthly price"
                      // required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Discount Quarterly Price %</Form.Label>
                    <Form.Control
                      type="number"
                      name="discountquarterly"
                      value={subscriptionData.discountquarterly}
                      onChange={handleChange}
                      placeholder="Enter quarterly price"
                      // required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Discount Half-Yearly Price</Form.Label>
                    <Form.Control
                      type="number"
                      name="discounthalfYearly"
                      value={subscriptionData.discounthalfYearly}
                      onChange={handleChange}
                      placeholder="Enter half-yearly price"
                      // required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Discount Yearly Price</Form.Label>
                    <Form.Control
                      type="number"
                      name="discountyearly"
                      value={subscriptionData.discountyearly}
                      onChange={handleChange}
                      placeholder="Enter yearly price"
                      // required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="discountPriceplan">
                <span>
                  Discounted Price Monthly - {data?.discountedMonthlyPrice}Rs
                </span>
                <span>
                  Discounted Price Quarterly - {data?.discountedQuarterlyPrice}Rs
                </span>
                <span>
                  Discounted Price Half-Yearly - {data?.discountedHalfYearlyPrice}Rs
                </span>
                <span>
                  Discounted Price Yearly - {data?.discountedYearlyPrice}Rs
                </span>
              </div>

              <Button variant="secondary" onClick={createHandler1} style={{ marginBottom: '10px', marginTop:'10px' }}>
                Add Discount price
              </Button>
            </>
          }

          <h5>Features</h5>
          {subscriptionData.data.map((feature, index) => (
            <div key={index} className="feature-item">
              <span>
                {feature.features} - {feature.count}
              </span>
              <IoCloseSharp onClick={() => removeFeature(index)} style={{ cursor: 'pointer' }} color="red" size={25} />
            </div>
          ))}
          <h6>Add New Feature</h6>
          <Form.Group className="mb-3">
            <Form.Label>Feature Name</Form.Label>
            <Form.Control
              type="text"
              name="features"
              value={newFeature.features}
              onChange={handleNewFeatureChange}
              placeholder="Enter feature name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Feature Count</Form.Label>
            <Form.Control
              type="number"
              name="count"
              value={newFeature.count}
              onChange={handleNewFeatureChange}
              min={0}
              placeholder="Enter feature count"
            />

            <Button variant="secondary" onClick={addFeature} style={{ marginTop: '10px' }}>
              Add Feature
            </Button>
          </Form.Group>


          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};


const CreateFaq = ({ show, handleClose, edit, id, fetchApi, data }) => {
  const [question, setQuestion] = useState(data?.question || '');
  const [answer, setAnswer] = useState(data?.answer || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setQuestion(data?.question || "");
      setAnswer(data?.answer || "");
    }
  }, [data]);

  const resetForm = () => {
    setQuestion("");
    setAnswer("");
  };

  const fd = {
    question: question,
    answer: answer
  }

  const additionalFunctions = [handleClose, fetchApi];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/static/faq/createFaq",
      payload: fd,
      setLoading,
      successMsg: "Created",
      additionalFunctions,
    });
    resetForm();
  };

  const updateHandler = (e) => {
    e.preventDefault();
    updateApi({
      url: `api/v1/static/faq/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
    resetForm();
  };




  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {" "}
          {edit ? "Edit FAQs" : " Add New FAQs"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={edit ? updateHandler : createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Question</Form.Label>
            <Form.Control type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer</Form.Label>
            <FloatingLabel>
              <Form.Control as="textarea" style={{ height: "100px" }} value={answer} onChange={(e) => setAnswer(e.target.value)} />
            </FloatingLabel>
          </Form.Group>

          <button className="submitBtn" type="submit">
            Submit
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const EditReview = ({ show, handleClose, id, ids, fetchApi, data }) => {
  const [rating, setRating] = useState(data?.rating || '');
  const [comment, setComment] = useState(data?.comment || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setRating(data?.rating || "");
      setComment(data?.comment || "");
    }
  }, [data]);

  const resetForm = () => {
    setRating("");
    setComment("");
  };

  const fd = {
    rating: rating,
    comment: comment
  }

  const additionalFunctions = [handleClose, fetchApi];

  const updateHandler = (e) => {
    e.preventDefault();
    updateApi({
      url: `api/v1/admin/Product/updateProductReview/${id}/${ids}`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
    resetForm();
  };




  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {" "}
          Edit Rating
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Comment</Form.Label>
            <FloatingLabel>
              <Form.Control as="textarea" style={{ height: "100px" }} value={comment} onChange={(e) => setComment(e.target.value)} />
            </FloatingLabel>
          </Form.Group>

          <button className="submitBtn" type="submit">
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const CreateAdminStore = ({ show, handleClose, fetchApi }) => {
  const [storeName, setStoreName] = useState('');
  const [loading, setLoading] = useState(false);


  const resetForm = () => {
    setStoreName("");
  };

  const fd = {
    StoreName: storeName,
  }

  const additionalFunctions = [handleClose, fetchApi];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/Admin/store/addAdminStore",
      payload: fd,
      setLoading,
      successMsg: "Created",
      additionalFunctions,
    });
    resetForm();
  };


  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Store
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Store Name</Form.Label>
            <Form.Control type="text" value={storeName} onChange={(e) => setStoreName(e.target.value)} />
          </Form.Group>
          <button className="submitBtn" type="submit">
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const CreateBlog = ({ show, handleClose, edit, id, fetchApi, data }) => {
  const [name, setName] = useState(data?.name || '');
  const [desc, setDesc] = useState(data?.desc || '');
  const [location, setLocation] = useState(data?.locationOfBlog || '');
  const [locationId, setLocationId] = useState('');
  const [image, setImage] = useState(data?.blogImage || []);
  const [loading, setLoading] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [imgid, setImageId] = useState('')
  const [viewimg, setViewImage] = useState('')
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (edit && data) {
      setName(data?.name || "");
      setDesc(data?.desc || "");
      setLocation(data?.locationOfBlog || '');
      setImage(data.blogImage || []);
    }
    else {
      setName('');
      setDesc('');
      setImage([]);
      setLocation('');
    }
  }, [edit, data]);

  const resetForm = () => {
    setName("");
    setDesc("");
    setLocation("");
    setImage([]); // Clear image after form reset
  };

  // Handle new images by appending them to the existing state
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImage([...image, ...selectedFiles]);
  };

  // Prepare FormData including all images


  const fd = new FormData();
  fd.append("name", name);
  fd.append("desc", desc);
  fd.append("locationOfBlog", location);
  image.forEach((img) => {
    fd.append("blogImages", img instanceof File ? img : img.img);
  });

  const additionalFunctions = [handleClose, fetchApi];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/admin/blog/blogAdd",
      payload: fd,
      setLoading,
      successMsg: "Created",
      additionalFunctions,
    });
    resetForm();
  };

  const updateHandler = (e) => {
    e.preventDefault();
    const fd = {
      name: name,
      desc: desc,
      locationOfBlog: location
    }
    updateApi({
      url: `api/v1/admin/blog/${id}/content`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
    resetForm();
  };


  const fetchHandler = () => {
    getApi({
      url: "api/getCitiesWithOutPagination",
      setLoading,
      setResponse: setResponse,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);




  return (
    <Modal show={show} onHide={handleClose} centered>
      <UpdateBlogImage
        show={show1}
        handleClose={() => setShow1(false)}
        id={id}
        imgid={imgid}
        fetchApi={fetchApi}
        handleClose1={handleClose}
        img={viewimg}
      />
      <AddBlogImage
        show={show2}
        handleClose={() => setShow2(false)}
        id={id}
        fetchApi={fetchApi}
        handleClose1={handleClose}
      />
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {edit ? "Edit Blog" : "Add Blog"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={edit ? updateHandler : createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            {edit ?
              ""
              :
              <Form.Control
                type="file"
                multiple // Allow multiple file selection
                onChange={handleImageChange}
              />
            }
            <div className="imagePreview" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {image.map((img, index) => (
                <div key={index} className="imagePreview1">
                  <img
                    src={img instanceof File ? URL.createObjectURL(img) : img.img}
                    alt="Selected"
                    style={{ width: "100px", height: '100px', objectFit: 'cover' }}
                  />
                  <div className="overlay">
                    <div className="overlay-content" onClick={() => {
                      setImageId(img._id);
                      setShow1(true);
                      setViewImage(img.img)
                    }}>
                      <MdEdit color="#ffffff" size={20} />
                      <span>update</span>
                    </div>
                  </div>
                </div>
              ))}
              {edit ?
                <div className="imagePreview2"
                  onClick={() => {
                    setShow2(true);
                  }}>
                  Add Image
                </div>

                :
                ""
              }
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Select
              value={location}
              onChange={(e) => {
                const selectedCity = response?.data?.find(city => city?.name === e.target.value);
                setLocationId(selectedCity?._id);
                setLocation(e.target.value);
              }}
            >
              <option>Select City</option>
              {response?.data?.map(city => (
                <option key={city?._id} value={city?.name}>{city?.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
const AddBlogImage = ({ show, handleClose, id, fetchApi, handleClose1 }) => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setImage([]); // Clear image after form reset
  };

  // Handle new images by appending them to the existing state
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImage([...image, ...selectedFiles]);
  };

  // Prepare FormData including all images


  const fd = new FormData();
  image.forEach((img) => {
    fd.append("images", img instanceof File ? img : img.img);
  });

  const additionalFunctions = [handleClose, fetchApi, handleClose1];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: `api/v1/admin/addNewImageToBlog/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Added Image",
      additionalFunctions,
    });
    resetForm();
  };


  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Blog Image
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              multiple // Allow multiple file selection
              onChange={handleImageChange}
            />
            <div className="imagePreview" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {image.map((img, index) => (
                <div key={index} className="imagePreview1">
                  <img
                    src={img instanceof File ? URL.createObjectURL(img) : img.img}
                    alt="Selected"
                    style={{ width: "100px", height: '100px', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Add"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const UpdateBlogImage = ({ show, handleClose, id, imgid, fetchApi, handleClose1, img }) => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setImage('');
  };

  const additionalFunctions = [handleClose, fetchApi, handleClose1];

  const updateHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", image);
    updateApi({
      url: `api/v1/admin/blog/${id}/image/${imgid}`,
      payload: fd,
      setLoading,
      successMsg: "Image Updated",
      additionalFunctions,
    });
    resetForm();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Image
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              // multiple // Allow multiple file selection
              onChange={(e) => setImage(e.target.files[0])}
            />
            <div className="imagePreview" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <div className="imagePreview1">
                <img
                  src={image instanceof File ? URL.createObjectURL(image) : img}
                  alt="Selected"
                  style={{ width: "100%", height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};


const CreateEvent = ({ show, handleClose, edit, id, fetchApi, data }) => {
  const [name, setName] = useState(data?.name || '');
  const [desc, setDesc] = useState(data?.desc || '');
  const [location, setLocation] = useState(data?.locationOfEvent || '');
  const [locationId, setLocationId] = useState('');
  const [image, setImage] = useState(data?.eventImage || []);
  const [loading, setLoading] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [imgid, setImageId] = useState('')
  const [viewimg, setViewImage] = useState('')
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (edit && data) {
      setName(data?.name || '');
      setDesc(data?.desc || '');
      setImage(data.eventImage || []);
      setLocation(data?.locationOfEvent || '');
    } else {
      // Reset all fields when edit is false
      setName('');
      setDesc('');
      setImage([]);
      setLocation('');
    }
  }, [edit, data]);



  const resetForm = () => {
    setName("");
    setDesc("");
    setLocation("");
    setImage([]);
  };




  // Handle new images by appending them to the existing state
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImage([...image, ...selectedFiles]);
  };


  const fd = new FormData();
  fd.append("name", name);
  fd.append("desc", desc);
  fd.append("locationOfEvent", location);
  image?.forEach((img) => {
    fd.append("eventImage", img instanceof File ? img : img.img);
  });

  const additionalFunctions = [handleClose, fetchApi];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/admin/event/eventAdd",
      payload: fd,
      setLoading,
      successMsg: "Created",
      additionalFunctions,
    });
    resetForm();
  };


  const updateHandler = (e) => {
    e.preventDefault();
    const fd = {
      name: name,
      desc: desc,
      locationOfEvent: locationId
    }

    updateApi({
      url: `api/v1/admin/event/updateEventContentById/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
    resetForm();
  };


  const fetchHandler = () => {
    getApi({
      url: "api/getCitiesWithOutPagination",
      setLoading,
      setResponse: setResponse,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);




  return (
    <Modal show={show} onHide={handleClose} centered>
      <UpdateEventImage
        show={show1}
        handleClose={() => setShow1(false)}
        id={id}
        imgid={imgid}
        fetchApi={fetchApi}
        handleClose1={handleClose}
        img={viewimg}
      />
      <AddEventImage
        show={show2}
        handleClose={() => setShow2(false)}
        id={id}
        fetchApi={fetchApi}
        handleClose1={handleClose}
      />
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {edit ? "Edit Event" : "Add Event"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={edit ? updateHandler : createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            {edit ?
              ""
              :
              <Form.Control
                type="file"
                multiple // Allow multiple file selection
                onChange={handleImageChange}
              />
            }
            <div className="imagePreview" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {image?.map((img, index) => (
                <div key={index} className="imagePreview1">
                  <img
                    src={img instanceof File ? URL.createObjectURL(img) : img.img}
                    alt="Selected"
                    style={{ width: "100px", height: '100px', objectFit: 'cover' }}
                  />
                  <div className="overlay">
                    <div className="overlay-content" onClick={() => {
                      setImageId(img._id);
                      setShow1(true);
                      setViewImage(img.img)
                    }}>
                      <MdEdit color="#ffffff" size={20} />
                      <span>update</span>
                    </div>
                  </div>
                </div>
              ))}
              {edit ?
                <div className="imagePreview2"
                  onClick={() => {
                    setShow2(true);
                  }}>
                  Add Image
                </div>

                :
                ""
              }
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Select
              value={location}
              onChange={(e) => {
                const selectedCity = response?.data?.find(city => city?.name === e.target.value);
                setLocationId(selectedCity?._id);
                setLocation(e.target.value);
              }}
            >
              <option>Select City</option>
              {response?.data?.map(city => (
                <option key={city?._id} value={city?.name}>{city?.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
const AddEventImage = ({ show, handleClose, id, fetchApi, handleClose1 }) => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setImage([]); // Clear image after form reset
  };

  // Handle new images by appending them to the existing state
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImage([...image, ...selectedFiles]);
  };

  // Prepare FormData including all images


  const fd = new FormData();
  image.forEach((img) => {
    fd.append("images", img instanceof File ? img : img.img);
  });

  const additionalFunctions = [handleClose, fetchApi, handleClose1];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: `api/v1/admin/addNewImageToEvent/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Added Image",
      additionalFunctions,
    });
    resetForm();
  };


  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Event Image
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              multiple // Allow multiple file selection
              onChange={handleImageChange}
            />
            <div className="imagePreview" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {image.map((img, index) => (
                <div key={index} className="imagePreview1">
                  <img
                    src={img instanceof File ? URL.createObjectURL(img) : img.img}
                    alt="Selected"
                    style={{ width: "100px", height: '100px', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Add"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
const UpdateEventImage = ({ show, handleClose, id, imgid, fetchApi, handleClose1, img }) => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setImage('');
  };

  const additionalFunctions = [handleClose, fetchApi, handleClose1];

  const updateHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("eventImage", image);
    updateApi({
      url: `api/v1/admin/event/${id}/updateEventImageById/${imgid}`,
      payload: fd,
      setLoading,
      successMsg: "Image Updated",
      additionalFunctions,
    });
    resetForm();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Image
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              // multiple // Allow multiple file selection
              onChange={(e) => setImage(e.target.files[0])}
            />
            <div className="imagePreview" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <div className="imagePreview1">
                <img
                  src={image instanceof File ? URL.createObjectURL(image) : img}
                  alt="Selected"
                  style={{ width: "100%", height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};


const CreateContes = ({ show, handleClose, edit, id, fetchApi, data }) => {
  const [name, setName] = useState(data?.name || '');
  const [desc, setDesc] = useState(data?.desc || '');
  const [location, setLocation] = useState(data?.locationOfContest || '');
  const [locationId, setLocationId] = useState('');
  const [image, setImage] = useState(data?.contestImage || []);
  const [loading, setLoading] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [imgid, setImageId] = useState('')
  const [viewimg, setViewImage] = useState('')
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (edit && data) {
      setName(data?.name || "");
      setDesc(data?.desc || "");
      setLocation(data?.locationOfContest || '');
      setImage(data.contestImage || []);
    }
    else {
      setName('');
      setDesc('');
      setImage([]);
      setLocation('');
    }
  }, [edit, data]);


  const resetForm = () => {
    setName("");
    setDesc("");
    setImage([]);
    setLocation("");
  };


  // Handle new images by appending them to the existing state
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImage([...image, ...selectedFiles]);
  };


  const fd = new FormData();
  fd.append("name", name);
  fd.append("desc", desc);
  fd.append("locationOfContest", location);
  image?.forEach((img) => {
    fd.append("contestImage", img instanceof File ? img : img.img);
  });

  const additionalFunctions = [handleClose, fetchApi];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/admin/contests/contestAdd",
      payload: fd,
      setLoading,
      successMsg: "Created",
      additionalFunctions,
    });
    resetForm();
  };


  const updateHandler = (e) => {
    e.preventDefault();
    const fd = {
      name: name,
      desc: desc,
      locationOfContest: location
    }

    updateApi({
      url: `api/v1/admin/contests/updateContestContentById/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
    resetForm();
  };



  const fetchHandler = () => {
    getApi({
      url: "api/getCitiesWithOutPagination",
      setLoading,
      setResponse: setResponse,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);


  return (
    <Modal show={show} onHide={handleClose} centered>
      <UpdateContestImage
        show={show1}
        handleClose={() => setShow1(false)}
        id={id}
        imgid={imgid}
        fetchApi={fetchApi}
        handleClose1={handleClose}
        img={viewimg}
      />
      <AddContestImage
        show={show2}
        handleClose={() => setShow2(false)}
        id={id}
        fetchApi={fetchApi}
        handleClose1={handleClose}
      />
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {edit ? "Edit Contest" : "Add Contest"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={edit ? updateHandler : createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            {edit ?
              ""
              :
              <Form.Control
                type="file"
                multiple // Allow multiple file selection
                onChange={handleImageChange}
              />
            }
            <div className="imagePreview" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {image?.map((img, index) => (
                <div key={index} className="imagePreview1">
                  <img
                    src={img instanceof File ? URL.createObjectURL(img) : img.img}
                    alt="Selected"
                    style={{ width: "100px", height: '100px', objectFit: 'cover' }}
                  />
                  <div className="overlay">
                    <div className="overlay-content" onClick={() => {
                      setImageId(img._id);
                      setShow1(true);
                      setViewImage(img.img)
                    }}>
                      <MdEdit color="#ffffff" size={20} />
                      <span>update</span>
                    </div>
                  </div>
                </div>
              ))}
              {edit ?
                <div className="imagePreview2"
                  onClick={() => {
                    setShow2(true);
                  }}>
                  Add Image
                </div>

                :
                ""
              }
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Select
              value={location}
              onChange={(e) => {
                const selectedCity = response?.data?.find(city => city?.name === e.target.value);
                setLocationId(selectedCity?._id);
                setLocation(e.target.value);
              }}
            >
              <option>Select City</option>
              {response?.data?.map(city => (
                <option key={city?._id} value={city?.name}>{city?.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
const AddContestImage = ({ show, handleClose, id, fetchApi, handleClose1 }) => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setImage([]); // Clear image after form reset
  };

  // Handle new images by appending them to the existing state
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImage([...image, ...selectedFiles]);
  };

  // Prepare FormData including all images


  const fd = new FormData();
  image.forEach((img) => {
    fd.append("images", img instanceof File ? img : img.img);
  });

  const additionalFunctions = [handleClose, fetchApi, handleClose1];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: `api/v1/admin/addNewImageToContest/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Added Image",
      additionalFunctions,
    });
    resetForm();
  };


  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Contest Image
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              multiple // Allow multiple file selection
              onChange={handleImageChange}
            />
            <div className="imagePreview" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {image.map((img, index) => (
                <div key={index} className="imagePreview1">
                  <img
                    src={img instanceof File ? URL.createObjectURL(img) : img.img}
                    alt="Selected"
                    style={{ width: "100px", height: '100px', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Add"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
const UpdateContestImage = ({ show, handleClose, id, imgid, fetchApi, handleClose1, img }) => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setImage('');
  };

  const additionalFunctions = [handleClose, fetchApi, handleClose1];

  const updateHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("contestImage", image);
    updateApi({
      url: `api/v1/admin/contests/updateContestImageById/${id}/images/${imgid}`,
      payload: fd,
      setLoading,
      successMsg: "Image Updated",
      additionalFunctions,
    });
    resetForm();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Image
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              // multiple // Allow multiple file selection
              onChange={(e) => setImage(e.target.files[0])}
            />
            <div className="imagePreview" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <div className="imagePreview1">
                <img
                  src={image instanceof File ? URL.createObjectURL(image) : img}
                  alt="Selected"
                  style={{ width: "100%", height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const CreateAbout = ({ show, handleClose, id, fetchApi, data }) => {
  const [title, setTitle] = useState(data?.title || '');
  const [desc, setDesc] = useState(data?.desc || '');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (data) {
      setTitle(data?.title || "");
      setDesc(data?.desc || "");
    }
  }, [data]);


  const resetForm = () => {
    setTitle("");
    setDesc("");
  };



  const fd = new FormData();
  fd.append("title", title);
  fd.append("desc", desc);

  const additionalFunctions = [handleClose, fetchApi];



  const updateHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", title);
    fd.append("desc", desc);

    updateApi({
      url: `api/v1/static/aboutUs/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
    resetForm();
  };



  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit About us
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
const CreateTermsConditions = ({ show, handleClose, id, fetchApi, data }) => {
  const [title, setTitle] = useState(data?.title || '');
  const [desc, setDesc] = useState(data?.desc || '');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (data) {
      setTitle(data?.title || "");
      setDesc(data?.desc || "");
    }
  }, [data]);


  const resetForm = () => {
    setTitle("");
    setDesc("");
  };



  const fd = new FormData();
  fd.append("title", title);
  fd.append("desc", desc);

  const additionalFunctions = [handleClose, fetchApi];



  const updateHandler = (e) => {
    e.preventDefault();

    const fd = {
      title: title,
      desc: desc
    }
    updateApi({
      url: `api/v1/static/terms/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
    resetForm();
  };



  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Terms & Conditions
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={updateHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const CreateBrand = ({ show, handleClose, edit, id, fetchApi, data }) => {
  const [name, setName] = useState(data?.name || '');
  const [positionnumber, setPositionNumber] = useState(data?.positionNumber || '');
  const [image, setImage] = useState(data?.image || '');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (edit && data) {
      setName(data?.name || "");
      setImage(data.image || "");
      setPositionNumber(data?.positionNumber || '')
    }
    else {
      setName("");
      setImage("");
      setPositionNumber("")
    }
  }, [edit, data]);


  const resetForm = () => {
    setName("");
    setImage("");
    setPositionNumber("")
  };



  const fd = new FormData();
  fd.append("name", name);
  fd.append("image", image);
  fd.append("positionNumber", positionnumber);

  const additionalFunctions = [handleClose, fetchApi];

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/admin/Brand/addBrand",
      payload: fd,
      setLoading,
      successMsg: "Created",
      additionalFunctions,
    });
    resetForm();
  };


  const updateHandler = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", name);
    fd.append("image", image);
    fd.append("positionNumber", positionnumber);

    updateApi({
      url: `api/v1/admin/Brand/updateBrand/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
    resetForm();
  };



  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {edit ? "Edit Brand" : "Add Brand"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={edit ? updateHandler : createHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {image && (
              <img
                src={image instanceof File ? URL.createObjectURL(image) : image}
                alt="Selected"
                style={{ width: "100%", height: '300px', marginTop: "10px" }}
              />
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>position Number</Form.Label>
            <Form.Control type="number" value={positionnumber} onChange={(e) => setPositionNumber(e.target.value)} />
          </Form.Group>
          <button className="submitBtn" type="submit" disabled={loading}>
            {loading ? <ClipLoader color="#fff" /> : "Submit"}
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export {
  CreateBanner,
  CreateCategory,
  EditVendorStatus,
  CreateSubCategory,
  CreateNotification,
  CreateSubscription,
  CreateFaq,
  CreateAdminStore,
  CreateBlog,
  CreateEvent,
  CreateContes,
  CreateAbout,
  CreateBrand,
  EditReview,
  CreateType,
  CreateTermsConditions
};
