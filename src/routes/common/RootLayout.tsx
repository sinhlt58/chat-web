import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div>
      <div>Nav bar</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
