import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// store
import { Provider } from "react-redux";
import store from "./shared/store";

// locales
import "./shared/locales";

import { App } from "./App";
import { REQUIRED_AUTH, USE_MSAL } from "./shared/constant";
import { MsalProvider } from "@azure/msal-react";
import { msalInstance } from "./shared/auth/msal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    {
      USE_MSAL &&
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    }
    {
      !REQUIRED_AUTH &&
      <App />
    }
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
