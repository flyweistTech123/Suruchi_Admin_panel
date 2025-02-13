/** @format */
import HOC from "../../Layout/HOC";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import BreadCrumb from "../../Component/BreadCrumb";
import { useEffect, useState } from "react";
import { createApi, getApi } from "../../Repository/Repository";

const CreateAdminProduct = () => {
  const [productImage, setProductImage] = useState([]);
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState('');
  const [Minimumorder, setMinimumOrder] = useState('');
  const [stock, setStock] = useState('');
  const [stockStatus, setStockStatus] = useState('');
  const [description, setDescription] = useState('');
  const [returnPolicy, setReturnPolicy] = useState('');
  const [categoryid, setCategoryId] = useState('');
  const [categoryName, setCategoryName] = useState(null);
  const [subcategoryid, setSubCategoryId] = useState('');
  const [subcategoryName, setSubCategoryName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [response1, setResponse1] = useState(null);
  const [response2, setResponse2] = useState(null);

  const navigate = useNavigate()

  const resetForm = () => {
    setProductImage("");
    setProductName("");
    setBrandName("");
    setPrice("");
    setDiscount("");
    setMinimumOrder("");
    setStock("");
    setStockStatus("");
    setCategoryId("");
    setCategoryName("");
    setSubCategoryId("");
    setSubCategoryName("");
    setReturnPolicy('');
  };

  // Handle new images by appending them to the existing state
  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setProductImage([...productImage, ...selectedFiles]);
  };

  const fd = new FormData();
  productImage.forEach((img) => {
    fd.append("productImage", img instanceof File ? img : img.img);
  });
  // fd.append("image", productImage);
  fd.append("categoryId", categoryid);
  fd.append("subCategoryId", subcategoryid);
  fd.append("brandName", brandName);
  fd.append("originalPrice", price);
  fd.append("discount", discount);
  fd.append("productName", productName);
  fd.append("minimunOrderUnit", Minimumorder);
  fd.append("stock", stock);
  fd.append("stockStatus", stockStatus);
  fd.append("description", description);
  fd.append("returnPolicy", returnPolicy);

  const createHandler = (e) => {
    e.preventDefault();
    createApi({
      url: "api/v1/admin/addProduct",
      payload: fd,
      setLoading,
      successMsg: "Created",
    });
    resetForm()
    navigate('/admin-products')
  };


  const fetchHandler = () => {
    getApi({
      url: "api/v1/Category/allCategory",
      setLoading,
      setResponse: setResponse,
    });
  };


  const fetchHandler1 = () => {
    getApi({
      url: `api/v1/SubCategory/allSubcategoryById/${categoryid}`,
      setLoading,
      setResponse: setResponse1,
    });
  };


  useEffect(() => {
    fetchHandler1();
  }, [categoryid]);

  const fetchHandler2 = () => {
    getApi({
      url: "api/v1/admin/Brand/allBrand",
      setLoading,
      setResponse: setResponse2,
    });
  };

  useEffect(() => {
    fetchHandler();
    fetchHandler2()
  }, []);

  return (
    <section className="sectionCont">
      <BreadCrumb title={"Create Admin Product"} backtitle={"All Admin Product's"} link={'admin-products'} />
      <Form onSubmit={createHandler}>
        <Row>
          <Col xs={12} md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control type="file" multiple onChange={handleImageChange} />
              <div className="imagePreview" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {productImage.map((img, index) => (
                  <div key={index} className="imagePreview1">
                    <img
                      src={img instanceof File ? URL.createObjectURL(img) : img}
                      alt="Selected"
                      style={{ width: "100%", height: '100px', objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
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
              <Form.Select
                value={brandName}
                onChange={(e) => {
                  const selectedBrand = response2?.data?.find(brand => brand?.name === e.target.value);
                  // setCategoryId(selectedCategory?._id);
                  setBrandName(e.target.value);
                }}
              >
                <option>Select Brand</option>
                {response2?.data?.map(brand => (
                  <option key={brand?._id} value={brand?.name}>{brand?.name}</option>
                ))}
              </Form.Select>
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
              <Form.Label>Discount</Form.Label>
              <Form.Control type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} />
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
              <Form.Label>Stock Status</Form.Label>
              <Form.Select
                value={stockStatus}
                onChange={(e) => setStockStatus(e.target.value)}
              >
                <option value="Select">Select Status</option>
                <option value="OUTOFSTOCK">OUTOFSTOCK</option>
                <option value="LOW">LOW</option>
                <option value="ADEQUATE">ADEQUATE</option>
              </Form.Select>
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
          <Col xs={12} md={12}>
            <Form.Group className="mb-3">
              <Form.Label>Return Policy</Form.Label>
              <FloatingLabel>
                <Form.Control as="textarea" style={{ height: "100px" }} value={returnPolicy} onChange={(e) => setReturnPolicy(e.target.value)} />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </Row>

        <div className="w-100 d-flex justify-content-between">
          <Button variant="success" type="submit">
            Submit
          </Button>

          <Link to={-1}>
            <Button variant="dark">Back</Button>
          </Link>
        </div>
      </Form>
    </section>
  );
};

export default HOC(CreateAdminProduct);
