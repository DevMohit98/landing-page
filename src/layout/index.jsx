import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../ui";
const MainLayout = () => {
  return (
      <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
