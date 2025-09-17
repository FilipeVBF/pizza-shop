import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <div>
      <h1>Autentificação</h1>

      <div>
        <Outlet />
      </div>

      <h1>Rodapé</h1>
    </div>
  );
}
