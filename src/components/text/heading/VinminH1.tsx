import "./VinminH1.css";

interface VinminH1Props {
  attributes?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
}

function VinminH1(props: VinminH1Props) {
  return <h1 {...props} className={`VinminH1 ${props.attributes?.className}`}></h1>;
}

export default VinminH1;
