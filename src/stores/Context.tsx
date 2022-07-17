import React, { ReactElement, FC } from "react";
import AccountStore from "./AccountStore";

interface Props {
  children: ReactElement;
}

export const storeContext = React.createContext({
  AccountStore,
});

export const StoreProvider: FC<Props> = ({ children }) => {
  return <storeContext.Provider value={{ AccountStore }}>{children}</storeContext.Provider>;
};

export default StoreProvider;
