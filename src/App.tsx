import "./index.css";

import { RouterProvider } from "react-router";
import { Toaster } from "sonner";

import { router } from "./routes";
import { Button } from "./components/ui/button";

export function App() {
  return (
    <>
      <Toaster richColors />
      <RouterProvider router={router} />;
    </>
  );
}
