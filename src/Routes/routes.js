/** @format */

import AdBanner from "../Pages/Banner/AdBanner";
import Customers from "../Pages/Customer/Customers";
import UserData from "../Pages/Customer/UserData";
import Dashboard from "../Pages/Dashboard";
import DeliveryCharges from "../Pages/Delivery Charges/DeliveryCharges";
import ECategory from "../Pages/ECategory";
import Faq from "../Pages/FAQ/Faq";
import ForgetPassword from "../Pages/ForgetPassword";
import Login from "../Pages/Login";
import Notification from "../Pages/Notification/Notification";
import Payment from "../Pages/Payment/Payment";
import CreateProduct from "../Pages/Product/CreateProduct";
import EditProduct from "../Pages/Product/EditProduct";
import Product from "../Pages/Product/Product";
import ProductReviews from "../Pages/Product/ProductReviews";
import SingleProduct from "../Pages/Product/SingleProduct";
import SubCategory from "../Pages/SubCategory";
import CreateVendor from "../Pages/Vendors/ViewVendor";
import Vendors from "../Pages/Vendors/Vendors";
import VendorProducts from "../Pages/Vendors/VendorProducts";
import Subscription from "../Pages/Subscription/Subscription";
import Features from "../Pages/Subscription/Features";
import BlockedVendor from "../Pages/Vendors/BlockedVendor";

const routes = [
  { path: "/", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/all-banners", element: <AdBanner /> },
  { path: "/Category", element: <ECategory /> },
  { path: "/vendors", element: <Vendors /> },
  { path: "/blokedvendors", element: <BlockedVendor /> },
  { path: "/view-vendor/:ids", element: <CreateVendor /> },
  { path: "/Product", element: <Product /> },
  { path: "/create-product", element: <CreateProduct /> },
  { path: "/edit-product/:product", element: <EditProduct /> },
  { path: "/product/:id", element: <SingleProduct /> },
  { path: "/product-review/:id", element: <ProductReviews /> },
  { path: "/vendor-products/:id", element: <VendorProducts /> },
  { path: "/user", element: <Customers /> },
  { path: "/user-data/:id", element: <UserData /> },
  { path: "/sub-category", element: <SubCategory /> },
  { path: "/notification", element: <Notification /> },
  { path: "/brands", element: <DeliveryCharges /> },
  { path: "/faq", element: <Faq /> },
  { path: "/payment", element: <Payment /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/subscription", element: <Subscription /> },
  { path: "/subscription-features", element: <Features /> },
];

export default routes;
