/** @format */

import React, { useState } from "react";
import HOC from "../../Layout/HOC";
import { Table } from "react-bootstrap";
import { CreateFaq } from "../../Component/Modals/Modals";

const Faq = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <CreateFaq show={modalShow} handleClose={() => setModalShow(false)} />

      <section className="sectionCont">
        <div className="pb-4  w-full flex justify-between items-center">
          <span
            className="tracking-widest text-slate-900 font-semibold"
            style={{ fontSize: "1.5rem" }}
          >
            FAǪs
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

        <div className="overFlowCont">
          <Table>
            <thead>
              <tr>
                <th>Sno.</th>
                <th>Question</th>
                <th>Answer</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> #1 </td>
                <td>New notification</td>
                <td> Lorem Ipsum is simply dummy text of the printing</td>

                <td>
                  <span className="flexCont">
                    <i
                      className="fa-solid fa-pen-to-square"
                      onClick={() => {
                        setModalShow(true);
                      }}
                    />

                    <i className="fa-sharp fa-solid fa-trash"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default HOC(Faq);
