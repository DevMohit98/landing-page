import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import MainLayout from "./layout";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route  element={<MainLayout />}>
          <Route index path="/" element={<Home />} />
          <Route  path="/doctor" element={<Home />} />
          <Route  path="/apps" element={<Home />} />
          <Route  path="/testimonials" element={<Home />} />
          <Route  path="/about" element={<Home />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};
export default App;
