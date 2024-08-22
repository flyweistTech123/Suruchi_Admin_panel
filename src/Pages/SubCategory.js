/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { CreateSubCategory } from "../Component/Modals/Modals";
import TableLayout from "../Component/TableLayout";
import HOC from "../Layout/HOC";
import { getApi, removeApi } from "../Repository/Repository";
import { Link } from "react-router-dom";
import Pagination from "../Component/Pagination";
import { debouncedSetQuery } from "../utils/utils";

const SubCategory = () => {
  const [modalShow, setModalShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");

  const fetchHandler = useCallback(() => {
    getApi({
      url: `api/v1/SubCategory/paginate/SubCategoriesSearch?fromDate=null&page=${page}&limit=${limit}&search=${search}&toDate=null`,
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
      url: `api/v1/SubCategory/deleteSubcategory/${id}`,
      successMsg: "Removed !",
      additionalFunctions,
    });
  };

  const thead = ["Sno.", "Images", "Title", "Category", "status", ""];


  const tbody = response?.data?.docs?.map((i, index) => [
    `#${index + 1}`,
    <img className="profile-pic" src={i?.image} alt="" />,
    i?.name,
    i?.categoryId?.name,
    i?.status,
    <span className="flexCont">
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => {
          setId(i._id);
          setEdit(true);
          setModalShow(true);
        }}
      ></i>
      <i className="fa-sharp fa-solid fa-trash" onClick={() => deleteHandler(i?._id)} />
    </span>,
  ]);

  return (
    <>
      <CreateSubCategory
        show={modalShow}
        handleClose={() => setModalShow(false)}
        edit={edit}
        id={id}
        fetchApi={fetchHandler}
      />
      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold"
            style={{ fontSize: "1.5rem" }}
          >
            Sub Cateogries ({response?.data?. totalDocs})
          </span>

          <button
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
            className="submitBtn"
          >
            Create New
          </button>
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

export default HOC(SubCategory);