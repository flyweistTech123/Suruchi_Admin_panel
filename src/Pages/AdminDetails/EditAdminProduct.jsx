/** @format */
import HOC from "../../Layout/HOC";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import Select from "react-select";
import { createApi, getApi, updateApi } from "../../Repository/Repository";
import BreadCrumb from "../../Component/BreadCrumb";
import { useEffect, useState } from "react";

const EditAdminProduct = () => {
  const { id } = useParams()
  const [productImage, setProductImage] = useState("");
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [ids, setIds] = useState("");
  const [price, setPrice] = useState(0);
  const [discountprice, setDiscountPrice] = useState(0);
  const [discountStatus, setDiscountStatus] = useState('');
  const [Minimumorder, setMinimumOrder] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const [categoryid, setCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState(null);
  const [subcategoryid, setSubCategoryId] = useState('');
  const [subcategoryName, setSubCategoryName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [response1, setResponse1] = useState(null);

  const navigate = useNavigate()
  const resetForm = () => {
    setProductImage("");
    setProductName("");
    setBrandName("");
    setIds("");
    setPrice("");
    setDiscountPrice("");
    setDiscountStatus("");
    setMinimumOrder("");
    setStock("");
    setCategoryId("");
    setCategoryName("");
    setSubCategoryId("");
    setSubCategoryName("");
  };

  const appendIfPresent = (formData, key, value) => {
    if (value) {
      formData.append(key, value);
    }
  };

  const fd = new FormData();
  appendIfPresent(fd, "image", productImage);
  appendIfPresent(fd, "categoryId", categoryid);
  appendIfPresent(fd, "subCategoryId", subcategoryid);
  appendIfPresent(fd, "originalPrice", price);
  appendIfPresent(fd, "discount", discountprice);
  appendIfPresent(fd, "discountActive", discountStatus);
  appendIfPresent(fd, "productName", productName);
  appendIfPresent(fd, "minimunOrderUnit", Minimumorder);
  appendIfPresent(fd, "stock", stock);
  appendIfPresent(fd, "description", description);
  appendIfPresent(fd, "ID", ids);

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/admin/addProductAdmin",
      payload: fd,
      setLoading,
      successMsg: "Created",
    });
    resetForm()
    navigate('/admin-products')
  };

  const updateHandler = (e) => {
    e.preventDefault();
    updateApi({
      url: `api/v1/admin/Product/edit/${id}`,
      payload: fd,
      setLoading,
      successMsg: "Updated",
    });
    resetForm();
    navigate('/admin-products')
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

  const fetchHandler1 = () => {
    getApi({
      url: "api/v1/SubCategory/all/SubCategoryForAdmin",
      setLoading,
      setResponse: setResponse1,
    });
  };

  useEffect(() => {
    fetchHandler1();
  }, []);

  const handleDiscountStatusChange = (event) => {
    const value = event.target.value;
    setDiscountStatus(value === "Active");
  };

  return (
    <section className="sectionCont">
      <BreadCrumb title={"Edit Admin Product"} backtitle={"All Admin Product's"} link={'admin-products'} />
      <Form onSubmit={updateHandler}>
        <Row>
          <Col xs={12} md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control type="file" multiple onChange={(e) => setProductImage(e.target.files[0])} />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" value={ids} onChange={(e) => setIds(e.target.value)} />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" min={0} value={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Discounted Active</Form.Label>
              <Form.Select
                value={discountStatus ? "Active" : "Deactive"}
                onChange={handleDiscountStatusChange}
              >
                <option value="Select">Select</option>
                <option value="Active">Active</option>
                <option value="Deactive">Deactive</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Discounted Price</Form.Label>
              <Form.Control type="number" min={0} value={discountprice} onChange={(e) => setDiscountPrice(e.target.value)} />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="text" value={stock} onChange={(e) => setStock(e.target.value)} />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Minimum Order Quantity</Form.Label>
              <Form.Control type="number" min={0} value={Minimumorder} onChange={(e) => setMinimumOrder(e.target.value)} />
            </Form.Group>
          </Col>

          <Col xs={12} md={3}>
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
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Sub-category</Form.Label>
              <Form.Select
                value={subcategoryName}
                onChange={(e) => {
                  const selectedSubCategory = response1?.data?.find(subcategory => subcategory?.name === e.target.value);
                  setSubCategoryId(selectedSubCategory?._id);
                  setSubCategoryName(e.target.value);
                }}
              >
                <option>Select Sub Category</option>
                {response1?.data?.map(subcategory => (
                  <option key={subcategory?._id} value={subcategory?.name}>{subcategory?.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <FloatingLabel>
                <Form.Control as="textarea" style={{ height: "100px" }} value={description} onChange={(e) => setDescription(e.target.value)} />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>

        <div className="w-100 d-flex justify-content-between">
          <Button variant="success" type="submit">
            Update
          </Button>

          <Link to={-1}>
            <Button variant="dark">Back</Button>
          </Link>
        </div>
      </Form>
    </section>
  );
};

export default HOC(EditAdminProduct);
