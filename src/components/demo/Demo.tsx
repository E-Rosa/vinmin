import "./Demo.css";
import VinminButton from "../button/VinminButton";
import VinminDivider from "../div/VinminDivider";
import VinminInput from "../input/VinminInput";
import VinminStarRating from "../rating/VinminStarRating";
import VinminH1 from "../text/heading/VinminH1";
import VinminH2 from "../text/heading/VinminH2";
import VinminP from "../text/VinminP";
import VinminSpan from "../text/VinminSpan";
import PaginationDemo from "./PaginationDemo";
import VinminTabs from "../tabs/VinminTabs";
import {
  vinminAddIcon,
  vinminDeleteIcon,
  vinminPaginationIconBlack,
  vinminPaginationIconWhite,
  vinminStackIcon,
} from "../../assets/icons";
import { useState } from "react";

function Demo() {
  const [activeTab, setActiveTab] = useState<"stack" | "pagination">("stack");
  return (
    <div className="VinminDemoContainer">
      <VinminH1>Title h1</VinminH1>
      <VinminH2>Title h2</VinminH2>
      <VinminP>This is the primary paragraph</VinminP>
      <VinminP vinminStyle="secondary">This is the secondary paragraph</VinminP>
      <VinminP vinminStyle="tertiary">This is the tertiary paragraph</VinminP>
      <VinminSpan className="w-full">This is the primary span</VinminSpan>
      <br></br>
      <VinminSpan vinminStyle="secondary">
        This is the secondary span
      </VinminSpan>
      <br></br>
      <VinminSpan vinminStyle="tertiary">This is the tertiary span</VinminSpan>
      <br></br>
      <VinminButton vinminStyle="white bordered">White Button</VinminButton>
      <VinminButton vinminStyle="black">Black Button</VinminButton>
      <VinminInput
        label="This is an input"
        placeholder="placeholder text"
      ></VinminInput>
      <VinminDivider />
      <VinminStarRating filledStarsCount={1} />
      <PaginationDemo />
      <VinminTabs
        tabs={[
          {
            iconActive: vinminStackIcon("white"),
            iconInactive: vinminStackIcon("black"),
            isActive: activeTab == "stack",
            attributes: {
              onClick: () => {
                setActiveTab("stack");
              },
            },
          },
          {
            iconActive: vinminPaginationIconWhite,
            iconInactive: vinminPaginationIconBlack,
            isActive: activeTab == "pagination",
            attributes: {
              onClick: () => {
                setActiveTab("pagination");
              },
            },
          },
        ]}
      />
      <span className="VinminIcon">{vinminAddIcon}</span>
      <span className="VinminIcon">{vinminDeleteIcon}</span>
    </div>
  );
}

export default Demo;
