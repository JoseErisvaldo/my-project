import { useMutation } from "@tanstack/react-query";
import { AuthRepositoryImpl } from "../../infrastructure/repository/auth.repository.impl";
import { LoginUseCase } from "../../application/login.usecase";

export function useLogin() {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const repo = new AuthRepositoryImpl();
      const useCase = new LoginUseCase(repo);
      return useCase.execute(data);
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
}
