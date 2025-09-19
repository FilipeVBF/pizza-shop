import { Header } from "@/components/header";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="gap-04 flex flex-1 flex-col p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
