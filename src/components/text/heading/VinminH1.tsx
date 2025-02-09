import "./VinminH1.css";

interface VinminH1Props {
  attributes?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  children?: JSX.Element | string;
}

function VinminH1(props: VinminH1Props) {
  return (
    <h1 {...props.attributes} className={`VinminH1 ${props.attributes?.className}`}>
      {props.children}
    </h1>
  );
}

export default VinminH1;
