import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import RoutesApp from "./routes/routes.tsx";
import { AuthProvider } from "./features/shared/auth/context/auth.context.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
