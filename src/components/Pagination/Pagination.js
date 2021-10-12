import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import MyContext from "../Mycontext";

export default function Pagination() {
  const context = useContext(MyContext);
  const { setMovies } = context;

  return (
    <div>
      <ReactPaginate
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={500}
        marginPagesDisplayed={1}
        pageRangeDisplayed={window.screen.width >= 390 ? 3 : 1}
        onPageChange={(e) => setMovies(e.selected + 1)}
      />
    </div>
  );
}
