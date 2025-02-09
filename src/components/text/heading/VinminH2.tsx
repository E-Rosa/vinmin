import "./VinminH2.css";

interface VinminH2Props {
  attributes?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
}

function VinminH2(props: VinminH2Props) {
  return <h1 {...props} className={`VinminH2 ${props.attributes?.className}`}></h1>;
}

export default VinminH2;
