/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../Layout/HOC";
import { getApi } from "../../Repository/Repository";
import { CreateAbout } from "../../Component/Modals/Modals";


const Aboutus = () => {
    const [show, setShow] = useState(false);
    const [response, setResponse] = useState({ data: [] });
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");


    const fetchHandler = () => {
        getApi({
            url: "api/v1/static/getAboutUs",
            setResponse,
            setLoading,
        });
    };

    useEffect(() => {
        fetchHandler();
    }, []);

    return (
        <>
            <CreateAbout
                show={show}
                handleClose={() => setShow(false)}
                id={id}
                fetchApi={fetchHandler}
                data={response.data[0]}
            />
            <section className="sectionCont">
                <div className="pb-4  w-full flex justify-between items-center">
                    <span
                        className="tracking-widest text-slate-900 font-semibold "
                        style={{ fontSize: "1.5rem" }}
                    >
                        About Us App
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
                {response?.data?.map((i, index) => (
                    <div className=" aboutus">
                        <h1>Title:{i?.title}</h1>
                        <p><h1>Description:</h1>{i?.desc}</p>
                    </div>
                ))}
            </section>
        </>
    );
};

export default HOC(Aboutus);
