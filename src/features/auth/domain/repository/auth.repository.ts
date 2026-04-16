import type { AuthResponse, LoginDTO } from "../types/auth.types";

export interface AuthRepository {
  login(data: LoginDTO): Promise<AuthResponse>;
}
