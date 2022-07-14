import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Reset } from "styled-reset";
// import { Provider } from "react-redux";
// import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import StoreProvider from "./stores/Context";
import AccountStore from "./stores/AccountStore";
import { Provider } from "mobx-react";

export const storeContext = React.createContext({
  AccountStore,
});
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Reset />
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {/* <Provider store={store}> */}
        {/* <StoreProvider> */}
        <Provider AccountStore={{ AccountStore }}>
          <App />
        </Provider>
        ;{/* </StoreProvider> */}
        {/* </Provider> */}
      </QueryClientProvider>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
