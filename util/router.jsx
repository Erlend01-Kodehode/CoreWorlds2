import { createHashRouter } from "react-router-dom";
import App from "../src/App";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
]);
