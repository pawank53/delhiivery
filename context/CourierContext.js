import { createContext, useContext, useState } from "react"

const CourierContext=createContext();
export const CourierProvider=({children})=>{
    const [fromDomesticCourier, setFromDomesticCourier]=useState(false);
    return(
        <CourierContext.Provider value={{fromDomesticCourier, setFromDomesticCourier}}>
            {children}
        </CourierContext.Provider>
    )
}
export const useCourierContext=()=>{
    return useContext(CourierContext);
}