import { vinminFilledStarIcon, vinminUnfilledStarIcon } from "../../assets/icons";
import "./VinminStar.css";

interface VinminStarProps {
  isFilled?: boolean;
  attributes?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
}

function VinminStar(props: VinminStarProps) {
  return (
    <button {...props.attributes} className="VinminStar" type="button">
      {props.isFilled ? vinminFilledStarIcon : vinminUnfilledStarIcon}
    </button>
  );
}

export default VinminStar;
