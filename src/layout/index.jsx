import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../ui";
import { Box } from "@mui/material";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
export default MainLayout;
