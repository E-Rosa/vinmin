import "./VinminP.css";

export type VinminPStyles = "primary" | "secondary" | "tertiary";

interface VinminPProps {
  attributes?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >;
  vinminStyle?: VinminPStyles;
  children?: JSX.Element | string;
  className?: string;
}

function VinminP(props: VinminPProps) {
  const styleClassName =
    props.vinminStyle == "primary"
      ? "VinminPPrimary"
      : props.vinminStyle == "secondary"
      ? "VinminPSecondary"
      : props.vinminStyle == "tertiary"
      ? "VinminPTertiary"
      : "VinminPPrimary";

  return (
    <p
      {...props.attributes}
      className={`VinminP ${styleClassName} ${props.className}`}
    >
      {props.children}
    </p>
  );
}

export default VinminP;
