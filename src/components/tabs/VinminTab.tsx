import "./VinminTab.css";

export type VinminTabT = {
  iconInactive?: JSX.Element;
  iconActive?: JSX.Element;
  text?: string;
  isActive?: boolean;
  attributes?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
};

interface VinminTabProps extends VinminTabT {}

function VinminTab(props: VinminTabProps) {
  return (
    <button
      type="button"
      {...props.attributes}
      className={`VinminTab ${
        props.isActive
          ? `VinminTabActive ${props.attributes?.className}`
          : `VinminTabInactive ${props.attributes?.className}`
      }`}
    >
      {(props.iconActive || props.iconInactive) && (
        <>{props.isActive ? props.iconActive : props.iconInactive}</>
      )}
      {props.text && <label>{props.text}</label>}
    </button>
  );
}

export default VinminTab;
