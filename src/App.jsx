import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import MainLayout from "./layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Mulish", "Arial", "sans-serif"].join(","),
    },
  });
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/doctor" element={<Home />} />
          <Route path="/apps" element={<Home />} />
          <Route path="/testimonials" element={<Home />} />
          <Route path="/about" element={<Home />} />
        </Route>
      </>
    )
  );
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
export default App;
