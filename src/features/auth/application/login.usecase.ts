import type { AuthRepository } from "../domain/repository/auth.repository";
import type { LoginDTO } from "../domain/types/auth.types";

export class LoginUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(data: LoginDTO) {
    if (!data.email || !data.password) {
      throw new Error("Email e senha são obrigatórios");
    }

    return this.authRepository.login(data);
  }
}
