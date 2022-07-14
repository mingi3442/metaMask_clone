import React from "react";
import AccountStore from "./AccountStore";

export const storeContext = React.createContext({
  AccountStore,
});

export const StoreProvider = ({ children }) => {
  return <storeContext.Provider value={{ AccountStore }}>{children}</storeContext.Provider>;
};

export default StoreProvider;
