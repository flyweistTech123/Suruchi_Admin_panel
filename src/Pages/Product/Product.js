/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../Layout/HOC";
import { Link, useNavigate } from "react-router-dom";
import data from "../../Constant/constant.json";
import TableLayout from "../../Component/TableLayout";
import { getApi, removeApi } from "../../Repository/Repository";
import Pagination from "../../Component/Pagination";
import { debouncedSetQuery } from "../../utils/utils";
import axios from "axios";


const Product = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");


  const fetchHandler = useCallback(() => {
    getApi({
      url: `api/v1/admin/Product/list?page=${page}&limit=${limit}&search=${search}&toDate=null&fromDate=null`,
      setLoading,
      setResponse,
    });
  }, [limit, search, page]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);


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

  const tbody = response?.data?.docs?.map((i, index) => [
    `#${index + 1}`,
    i?.ID,
    <img src={i?.productImage[0]} alt="" style={{ maxWidth: "80px" }} />,
    i?.productName,
    i?.categoryId?.name,
    i?.subcategoryId?.name,
    i?.stock,
    i?.stockStatus,
    i?.createdAt?.slice(0, 10),
    <span className="flexCont">
      {/* <Link to={`/edit-product/${i._id}`}>
        <i className="fa-solid fa-pen-to-square" />
      </Link> */}
      <Link to={`/product/${i._id}`}>
        <i className="fa-solid fa-eye" />
      </Link>
      <i className="fa-sharp fa-solid fa-trash" onClick={() => deleteHandler(i?._id)}></i>
    </span>,
  ]);


  const handleExport = () => {
    const exportUrl = `https://suruchi-backend.vercel.app/api/v1/admin/downloadProductsExcel`;

    axios.get(exportUrl)
      .then(response => {
        const downloadUrl = response.data.filePath;
        window.open( downloadUrl, '_blank');
      })
      .catch(error => {
        console.error('Error exporting data:', error);
        // toast.error('Failed to export data. Please try again later.');
      });

  };

  return (
    <>
      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold"
            style={{ fontSize: "1.5rem" }}
          >
            All Product's ({response?.data?.totalDocs})
          </span>

          <button
            className="submitBtn"
            onClick={handleExport}
          >
            Export
          </button>
        </div>

        <div className="filterBox">
          <img
            src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
            alt=""
          />
          <input
            type="search"
            placeholder="Start typing to search for products"
            onChange={(e) =>
              debouncedSetQuery({ term: e.target.value, setSearch })
            }
          />
        </div>

        <TableLayout thead={thead} tbody={tbody} loading={loading} />
        {(!response || response !== null) && (
          <Pagination
            hasNextPage={response?.data?.hasNextPage}
            limit={limit}
            setLimit={setLimit}
            page={page}
            setPage={setPage}
          />
        )}
      </section>
    </>
  );
};

export default HOC(Product);
