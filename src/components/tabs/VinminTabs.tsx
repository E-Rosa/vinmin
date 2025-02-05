import "./VinminTabs.css"
import VinminTab, { VinminTabT } from "./VinminTab";

interface VinminTabsProps {
  tabs: VinminTabT[];
}

function VinminTabs(props: VinminTabsProps) {
  return (
    <div className="VinminTabsContainer">
      {props.tabs.map((tab, key) => {
        return <VinminTab {...tab} key={key} />;
      })}
    </div>
  );
}

export default VinminTabs;
