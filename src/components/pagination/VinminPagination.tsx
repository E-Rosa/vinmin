import "./VinminPagination.css";
import VinminPaginationButton from "./VinminPaginationButton";

interface VinminPaginationProps {
  totalItemsCount?: number;
  hasMore?: boolean;
  itemsPerPage: number;
  offset: number;
  onPageClick?: (opts: { offset: number; itemsPerPage: number }) => void;
  maximumPagesToDisplay?: number;
}

function VinminPagination(props: VinminPaginationProps) {
  const totalItemsCountIsValid =
    props.totalItemsCount && props.totalItemsCount - props.offset > 0;
  const totalItemsCount = totalItemsCountIsValid
    ? props.totalItemsCount
    : undefined;

  const maximumPagesToDisplay = props.maximumPagesToDisplay || 5;
  let maximumQuantityOfPagesToDisplayInFront = Math.ceil(
    (maximumPagesToDisplay - 1) / 2
  );
  const maximumQuantityOfPagesToDisplayBehind = Math.floor(
    (maximumPagesToDisplay - 1) / 2
  );
  const totalQuantityOfPagesBehindCurrent = Math.floor(
    props.offset / props.itemsPerPage
  );
  const quantityOfPagesBehindCurrentThatAreBelowOne =
    maximumQuantityOfPagesToDisplayBehind - totalQuantityOfPagesBehindCurrent <=
    0
      ? 0
      : maximumQuantityOfPagesToDisplayBehind -
        totalQuantityOfPagesBehindCurrent;
  maximumQuantityOfPagesToDisplayInFront +=
    quantityOfPagesBehindCurrentThatAreBelowOne;

  const totalQuantityOfPages = totalItemsCount
    ? Math.ceil(totalItemsCount / props.itemsPerPage)
    : props.hasMore
    ? totalQuantityOfPagesBehindCurrent + 1 + 1
    : totalQuantityOfPagesBehindCurrent + 1;

  const currentPageNumber = totalQuantityOfPagesBehindCurrent + 1;

  const pages = Array(totalQuantityOfPages)
    .fill(undefined)
    .map((_, index) => {
      const firstPageToDisplay =
        currentPageNumber - maximumQuantityOfPagesToDisplayBehind;
      const lastPageToDisplay =
        currentPageNumber + maximumQuantityOfPagesToDisplayInFront;
      const pageNumber = index + 1;
      if (pageNumber >= firstPageToDisplay && pageNumber <= lastPageToDisplay)
        return pageNumber;
    })
    .filter((value) => value != undefined);

  return (
    <div className="VinminPaginationContainer">
      {pages.map((pageNumber) => (
        <VinminPaginationButton
          key={pageNumber}
          isActive={pageNumber == currentPageNumber}
          onClick={() => {
            const nextOffset =
              pageNumber * props.itemsPerPage - props.itemsPerPage;
            props.onPageClick?.({
              offset: nextOffset,
              itemsPerPage: props.itemsPerPage,
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
