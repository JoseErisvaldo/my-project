import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../features/shared/auth/hooks/use-auth";

export function PublicRoute() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
