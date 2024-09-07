/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../Layout/HOC";
import TableLayout from "../../Component/TableLayout";
import { CreateNotification } from "../../Component/Modals/Modals";
import { getApi, removeApi } from "../../Repository/Repository";

const Notification = () => {
  const [modalShow, setModalShow] = useState(false);
  const [response, setResponse] = useState({ data: [] });
  const [loading, setLoading] = useState(false);

  const fetchHandler = () => {
    getApi({
      url: "api/v1/notification/allNotification",
      setResponse,
      setLoading,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const thead = ["Sno.", "Title", "Description", "Date"];
  const tbody = response?.data?.map((i, index) => [
    `#${index + 1}`,
    i?.title,
    i?.body,
    i?.date.slice(0, 10),
  ]);


  return (
    <>
      <CreateNotification
        show={modalShow}
        handleClose={() => setModalShow(false)}
        fetchApi={fetchHandler}
      />

      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            Notification ({response?.data?.length})
          </span>
          <div className="d-flex gap-1">
            <button
              className="submitBtn"
              onClick={() => {
                setModalShow(true);
              }}
            >
              Send
            </button>
          </div>
        </div>

        <TableLayout thead={thead} tbody={tbody} />
      </section>
    </>
  );
};

export default HOC(Notification);
