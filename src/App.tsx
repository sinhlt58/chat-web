// styles
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// routes
import AppRoutes from "./routes";
import { AppSettingProvider } from "./shared/context/AppSettingContext";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useEffect, useMemo } from "react";
import { USE_MSAL } from "./shared/constant";
import { msalInstance } from "./shared/auth/msal";
import { useAppDispatch } from "./shared/store/hooks";
import { loginSuccess } from "./user/user.slice";
import { InteractionStatus } from "@azure/msal-browser";

export const App = () => {
  const dispatch = useAppDispatch();

  // msal
  const { inProgress } = useMsal();
  const isMsalAuthenticated = useIsAuthenticated();

  const isAuthenticated = useMemo(() => {
    if (USE_MSAL) {
      return isMsalAuthenticated;
    }

    return true;
  }, [isMsalAuthenticated]);

  // login redirect if not authenticated yet
  useEffect(() => {
    if (inProgress !== InteractionStatus.None) return;

    if (isAuthenticated) {
      // set user info
      if (USE_MSAL) {
        const accountInfo = msalInstance.getActiveAccount();
        if (accountInfo) {
          // call mapper to User model later
          dispatch(loginSuccess({ user: { name: accountInfo.name || "Admin" } }));
        }
      } else {
        // call mapper to User model later
        dispatch(loginSuccess({ user: { name: "Admin" } }));
      }
    } else {
      if (USE_MSAL && !msalInstance.getActiveAccount()) {
        msalInstance.loginRedirect();
      }
    }
  }, [isAuthenticated, inProgress, dispatch]);

  if (!isAuthenticated) return null;

  return (
    <AppSettingProvider>
      <AppRoutes />
    </AppSettingProvider>
  );
};
