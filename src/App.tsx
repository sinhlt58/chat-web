// styles
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// routes
import AppRoutes from "./routes";
import { AppSettingProvider } from "./shared/context/AppSettingContext";

export const App = () => {
  return (
    <AppSettingProvider>
      <AppRoutes />
    </AppSettingProvider>
  );
};
