import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ resData, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* header */}
      <div className="bg-gray-50 my-2 p-2 items-center shadow-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="m-5 font-bold ">
            {resData.title} ({resData.itemCards.length})
          </span>
          <span className="mx-4 font-bold"> ⌄</span>
        </div>

        <div>{showItems && <ItemList items={resData.itemCards} />}</div>
      </div>
      {/* body */}
    </div>
  );
};

export default ResCategory;
