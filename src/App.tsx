// styles
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// store
import { Provider } from "react-redux";
import store from "./shared/store";

// routes
import AppRoutes from "./routes";
import { AppSettingProvider } from "./shared/context/AppSettingContext";

export const App = () => {
  return (
    <Provider store={store}>
      <AppSettingProvider>
        <AppRoutes />
      </AppSettingProvider>
    </Provider>
  );
};
