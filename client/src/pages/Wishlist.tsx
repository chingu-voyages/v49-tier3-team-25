import React from "react";

export default function Wishlist() {
  const handleClick = () => {
    // logic add to cart
  };
  return (
    <>
      {/* <UserAccountLayout> */}
      <div>
        <div className="flex justify-between items-center">
          <span className="text-gray-800 font-medium ">Wishlist (2)</span>
          <button
            onClick={handleClick}
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
          >
            Add All To Cart
          </button>
        </div>
        <div>{/* book cards */}</div>
        {/* pagination */}
      </div>
      {/* </UserAccountLayout> */}
    </>
  );
}
