import { createHashRouter, Navigate } from "react-router-dom";
import App from "../src/App";
import Main from "../public/pages/Main";
import Factions from "../public/pages/Factions";
import FactionPage from "../public/pages/FactionPage";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate />,
      },
      {
        path: "home",
        element: <Main />,
      },
      {
        path: "faction",
        element: <Factions />,
        children: [
          {
            path: ":faction",
            element: <FactionPage data={faction} />,
          },
        ],
      },
    ],
  },
]);
