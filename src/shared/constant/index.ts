export const USE_MSAL = process.env.REACT_APP_USE_MSAL === "true";
export const MSAL_SCOPE_READ = process.env.REACT_APP_MSAL_SCOPE_READ || "";
export const MSAL_SCOPE_WRITE = process.env.REACT_APP_MSAL_SCOPE_WRITE || "";

// we might use multiple auth providers
export const REQUIRED_AUTH = USE_MSAL;

export const LOCAL_STORAGE_THEME_MODE = "themeMode";
export const LOCAL_STORAGE_LANGUAGE = "language";
