import type { AuthRepository } from "../domain/repository/auth.repository";
import { loginSchema } from "../domain/schemas/auth.schema";
import type { LoginDTO } from "../domain/types/auth.types";

export class LoginUseCase {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(data: LoginDTO) {
    const result = loginSchema.safeParse(data);

    if (!result.success) {
      throw result.error;
    }

    return this.authRepository.login(result.data);
  }
}
