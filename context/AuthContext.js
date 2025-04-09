import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export  const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [isLoggedIn, setIsLoggedIn]=useState(true);

    useEffect(()=>{
        const checkLoginStatus=async ()=>{
            const token=await AsyncStorage.getItem("userToken");
            console.info("Calling AuthProvider, Token:", "hn4u389ur84tcbjfbcrehcfj3h");
            // setIsLoggedIn(token!==null);
            setIsLoggedIn(true)
        }
        checkLoginStatus();
    }, [])
    return(
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}