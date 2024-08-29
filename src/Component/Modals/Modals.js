/** @format */

import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal, Row, Col } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { createApi, getApi, updateApi } from "../../Repository/Repository";
import { IoCloseSharp } from "react-icons/io5";


const CreateBanner = ({ show, handleClose, edit, id, fetchApi, data }) => {
  const [type, setType] = useState(data?.type || '');
  const [desc, setDesc] = useState(data?.desc || '');
  const [image, setImage] = useState(data?.image || '');
  const [imagePreview, setImagePreview] = useState(data?.image || '');
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    if (data) {
      setType(data?.type || "");
      setDesc(data?.desc || "");
      setImage(data.image || "");
      setImagePreview(data.image || "");
    }
  }, [data]); 


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

const CreateCategory = ({ show, handleClose, edit, id, fetchApi, data }) => {

  const [name, setName] = useState(data?.name || '');
  const [gender, setGender] = useState(data?.gender || '');
  const [image, setImage] = useState(data?.image || '');
  const [imagePreview, setImagePreview] = useState(data?.image || '');
  const [loading, setLoading] = useState(false);



  // Add useEffect to update state when `data` prop changes
  useEffect(() => {
    if (data) {
      setName(data.name || "");
      setGender(data.gender || "");
      setImage(data.image || "");
      setImagePreview(data.image || "");
    }
  }, [data]); // This effect runs whenever the `data` prop changes



  const resetForm = () => {
    setName("");
    setGender("");
    setImage("");
    setImagePreview("");
  };





  const fd = new FormData();
  fd.append("name", name);
  fd.append("gender", gender);
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
            <Form.Label>Gender</Form.Label>
            <Form.Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select your preference</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
              <option value="other">Other</option>
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

const CreateBrand = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create New</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <button className="submitBtn" type="submit">
            Submit
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const CreateSubscription = ({ show, handleClose, edit, id, fetchApi, data }) => {
  const [subscriptionData, setSubscriptionData] = useState({
    name: data?.name || '',
    monthly: data?.monthly || '',
    quarterly: data?.quarterly || '',
    halfYearly: data?.halfYearly || '',
    yearly: data?.yearly || '',
    data: data?.data || [],
  });

  useEffect(() => {
    if (data) {
      setSubscriptionData({
        name: data.name || '',
        monthly: data.monthly || '',
        quarterly: data.quarterly || '',
        halfYearly: data.halfYearly || '',
        yearly: data.yearly || '',
        data: data.data || [],
      });
    }
  }, [data]);


  const [newFeature, setNewFeature] = useState({ features: "", count: 0 });
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setSubscriptionData({
      name: "",
      monthly: "",
      quarterly: "",
      halfYearly: "",
      yearly: "",
      data: [],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubscriptionData({ ...subscriptionData, [name]: value });
  };

  const handleFeatureChange = (index, value) => {
    const newData = [...subscriptionData.data];
    newData[index].count = parseInt(value, 10);
    setSubscriptionData({ ...subscriptionData, data: newData });
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

const CreateFeatures = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create New</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Feature</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <button className="submitBtn" type="submit">
            Submit
          </button>
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
            Submit
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
  CreateBrand,
  CreateSubscription,
  CreateFeatures,
  CreateFaq,
  CreateAdminStore
};
