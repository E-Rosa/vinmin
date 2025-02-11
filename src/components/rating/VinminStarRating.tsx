import { useEffect, useState } from "react";
import "./VinminStarRating.css";
import VinminStar from "./VinminStar";

interface VinminStarRatingProps {
  filledStarsCount: number;
  isEditable?: boolean;
  attributes?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  className?: string;
}

function VinminStarRating(props: VinminStarRatingProps) {
  const isEditable = props.isEditable === false ? false : true;

  const starsCount = 5;

  const [filledStarsCount, setFilledStarsCount] = useState(
    props.filledStarsCount
  );

  const unfilledStarsCount = starsCount - filledStarsCount;

  const stars = Array(filledStarsCount)
    .fill("isFilled")
    .concat(Array(unfilledStarsCount).fill("isNotFilled"))
    .map((value, index) => {
      const isFilled = value == "isFilled";
      return (
        <VinminStar
          key={index}
          isFilled={isFilled}
          attributes={{
            onClick: () => {
              handleStarClick(index);
            },
          }}
        />
      );
    });

  const handleStarClick = (starIndex: number) => {
    if (!isEditable) return;
    const filledStarsCount = starIndex + 1;
    setFilledStarsCount(filledStarsCount);
  };

  useEffect(()=>{
    setFilledStarsCount(props.filledStarsCount)
  }, [props.filledStarsCount])

  return (
    <div
      {...props.attributes}
      className={`VinminStarRatingContainer ${props.className}`}
    >
      {stars}
    </div>
  );
}

export default VinminStarRating;
