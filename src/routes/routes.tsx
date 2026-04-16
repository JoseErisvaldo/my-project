import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/presentation/login-page.view";
import { PrivateRoute } from "./private-route";
import { PublicRoute } from "./public-route";
import { ToastContainer } from "react-toastify";

// exemplo
function DashboardPage() {
  return <h1>Dashboard</h1>;
}

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
