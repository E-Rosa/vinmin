import "./VinminH2.css";

interface VinminH2Props {
  attributes?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  children?: JSX.Element | string;
}

function VinminH2(props: VinminH2Props) {
  return <h1 {...props.attributes} className={`VinminH2 ${props.attributes?.className}`}>{props.children}</h1>;
}

export default VinminH2;
