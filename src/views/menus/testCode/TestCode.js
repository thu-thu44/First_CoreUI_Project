import React, { useEffect } from "react";
import TestCodeComponent from "./TestCodeComponent";
import TestCodeCom2 from "./TestCodeCom2";

const TestCode=()=>{

  
    return(
        <div>
            <TestCodeCom2 name="Mg Mg" age="12" address="Yangon"/>
            <TestCodeComponent name="Sara"/>
            <TestCodeComponent name="Nice"/>
            <TestCodeCom2 name="Ma Ma" age="13" address="Singapore"/>           
        </div>
    )
}

export default TestCode;
