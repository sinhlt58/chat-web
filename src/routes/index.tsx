import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./common/RootLayout";
import { ErrorPage } from "./common/ErrorPage";
import { IndexPage } from "./IndexPage/IndexPage";
import { ConversationsManagementPage } from "./ConversationsManagement/ConversationsManagementPage";
import { LoginPage } from "./common/LoginPage";
import { PrivateRoute } from "./common/PrivateRoute";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <PrivateRoute />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <IndexPage /> },
            {
              path: "/conversations-management",
              element: <ConversationsManagementPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
