import { SilentRequest } from "@azure/msal-browser";
import { MSAL_SCOPE_READ, MSAL_SCOPE_WRITE, USE_MSAL } from "../constant";
import { msalInstance } from "./msal";

// Wrapper get accessToken function
// because we might turn on/off or use different auth provider
const msalRequest: SilentRequest = {
  scopes: [MSAL_SCOPE_READ, MSAL_SCOPE_WRITE],
};
export async function getAccessToken() {
  if (USE_MSAL) {
    return await msalInstance.acquireTokenSilent(msalRequest);
  }

  return "";
}
