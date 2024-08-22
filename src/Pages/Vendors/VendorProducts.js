/** @format */

import React from "react";
import { Link, useParams } from "react-router-dom";
import HOC from "../../Layout/HOC";
import data from "../../Constant/constant.json";
import TableLayout from "../../Component/TableLayout";

const VendorProducts = () => {
  const { id } = useParams();
  const thead = [
    "Sno.",
    "ID",
    "Image",
    "Product Name",
    "Reviews",
    "Created at",
    "",
  ];

  const tbody = data.product.map((i, index) => [
    `#${index + 1}`,
    "DDNSGS",
    <img src={i.img} alt="" style={{ maxWidth: "80px" }} />,
    i.title,
    <Link to={`/product-review/${i.title}`}>
      <button className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#000] text-white tracking-wider">
        View
      </button>
    </Link>,
    i.created_date?.slice(0, 10),
    <span className="flexCont">
 
      <Link to={`/product/${i.title}`}>
        <i className="fa-solid fa-eye" />
      </Link>
      <i className="fa-sharp fa-solid fa-trash"></i>
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
            All {id} Product's ({data?.product?.length})
          </span>
        </div>
        <TableLayout thead={thead} tbody={tbody} />
      </section>
    </>
  );
};

export default HOC(VendorProducts);
