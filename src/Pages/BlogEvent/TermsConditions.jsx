/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../Layout/HOC";
import { getApi } from "../../Repository/Repository";
import { CreateAbout, CreateTermsConditions } from "../../Component/Modals/Modals";


const TermsConditions = () => {
    const [show, setShow] = useState(false);
    const [response, setResponse] = useState({ data: [] });
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");


    const fetchHandler = () => {
        getApi({
            url: "api/v1/static/getAllTermsContent",
            setResponse,
            setLoading,
        });
    };

    useEffect(() => {
        fetchHandler();
    }, []);

    return (
        <>
            <CreateTermsConditions
                show={show}
                handleClose={() => setShow(false)}
                id={id}
                fetchApi={fetchHandler}
                data={response?.data[0]}
            />
            <section className="sectionCont">
                <div className="pb-4  w-full flex justify-between items-center">
                    <span
                        className="tracking-widest text-slate-900 font-semibold "
                        style={{ fontSize: "1.5rem" }}
                    >
                        Terms & Conditions User Type
                    </span>

                    <button
                        className="submitBtn"
                        onClick={() => {
                            setShow(true);
                            setId(response?.data[0]?._id)
                        }}
                    >
                        Update
                    </button>
                </div>
                {response.data[0] ?
                    <div className=" aboutus">
                        <h1>Title:{response.data[0]?.title}</h1>
                        <p><h1>Description:</h1>{response.data[0]?.desc}</p>
                    </div>
                    : (
                        <div className="no-data">
                            <h2>No Data Available</h2>
                        </div>
                    )
                }

            </section>
            <section className="sectionCont">
                <div className="pb-4  w-full flex justify-between items-center">
                    <span
                        className="tracking-widest text-slate-900 font-semibold "
                        style={{ fontSize: "1.5rem" }}
                    >
                        Terms & Conditions Vendor Type
                    </span>

                    <button
                        className="submitBtn"
                        onClick={() => {
                            setShow(true);
                            setId(response?.data[1]?._id)
                        }}
                    >
                        Update
                    </button>
                </div>
                {response.data[1] ?
                    <div className=" aboutus">
                        <h1>Title:{response.data[0]?.title}</h1>
                        <p><h1>Description:</h1>{response.data[0]?.desc}</p>
                    </div>
                    : (
                        <div className="no-data">
                            <h2>No Data Available</h2>
                        </div>
                    )
                }

            </section>
        </>
    );
};

export default HOC(TermsConditions);
