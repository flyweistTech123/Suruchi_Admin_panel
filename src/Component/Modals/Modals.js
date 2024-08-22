/** @format */

import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { createApi, getApi, updateApi } from "../../Repository/Repository";

const CreateBanner = ({ show, handleClose, edit, id, fetchApi }) => {
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

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
  };

  const updateHandler = (e) => {
    e.preventDefault();
    updateApi({
      url: `api/v1/Banner/updateBanner/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
      additionalFunctions,
    });
  };

  console.log(id, "ahdahk")


  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {edit ? "Edit Category" : "Add Category"}
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

const CreateCategory = ({ show, handleClose, edit, id, fetchApi }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const fd = new FormData();
  fd.append("name", name);
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
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
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

const CreateSubCategory = ({ show, handleClose, edit, id, fetchApi }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [categoryid, setCategoryId] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [categoryName, setCategoryName] = useState(null);


  const fd = new FormData();
  fd.append("name", name);
  // fd.append("image", image);
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
            <Form.Control type="file" required onChange={(e) => setImage(e.target.files[0])} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
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

const CreateNotification = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create New</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <FloatingLabel>
              <Form.Control as="textarea" style={{ height: "100px" }} />
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

const CreateSubscription = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create New</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Plan</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image Count</Form.Label>
            <Form.Control type="number" min={0} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Video Count</Form.Label>
            <Form.Control type="number" min={0} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Features</Form.Label>
            <Form.Check type={"checkbox"} label={`Image`} />
            <Form.Check type={"checkbox"} label={`Video`} />
            <Form.Check type={"checkbox"} label={`Flash buisness`} />
            <Form.Check type={"checkbox"} label={`Top in Searches`} />
          </Form.Group>

          <button className="submitBtn" type="submit">
            Submit
          </button>
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

const CreateFaq = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create New</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Question</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Answer</Form.Label>
            <FloatingLabel>
              <Form.Control as="textarea" style={{ height: "100px" }} />
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

export {
  CreateBanner,
  CreateCategory,
  EditVendorStatus,
  CreateSubCategory,
  CreateNotification,
  CreateBrand,
  CreateSubscription,
  CreateFeatures,
  CreateFaq
};
