/** @format */

import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";

const Sidebar = ({ hamb, setHamb }) => {
  const navigate = useNavigate();

  let nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/dashboard ",
      name: "Dashboard",
    },
    {
      icon: <i className="fa-solid fa-image  text-xl mr-3 rounded-full"></i>,
      link: "/all-banners",
      name: "Banner",
    },
    {
      icon: <i className="fa-solid fa-list  text-xl mr-3 rounded-full"></i>,
      link: "/categorytype",
      name: "Category Types",
    },
    {
      icon: <i className="fa-solid fa-list  text-xl mr-3 rounded-full"></i>,
      link: "/Category",
      name: "Category",
    },
    {
      icon: <i className="fa-solid fa-list  text-xl mr-3 rounded-full"></i>,
      link: "/brands",
      name: "Brands",
    },
    {
      icon: <i className="fa-solid fa-store  text-xl mr-3 rounded-full"></i>,
      link: "/vendors",
      name: " Vendors",
    },
    {
      icon: (
        <i className="fa-solid fa-bag-shopping text-xl mr-3 rounded-full"></i>
      ),
      link: "/Product",
      name: "Products",
    },
    {
      icon: (
        <i className="fa-solid fa-bag-shopping text-xl mr-3 rounded-full"></i>
      ),
      link: "/admin-products",
      name: "Admin Products",
    },
    {
      icon: <i className="fa-solid fa-store  text-xl mr-3 rounded-full"></i>,
      link: "/admin-stores",
      name: " Admin Store",
    },
    {
      icon: <i className="fa-solid fa-user  text-xl mr-3 rounded-full"></i>,
      link: "/user",
      name: "Customer",
    },
    {
      icon: (
        <i className="fa-solid fa-table-list  text-xl mr-3 rounded-full"></i>
      ),
      link: "/sub-category",
      name: "Sub Category",
    },
    {
      icon: (
        <i className="fa-solid fa-table-list  text-xl mr-3 rounded-full"></i>
      ),
      link: "/subscription",
      name: "Subscription",
    },
    {
      icon: <i className="fa-solid fa-bell  text-xl mr-3 rounded-full"></i>,
      link: "/notification",
      name: "Notification",
    },
    {
      icon: <i className="fa-solid fa-bell  text-xl mr-3 rounded-full"></i>,
      link: "/allstate",
      name: "All State",
    },
    {
      icon: <i className="fa-solid fa-bell  text-xl mr-3 rounded-full"></i>,
      link: "/allcity",
      name: "All City",
    },
    {
      icon: <i className="fa-solid fa-blog text-xl mr-3 rounded-full"></i>,
      link: "/blogs",
      name: "Blog",
    },
    {
      icon: <i className="fa-solid fa-calendar-check text-xl mr-3 rounded-full"></i>,
      link: "/event",
      name: "Event",
    },
    {
      icon: <i className="fa-solid fa-trophy text-xl mr-3 rounded-full"></i>,
      link: "/contes",
      name: "Contest",
    },
    {
      icon: <i className="fa-solid fa-trophy text-xl mr-3 rounded-full"></i>,
      link: "/about",
      name: "About App",
    },
    {
      icon: <i className="fa-solid fa-trophy text-xl mr-3 rounded-full"></i>,
      link: "/termsconditions",
      name: "Terms & Conditions",
    },
    {
      icon: <i className="fa-solid fa-question text-xl mr-3 rounded-full" />,
      link: "/faq",
      name: "FAQ",
    },

    {
      icon: (
        <i className="fa-solid fa-credit-card text-xl mr-3 rounded-full"></i>
      ),
      link: "/payment",
      name: "Transactions",
    },
  ];

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <aside
        className="p-4 h-auto"
        style={{ backgroundColor: "rgb(34, 40, 49)", minHeight: "100vh" }}
      >
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>{" "}
        <figure className="flex  flex-col items-center">
          <span
            className="font-bold text-[#fff]"
            style={{
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            {" "}
            ADMIN PANEL
          </span>
        </figure>
        <nav className="py-1">
          {nav?.map((nav, index) => {
            return (
              <Link
                to={nav.link}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <span
                  className="flex my-3 items-center cursor-pointer text-gray-900  tracking-wider p-2 rounded-sm"
                  style={{ color: "#FFF" }}
                >
                  {nav.icon} {nav.name}
                </span>
              </Link>
            );
          })}
          <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            onClick={() => logOut()}
            style={{ color: "#FFF", textTransform: "uppercase" }}
          >
            <BiLogOutCircle className="text-xl mr-3 rounded-full " /> LogOut
          </span>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
