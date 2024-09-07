/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../Layout/HOC";
import { Link, useNavigate } from "react-router-dom";
import data from "../../Constant/constant.json";
import TableLayout from "../../Component/TableLayout";
import { getApi, removeApi } from "../../Repository/Repository";
import Pagination from "../../Component/Pagination";
import { debouncedSetQuery } from "../../utils/utils";


const AdminProduct = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");


  const fetchHandler = () => {
    getApi({
      url: `api/v1/admin/Product/getProductsByAdminId/666d89663ca1fdd9ce0319b4`,
      setResponse,
      setLoading,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, [id]);


  const deleteHandler = (id) => {
    const additionalFunctions = [fetchHandler];
    removeApi({
      url: `api/v1/admin/Product/delete/${id}`,
      successMsg: "Removed !",
      additionalFunctions,
    });
  };

  const thead = [
    "Sno.",
    "ID",
    "Image",
    "Product Name",
    "Category Name",
    "Subcategory Name",
    "Stock",
    "Stock Status",
    "Created at",
    "",
  ];

  const tbody = response?.data?.map((i, index) => [
    `#${index + 1}`,
    i?.ID,
    <img src={i?.productImage[0]?.img} alt="" style={{ maxWidth: "80px" }} />,
    i?.productName,
    i?.categoryId?.name,
    i?.subcategoryId?.name,
    i?.stock,
    i?.stockStatus,
    i?.createdAt?.slice(0, 10),
    <span className="flexCont">
      <Link to={`/edit-admin-product/${i?._id}`}>
        <i className="fa-solid fa-pen-to-square" />
      </Link>
      <Link to={`/product/${i?._id}`}>
        <i className="fa-solid fa-eye" />
      </Link>
      <i className="fa-sharp fa-solid fa-trash" onClick={() => deleteHandler(i?._id)}></i>
    </span>,
  ]);

  return (
    <>
      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold"
            style={{ fontSize: "1.5rem" }}
          >
            All Admin Product's ({response?.data?.length})
          </span>

          <button
            className="submitBtn"
            onClick={() => navigate("/create-admin-product")}
          >
            Create New
          </button>
        </div>
        <TableLayout thead={thead} tbody={tbody} loading={loading} />
      </section>
    </>
  );
};

export default HOC(AdminProduct);
