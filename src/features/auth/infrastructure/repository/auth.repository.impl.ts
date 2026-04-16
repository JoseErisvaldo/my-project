import type { AuthRepository } from "../../domain/repository/auth.repository";
import type { AuthResponse, LoginDTO } from "../../domain/types/auth.types";
import { loginRequest } from "../api/auth.api";

export class AuthRepositoryImpl implements AuthRepository {
  async login(data: LoginDTO): Promise<AuthResponse> {
    return await loginRequest(data);
  }
}
