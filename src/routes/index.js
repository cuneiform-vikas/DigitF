import { Outlet, createBrowserRouter } from "react-router-dom";
import { About, Contact, Furniture, Home, Shop } from "../modules";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/shop",
        Component: Shop,
      },
      {
        path: "/furniture",
        Component: Furniture,
      },
      {
        path: "/contact-us",
        Component: Contact,
      },
    ],
  },
]);
