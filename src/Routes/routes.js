/** @format */

import AdBanner from "../Pages/Banner/AdBanner";
import Customers from "../Pages/Customer/Customers";
import UserData from "../Pages/Customer/UserData";
import Dashboard from "../Pages/Dashboard";
// import DeliveryCharges from "../Pages/Delivery Charges/DeliveryCharges";
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
import VendorStoreDetail from "../Pages/Vendors/VendorStoreDetail";
import Subscription from "../Pages/Subscription/Subscription";
import BlockedVendor from "../Pages/Vendors/BlockedVendor";
import AdminStore from "../Pages/AdminDetails/AdminStore";
import CreateAdminStore from "../Pages/AdminDetails/CreateAdminStore";
import AdminProduct from "../Pages/AdminDetails/AdminProduct";
import CreateAdminProduct from "../Pages/AdminDetails/CreateAdminProduct";
import EditAdminProduct from "../Pages/AdminDetails/EditAdminProduct";
import Blog from "../Pages/BlogEvent/Blog";
import Contes from "../Pages/BlogEvent/Contes";
import Event from "../Pages/BlogEvent/Event";
import Aboutus from "../Pages/BlogEvent/Aboutus";
import Brands from "../Pages/Brands/Brands";
import CategoryType from "../Pages/CategoryType/CategoryType";
import AllState from "../Pages/Location/AllState";
import AllCity from "../Pages/Location/AllCity";
import TermsConditions from "../Pages/BlogEvent/TermsConditions";
import ContactUs from "../Pages/BlogEvent/ContactUs";
import SubscriptionDetails from "../Pages/Subscription/SubscriptionDetails";

const routes = [
  { path: "/", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/all-banners", element: <AdBanner /> },
  { path: "/admin-stores", element: <AdminStore /> },
  { path: "/admin-products", element: <AdminProduct /> },
  { path: "/create-admin-product", element: <CreateAdminProduct /> },
  { path: "/edit-admin-product/:id", element: <EditAdminProduct /> },
  { path: "/edit-admin-stores/:id", element: <CreateAdminStore /> },
  { path: "/Category", element: <ECategory /> },
  { path: "/vendors", element: <Vendors /> },
  { path: "/blokedvendors", element: <BlockedVendor /> },
  { path: "/view-vendor/:ids", element: <CreateVendor /> },
  { path: "/view-vendor-store/:ids", element: <VendorStoreDetail /> },
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
  // { path: "/brands", element: <DeliveryCharges /> },
  { path: "/faq", element: <Faq /> },
  { path: "/payment", element: <Payment /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/subscription", element: <Subscription /> },
  { path: "/blogs", element: <Blog /> },
  { path: "/event", element: <Event /> },
  { path: "/contes", element: <Contes /> },
  { path: "/about", element: <Aboutus /> },
  { path: "/brands", element: <Brands /> },
  { path: "/categorytype", element: <CategoryType /> },
  { path: "/allstate", element: <AllState /> },
  { path: "/allcity", element: <AllCity /> },
  { path: "/termsconditions", element: <TermsConditions /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/subsciptiondetails/:id", element: <SubscriptionDetails /> },
];

export default routes;
