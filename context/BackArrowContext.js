import { createContext, useState, useContext } from "react";

const BackArrowContext=createContext();
export const BackArrowContextProvider=({children})=>{
    const [backArrowRequired, setIsBackArrowRequired]=useState(true);
    return(
        <BackArrowContext.Provider value={{backArrowRequired, setIsBackArrowRequired}}>
            {children}
        </BackArrowContext.Provider>
    )
}

export const useBackArrowContext=()=>{
    return useContext(BackArrowContext);
}