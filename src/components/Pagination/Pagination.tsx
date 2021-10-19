import React, { useContext, useState } from "react";
import MyContext from "../Mycontext";

const Pagination: React.FC = () => {
  const context = useContext(MyContext);
  const { setMovies } = context;

  const [actual, SetActual] = useState(1);

  const manageSelection = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    let value = (e.target as HTMLDivElement).textContent;

    if (value === "FIRST") {
      value = "1";
    } else if (value === "LAST") {
      value = "500";
    }
    await SetActual(+value!);

     await setMovies(+value!);
  };

  return (
    <div className="Pagination">
      <div onClick={manageSelection} className="Pagination__First">
        FIRST
      </div>
      {actual - 2 >= 1 && actual - 2 < 500 ? (
        <div onClick={manageSelection} className="Pagination__NotSelected">
          {actual - 2}
        </div>
      ) : null}
      {actual - 1 >= 1 && actual - 1 < 500 ? (
        <div onClick={manageSelection} className="Pagination__NotSelected">
          {actual - 1}
        </div>
      ) : null}
      <div onClick={manageSelection} className="Pagination__Selected">
        {actual}
      </div>
      {actual + 1 > 1 && actual + 1 <= 500 ? (
        <div onClick={manageSelection} className="Pagination__NotSelected">
          {actual + 1}
        </div>
      ) : null}
      {actual + 2 > 1 && actual + 2 <= 500 ? (
        <div onClick={manageSelection} className="Pagination__NotSelected">
          {actual + 2}
        </div>
      ) : null}
      <div onClick={manageSelection} className="Pagination__Last">
        LAST
      </div>
    </div>
  );
}

export default Pagination
