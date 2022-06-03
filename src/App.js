import "./App.css";
import CloneField from "./components/CloneField/CloneField";
import ToggleField from "./components/ToggleField/ToggleField";
import {
  InputContext,
  ToggleContext,
} from "./context/inputFieldContext/InputFieldContext";

function App() {
  return (
    <div className="App">
      <InputContext>
        <CloneField />
      </InputContext>
      <ToggleContext>
        <ToggleField />
      </ToggleContext>
    </div>
  );
}

export default App;
