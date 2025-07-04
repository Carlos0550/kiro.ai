import { createContext, useContext, useMemo } from "react";
import useWidth from "./ContextUtils/useWidth";
import type { AppContextTypes } from "./AppContextTypes";
import useUsers from "./hooks/useUsers";

const AppContext = createContext<AppContextTypes | null>(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within a AppContextProvider");
    }
    return context;
};

export const AppContextProvider = ({ children }: any) => {
    const width = useWidth().width

    const useUserHook = useUsers()

    const ContextValues = useMemo(() => ({
        width, 
        useUserHook
    }),[
        width, 
        useUserHook
    ])
    
    return <AppContext.Provider value={ContextValues}>{children}</AppContext.Provider>;
};