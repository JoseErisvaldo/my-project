import { api } from "../../../shared/infra/http/api";
import type { AuthResponse, LoginDTO } from "../../domain/types/auth.types";

export async function loginRequest(data: LoginDTO): Promise<AuthResponse> {
  const response = await api.post("/auth/login", data);

  const payload = response.data;

  return {
    token: payload.data.token,
    user: payload.data.user,
  };
}
