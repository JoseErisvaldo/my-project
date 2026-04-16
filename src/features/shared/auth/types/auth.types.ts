import type { AuthUser } from "../../../auth/domain/types/auth.types";

export interface AuthContextData {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;

  login: (data: { token: string; user: AuthUser }) => void;
  logout: () => void;
}
