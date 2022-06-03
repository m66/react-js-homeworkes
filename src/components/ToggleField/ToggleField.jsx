import { useContext } from "react";
import { GeneralContext } from "../../context/context";

function ToggleField() {
  const { toggle, toggleBtn } = useContext(GeneralContext);
  return <button onClick={toggleBtn}>{toggle}</button>;
}

export default ToggleField;
