import { useMutation } from "@tanstack/react-query";
import { LoginUseCase } from "../../application/login.usecase";
import { useAuth } from "../../../shared/auth/hooks/use-auth";
import { AuthRepositoryImpl } from "../../infrastructure/repository/auth.repository.impl";

export function useLogin() {
  const { login } = useAuth();

  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const repo = new AuthRepositoryImpl();
      const useCase = new LoginUseCase(repo);

      return useCase.execute(data);
    },

    onSuccess: (data) => {
      login({
        token: data.token,
        user: data.user,
      });
    },
  });
}
