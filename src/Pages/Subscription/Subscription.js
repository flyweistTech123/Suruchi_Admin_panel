/** @format */

import React, { useEffect, useState } from "react";
import { CreateSubscription } from "../../Component/Modals/Modals";
import TableLayout from "../../Component/TableLayout";
import HOC from "../../Layout/HOC";
import { getApi, removeApi, createApi } from "../../Repository/Repository";
import data from "../../Constant/constant.json";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  const thead = [
    "Sno.",
    "Plan",
    "Discount",
    "Monthly",
    "Quarterly",
    "HalfYearly",
    "Yearly",
    "Features",
    "Count",
    "",
  ];

  const fetchHandler = () => {
    getApi({
      url: "api/v1/admin/Plans/getAllPlans",
      setResponse,
      setLoading,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const deleteHandler = (id) => {
    const additionalFunctions = [fetchHandler];
    removeApi({
      url: `api/v1/admin/Plans/delete/${id}`,
      successMsg: "Removed !",
      additionalFunctions,
    });
  };



  const tbody = response?.data?.map((i, index) => [
    `#${index + 1}`,
    i.name,
    i.discount,
    i.monthly,
    i.quarterly,
    i.halfYearly,
    i.yearly,
    <ul>
      {i.data?.map((item) => (
        <li key={item}>{item.features}</li>
      ))}
    </ul>,
    <ul>
      {i.data?.map((item) => (  
        <li key={item}>{item.count}</li>
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
