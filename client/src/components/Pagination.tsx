import ReactPaginate from "react-paginate";

export default function Pagination({ handlePageClick, pageCount }) {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </svg>
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M5 12l6 6" />
          <path d="M5 12l6 -6" />
        </svg>
      }
      renderOnZeroPageCount={null}
      //   styles
      containerClassName="flex justify-center items-center gap-2"
      pageClassName="bg-gray-100 h-10 w-10 border border-gray-300 rounded-full  flex justify-center items-center "
      pageLinkClassName="bg-gray-50 h-10 w-10 border border-gray-300 rounded-full  flex justify-center items-center"
      previousClassName="bg-white py-1.5 px-1.5 border-2 border-[#DB4444] rounded-full text-[#DB4444]"
      nextClassName="bg-white py-1.5 px-1.5 border-2 border-[#DB4444] rounded-full text-[#DB4444]"
      // for activelinkclassname below for some reason not picking up on custom colors ie bg-[#DB4444] border-[#DB4444] so have used red for now
      activeLinkClassName="text-white bg-red-400 border-red-400"
      disabledClassName="border-gray-400 opacity-50 border-1"
      disabledLinkClassName="text-gray-400"
      // previousLinkClassName=""
      // nextLinkClassName=
      // breakLabel="..."
      // breakClassName=
      // breakLinkClassName=
      // activeClassName=
      // renderOnZeroPageCount={null}
    />
  );
}
