import { useState } from "react";

// @ts-expect-error - items could be book or transaction, if put both it seems confuse it, need to fix
export default function usePagination(items, itemsPerPage: number) {
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  // @ts-expect-error - event is type any, not sure how to fix
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event?.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return {
    currentItems,
    pageCount,
    handlePageClick,
  };
}
