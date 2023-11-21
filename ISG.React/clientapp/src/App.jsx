import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Result from "./routes/Result";
import { Loader as HomeLoader } from "./routes/Home";
const router = createBrowserRouter([
  {
    path: "/app/:id",
    element: <Home />,
    loader: HomeLoader,
  },
  {
    path: "/result",
    element: <Result />,
  },
  {
    path: "/darbare",
    element: <About />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
