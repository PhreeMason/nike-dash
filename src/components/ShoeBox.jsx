// import { useState } from "react"

const ShoeBox = ({ shoe, onClickHndl, activeShoe }) => {
  const currentlyActiveClass =
    activeShoe.bigShoe === shoe.bigShoe
      ? "border-coral-red border-2"
      : "border-transparent";
  return (
    <div
      className={`cursor-pointer border-2 rounded-xl ${currentlyActiveClass}`}
      onClick={() => onClickHndl(shoe)}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          className="object-contain"
          width={127}
          height={103}
          src={shoe.thumbnail}
          alt="shoe-collection"
        />
      </div>
    </div>
  );
};

export default ShoeBox;
