import "./VinminDivider.css";

interface VinminDividerProps {
  attributes?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  className?: string;
}

function VinminDivider(props: VinminDividerProps) {
  return (
    <div {...props.attributes} className={`VinminDividerContainer ${props.className}`}>
      <div className="VinminDividerLine"></div>
      <div className="VinminDividerDecorator"></div>
      <div className="VinminDividerLine"></div>
    </div>
  );
}

export default VinminDivider;
