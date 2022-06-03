import { useContext } from "react";
import { GeneralContext } from "../../../context/context";

function Result() {
    console.log('result')
    const {data} = useContext(GeneralContext)
    return ( <div>{data}</div> );
}

export default Result;