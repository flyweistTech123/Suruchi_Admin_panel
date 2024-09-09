/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../Layout/HOC";
import { Link, useNavigate } from "react-router-dom";
import { getApi, removeApi, createApi } from "../../Repository/Repository";
import TableLayout from "../../Component/TableLayout";
import { EditVendorStatus } from "../../Component/Modals/Modals";
import axios from "axios";

const Vendors = () => {
  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");


  const navigate = useNavigate();



  const fetchHandler = () => {
    getApi({
      url: "api/v1/admin/getAllVendor",
      setResponse,
      setLoading,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const thead = [
    "Sno.",
    "Name",
    "Number",
    "Products/Services",
    "Plan",
    "Plan Type",
    // "Plan Price",
    // "Plan Expiration",
    "KYC Status",
    "Status",
    "Action",
  ];

  const deleteHandler = (id) => {
    const additionalFunctions = [fetchHandler];
    removeApi({
      url: `api/v1/admin/deleteProfile/${id}`,
      successMsg: "Removed !",
      additionalFunctions,
    });
  };


  const blockHandler = (id, currentStatus) => {
    const isBlocked = currentStatus === "Block"; // Check the current status
    const additionalFunctions = [fetchHandler];
    createApi({
      url: `api/v1/admin/${isBlocked ? 'unblockVendor' : 'blockVendor'}`, // Conditional API endpoint
      payload: { vendorId: id },
      successMsg: isBlocked ? "Unblocked!" : "Blocked!", // Dynamic success message
      additionalFunctions,
    });
  };



  const tbody = response.data.map((i, index) => [
    `#${index + 1}`,
    i?.fullName,
    i?.phone,
    <Link to={`/vendor-products/${i._id}`}>View</Link>,
    i?.planBuyId?.planName,
    i?.planBuyId?.planType,
    // i?.planBuyId?.amount,
    // i?.planExpiration?.slice(0, 10),
    i?.kycStatus,
    i?.status,
    <span className="flexCont">
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => {
          setId(i._id);
          setOpen(true);
        }}
      />
      <Link to={`/view-vendor/${i._id}`}>
        <i className="fa-solid fa-eye"></i>
      </Link>
      <i className="fa-sharp fa-solid fa-trash" onClick={() => deleteHandler(i._id)}></i>
      <button className="submitBtn" onClick={() => blockHandler(i._id, i.status)} style={{ width: '50px' }}>
        {i?.status === 'Block' ? "Unblock" : "Block"}
      </button>
    </span>,
  ]);

  const handleExport = () => {
    const exportUrl = `https://suruchi-backend.vercel.app/api/v1/admin/download-vendor-excel`;

    axios.get(exportUrl)
      .then(response => {
        const downloadUrl = response.data.filePath;
        window.open(downloadUrl, '_blank');
      })
      .catch(error => {
        console.error('Error exporting data:', error);
        // toast.error('Failed to export data. Please try again later.');
      });

  };


  return (
    <>
      <EditVendorStatus show={open} handleClose={() => setOpen(false)} id={id} />
      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold"
            style={{ fontSize: "1.5rem" }}
          >
            All Vendors ({response?.data?.length})
          </span>
          <button className="submitBtn" onClick={() => navigate('/blokedvendors')}>
            Blocked Vendors
          </button>

        </div>

        <div className="filterBox">
          <img
            src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
            alt=""
          />
          <input
            type="search"
            placeholder="seach by first name , last name , email address , phone number..."
          />
        </div>
        <button
          className="submitBtn"
          onClick={handleExport}
        >
          Export
        </button>
        <TableLayout thead={thead} tbody={tbody} loading={loading} />
      </section>
    </>
  );
};

export default HOC(Vendors);
