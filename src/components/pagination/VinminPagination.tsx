import "./VinminPagination.css";
import VinminPaginationButton from "./VinminPaginationButton";
import { Pagination } from "@eliasrrosa/pagination";

interface VinminPaginationProps {
  totalItemsCount?: number;
  hasMore?: boolean;
  itemsPerPage: number;
  offset: number;
  onPageClick?: (opts: { offset: number; itemsPerPage: number }) => void;
  maximumPagesToDisplay?: number;
  className?: string;
}

function VinminPagination(props: VinminPaginationProps) {
  const pagination = new Pagination({
    take: props.itemsPerPage,
    hasMore: props.hasMore,
    maximumPagesToDisplay: props.maximumPagesToDisplay,
    offset: props.offset,
    totalItemsCount: props.totalItemsCount,
  });

  return (
    <div className={`VinminPaginationContainer ${props.className}`}>
      {pagination.getPages().map((pageNumber) => (
        <VinminPaginationButton
          key={pageNumber}
          isActive={pageNumber == pagination.getCurrentPageNumber()}
          onClick={() => {
              props.onPageClick?.({
                offset: pagination.getPage(pageNumber).offset,
                itemsPerPage: pagination.getPage(pageNumber).take,
              });
          }}
        >
          {pageNumber}
        </VinminPaginationButton>
      ))}
    </div>
  );
}

export default VinminPagination;
