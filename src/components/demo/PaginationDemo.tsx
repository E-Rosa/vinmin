import { useState } from "react";
import VinminPagination from "../pagination/VinminPagination";

interface PaginationDemoProps {}

function PaginationDemo(_: PaginationDemoProps) {
  const [offset, setOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [totalItemsCount, setTotalItemsCount] = useState(100);
  const [maximumPagesToDisplay, setMaximumPagesToDisplay] = useState(5);
  return (
    <>
      <div>
        <label>Offset: {offset}</label>
        <input
          type="range"
          value={offset}
          onChange={(ev) => {
            setOffset(parseInt(ev.target.value));
          }}
          step={itemsPerPage}
        />
      </div>
      <div>
        <label>Items per page: {itemsPerPage}</label>
        <input
          type="range"
          value={itemsPerPage}
          onChange={(ev) => {
            setItemsPerPage(parseInt(ev.target.value));
          }}
        />
      </div>
      <div>
        <label>Total items count: {totalItemsCount}</label>
        <input
          type="range"
          value={totalItemsCount}
          onChange={(ev) => {
            setTotalItemsCount(parseInt(ev.target.value));
          }}
          min="100"
          max="1000"
        />
      </div>
      <div>
        <label>Maximum pages to display: {maximumPagesToDisplay}</label>
        <input
          type="range"
          value={maximumPagesToDisplay}
          onChange={(ev) => {
            setMaximumPagesToDisplay(parseInt(ev.target.value));
          }}
          min="1"
          max="100"
        />
      </div>
      <VinminPagination
        itemsPerPage={itemsPerPage}
        offset={offset}
        totalItemsCount={totalItemsCount}
        onPageClick={(opts) => setOffset(opts.offset)}
        maximumPagesToDisplay={maximumPagesToDisplay}
      />
    </>
  );
}

export default PaginationDemo;
