import { useCallback, useState } from "react";
import { GeneralContext } from "../context";

export const InputContext = ({ children }) => {
  const [data, setData] = useState("");

  const setInputData = useCallback((e) => {
    setData(e.target.value);
  }, []);

  return (
    <GeneralContext.Provider value={{ data, setInputData }}>
      {children}
    </GeneralContext.Provider>
  );
};

export const ToggleContext = ({ children }) => {
  const [toggle, setToggle] = useState("OFF");

console.log('button')

  const toggleBtn = useCallback(() => {
    setToggle((prev) => {
      if (prev === "OFF") return "ON";
      return "OFF";
    });
  });

  return (
    <GeneralContext.Provider value={{ toggle, toggleBtn }}>
      {children}
    </GeneralContext.Provider>
  );
};
