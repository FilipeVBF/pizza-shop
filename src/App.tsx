import "./index.css";

import { RouterProvider } from "react-router";

import { router } from "./routes";
import { Button } from "./components/ui/button";

export function App() {
  return <RouterProvider router={router} />;
}
