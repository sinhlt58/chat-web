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
import { useAppDispatch, useAppSelector } from "./shared/store/hooks";
import { loadUserProfileAsync, selectIsUserProfileLoaded, setUser, setUserPartial } from "./user/user.slice";
import { InteractionStatus } from "@azure/msal-browser";

export const App = () => {
  const dispatch = useAppDispatch();
  const isUserProfileLoaded = useAppSelector(selectIsUserProfileLoaded);

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
      // load user profile after getting the accessToken
      if (USE_MSAL) {
        const accountInfo = msalInstance.getActiveAccount();
        if (accountInfo) {
          dispatch(setUserPartial({ name: accountInfo.name || "Test Admin" }));
          dispatch(loadUserProfileAsync());
        }
      } else {
        dispatch(setUser({ name: "Admin", roles: ["ADMIN"] }));
      }
    } else {
      if (USE_MSAL && !msalInstance.getActiveAccount()) {
        msalInstance.loginRedirect();
      }
    }
  }, [isAuthenticated, inProgress, dispatch]);

  // Here we wait for the user profile is loaded then we render the app
  // because we need to get some info like roles to render the app correctly
  if (!isAuthenticated || !isUserProfileLoaded) return null;

  return (
    <AppSettingProvider>
      <AppRoutes />
    </AppSettingProvider>
  );
};
