import "./VinminH2.css";

interface VinminH2Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

function VinminH2(props: VinminH2Props) {
  return <h2 {...props} className="VinminH2"></h2>;
}

export default VinminH2;
