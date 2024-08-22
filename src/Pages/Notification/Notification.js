/** @format */

import React, { useState } from "react";
import HOC from "../../Layout/HOC";
import TableLayout from "../../Component/TableLayout";
import { CreateNotification } from "../../Component/Modals/Modals";

const Notification = () => {
  const [modalShow, setModalShow] = useState(false);

  const thead = ["Sno.", "Title", "Description", ""];

  const tbody = [
    [
      "#1",
      "New Notification",
      "Lorem Ipsum is simply dummy text of the printing",
      <span className="flexCont">
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => {
            setModalShow(true);
          }}
        />

        <i className="fa-sharp fa-solid fa-trash"></i>
      </span>,
    ],
  ];

  return (
    <>
      <CreateNotification
        show={modalShow}
        handleClose={() => setModalShow(false)}
      />

      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            Notification (1)
          </span>
          <div className="d-flex gap-1">
            <button
              className="submitBtn"
              onClick={() => {
                setModalShow(true);
              }}
            >
              Create New
            </button>
          </div>
        </div>

        <TableLayout thead={thead} tbody={tbody} />
      </section>
    </>
  );
};

export default HOC(Notification);
