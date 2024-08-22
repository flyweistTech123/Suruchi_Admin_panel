/** @format */

import React from "react";

const Pagination = ({ hasNextPage, limit, setLimit, page, setPage }) => {
  const Prev = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const Next = () => {
    setPage(page + 1);
  };

  return (
    <div className="pagination mt-2">
      <button className="prevBtn" onClick={() => Prev()}>
        <i className="fa-solid fa-backward"></i>
      </button>

      <button className="activePage"> {page} </button>

      {hasNextPage && (
        <button className="nextBtn" onClick={() => Next()}>
          <i className="fa-sharp fa-solid fa-forward"></i>
        </button>
      )}
      <select onChange={(e) => setLimit(e.target.value)} value={limit}>
        <option value={10}> 10/page </option>
        <option value={10}> 20/page </option>
        <option value={10}> 50/page </option>
        <option value={10}> 100/page </option>
      </select>
    </div>
  );
};

export default Pagination;
