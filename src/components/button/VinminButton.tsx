import "./VinminButton.css";
export type VinminButtonStyles = "white bordered" | "black";

interface VinminButtonProps {
  vinminStyle?: VinminButtonStyles;
  attributes?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  className?: string;
  children?: JSX.Element | string;
}

function VinminButton(props: VinminButtonProps) {
  const styleClassName =
    props.vinminStyle == "black"
      ? "VinminButtonBlack"
      : props.vinminStyle == "white bordered"
      ? "VinminButtonWhiteBordered"
      : "VinminButtonBlack";

  return (
    <button
      {...props.attributes}
      className={`VinminButton ${styleClassName} ${props.className}`}
    >
      {props.children}
    </button>
  );
}

export default VinminButton;
