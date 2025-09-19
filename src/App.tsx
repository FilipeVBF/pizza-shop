import "./index.css";

import { RouterProvider } from "react-router";
import { Toaster } from "sonner";

import { router } from "./routes";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
      <Toaster richColors />
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}
