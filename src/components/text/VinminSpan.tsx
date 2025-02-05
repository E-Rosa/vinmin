import "./VinminSpan.css";

export type VinminSpanStyles = "primary" | "secondary" | "tertiary";

interface VinminPProps {
  attributes?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;
  vinminStyle?: VinminSpanStyles;
  children?: JSX.Element | string;
  className?: string;
}

function VinminSpan(props: VinminPProps) {
  const styleClassName =
    props.vinminStyle == "primary"
      ? "VinminSpanPrimary"
      : props.vinminStyle == "secondary"
      ? "VinminSpanSecondary"
      : props.vinminStyle == "tertiary"
      ? "VinminSpanTertiary"
      : "VinminSpanPrimary";

  return (
    <span
      {...props.attributes}
      className={`VinminSpan ${styleClassName} ${props.className}`}
    >
      {props.children}
    </span>
  );
}

export default VinminSpan;
