import { createBrowserRouter } from "react-router-dom";
import App from "App";
import HomePage from "views/HomePage";
import ErrorPage from "views/ErrorPage";
import ContactPage from "views/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "contacts",
        element: <ContactPage />,
      },
    ],
  }
]);

export default router;
