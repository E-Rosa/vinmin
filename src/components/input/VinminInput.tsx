import VinminSpan from "../text/VinminSpan";
import "./VinminInput.css";

interface VinminInputProps {
  label?: string;
  placeholder?: string;
  attributes?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

function VinminInput(props: VinminInputProps) {
  return (
    <div className={`VinminInputContainer ${props.containerClassName}`}>
      <VinminSpan className={props.labelClassName}>{props.label}</VinminSpan>
      <input
        {...props.attributes}
        placeholder={props.placeholder}
        className={`VinminInput ${props.inputClassName}`}
      ></input>
    </div>
  );
}

export default VinminInput;
