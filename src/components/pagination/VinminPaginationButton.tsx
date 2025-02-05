import "./VinminPaginationButton.css";
interface VinminPaginationButtonProps {
  children?: JSX.Element | string | number;
  isActive?: boolean;
  onClick?: () => void;
}

function VinminPaginationButton(props: VinminPaginationButtonProps) {
  return (
    <button
      className={`VinminPaginationButton ${
        props.isActive ? "VinminPaginationButtonActive" : ""
      }`}
    >
      {props.children}
    </button>
  );
}

export default VinminPaginationButton;
