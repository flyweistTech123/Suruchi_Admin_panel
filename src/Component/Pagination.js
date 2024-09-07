import React from "react";

const Pagination = ({ hasNextPage, limit, setLimit, page, setPage, totalPages }) => {
  const Prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const Next = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="pagination mt-2">
      <button 
        className="prevBtn" 
        onClick={Prev} 
        disabled={page === 1} // Disable if on the first page
      >
        <i className="fa-solid fa-backward"></i>
      </button>

      <button className="activePage">{page}</button>

      <button 
        className="nextBtn" 
        onClick={Next} 
        disabled={page >= totalPages} // Disable if on the last page
      >
        <i className="fa-sharp fa-solid fa-forward"></i>
      </button>

      <select onChange={(e) => setLimit(parseInt(e.target.value))} value={limit}>
        <option value={10}>10/page</option>
        <option value={20}>20/page</option>
        <option value={50}>50/page</option>
        <option value={100}>100/page</option>
      </select>
    </div>
  );
};

export default Pagination;
