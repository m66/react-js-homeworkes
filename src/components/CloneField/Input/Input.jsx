import { useContext } from "react";
import { GeneralContext } from "../../../context/context";

function Input() {
    console.log('input')
    const {setInputData} = useContext(GeneralContext)
    return (
        <input type="text" onChange={setInputData} />
    );
}

export default Input;