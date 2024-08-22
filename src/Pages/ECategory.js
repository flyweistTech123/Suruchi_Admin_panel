/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../Layout/HOC";
import Pagination from "../Component/Pagination";
import { getApi, removeApi } from "../Repository/Repository";
import { debouncedSetQuery } from "../utils/utils";
import TableLayout from "../Component/TableLayout";
import { CreateCategory } from "../Component/Modals/Modals";

const ECategory = () => {
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
      url: `api/v1/Category/paginateCategoriesSearch?page=${page}&limit=${limit}&search=${search} `,
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
      url: `api/v1/Category/deleteCategory/${id}`,
      successMsg: "Removed !",
      additionalFunctions,
    });
  };

  const thead = ["Sno.", "Image", "Title", ""];
  const tbody = response?.data?.docs?.map((i, index) => [
    `#${index + 1}`,
    <img src={i.image} alt="" style={{ maxWidth: "80px" }} />,
    i?.name,
    <span className="flexCont">
      <i className="fa-solid fa-trash" onClick={() => deleteHandler(i._id)} />
      <i
        className="fa-solid fa-pen-to-square"
        onClick={() => {
          setId(i._id);
          setEdit(true);
          setModalShow(true);
        }}
      ></i>
    </span>,
  ]);

  return (
    <>
      <CreateCategory
        show={modalShow}
        handleClose={() => setModalShow(false)}
        edit={edit}
        id={id}
        fetchApi={fetchHandler}
      />

      <section className="sectionCont">
        <div className="pb-4   w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold"
            style={{ fontSize: "1.5rem" }}
          >
            All Category's ({response?.data?.totalDocs} )
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

        <div className="filterBox">
          <img
            src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
            alt=""
          />
          <input
            type="search"
            placeholder=""
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

export default HOC(ECategory);
