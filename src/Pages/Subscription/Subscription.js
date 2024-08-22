/** @format */

import React, { useState } from "react";
import { CreateSubscription } from "../../Component/Modals/Modals";
import TableLayout from "../../Component/TableLayout";
import HOC from "../../Layout/HOC";
import data from "../../Constant/constant.json";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const thead = [
    "Sno.",
    "Plan",
    "Price",
    "Image Count",
    "Video Count",
    "Features",
    "",
  ];
  const tbody = data.Subscriptions.map((i, index) => [
    `#${index + 1}`,
    i.title,
    i.price,
    i.imageCount,
    i.videoCount,
    <ul>
      {i.features.map((item) => (
        <li key={item}> {item} </li>
      ))}
    </ul>,
    <span className="flexCont">
      <i className="fa-solid fa-trash" />
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => setShow(true)}
      ></i>
    </span>,
  ]);

  return (
    <section className="sectionCont">
      <CreateSubscription show={show} handleClose={() => setShow(false)} />
      <div className="pb-4 w-full flex justify-between items-center">
        <span
          className="tracking-widest text-slate-900 font-semibold"
          style={{ fontSize: "1.5rem" }}
        >
          All Subscription's (3)
        </span>
        <div className="flex gap-1">
          <button className="submitBtn" onClick={() => setShow(true)}>
            Create New
          </button>
          <button
            className="submitBtn"
            onClick={() => navigate("/subscription-features")}
          >
            Add New Feature
          </button>
        </div>
      </div>
      <TableLayout thead={thead} tbody={tbody} />
    </section>
  );
};

export default HOC(Subscription);
