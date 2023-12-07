import { createContext, useReducer } from "react";
import Balancereducer from "./Balancereducer";

const BalanceContext = createContext()

export const BalanceProvider = ({children}) => {

   const initialState = {
    transactions : [],
    edit : {transaction : {}, editMode: false},
    dark: false,
   }

   const [state, dispatch] = useReducer(Balancereducer, initialState)
return (
    <BalanceContext.Provider value={{...state, dispatch}}>
        {children}
    </BalanceContext.Provider>
)
}

export default BalanceContext;