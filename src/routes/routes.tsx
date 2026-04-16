import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/presentation/login-page.view";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
