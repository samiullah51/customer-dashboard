import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination() {
  return (
    <div className="flex justify-center my-6 mb-40">
      <button className="mx-1 px-3 py-1 rounded bg-red-400  text-white">
        <IoIosArrowBack />
      </button>
      <button className="mx-1 px-3 py-1 rounded bg-red-500 hover:bg-red-100 text-white">
        1
      </button>
      <button className="mx-1 px-3 py-1 rounded bg-white hover:bg-red-100 text-red-500 border border-red-500">
        2
      </button>
      <button className="mx-1 px-3 py-1 rounded bg-white hover:bg-red-100 text-red-500 border border-red-500">
        ...
      </button>
      <button className="mx-1 px-3 py-1 rounded bg-white hover:bg-red-100  text-red-500 border border-red-500">
        50
      </button>
      <button className="mx-1 px-3 py-1 rounded bg-red-400  text-white">
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Pagination;
