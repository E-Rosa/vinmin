import VinminSpan from "../text/VinminSpan";
import "./VinminInput.css";

interface VinminInputProps {
  label?: string;
  placeholder?: string;
  attributes?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

function VinminInput(props: VinminInputProps) {
  return (
    <div className="VinminInputContainer">
      <VinminSpan>{props.label}</VinminSpan>
      <input
        {...props.attributes}
        placeholder={props.placeholder}
        className="VinminInput"
      ></input>
    </div>
  );
}

export default VinminInput;
