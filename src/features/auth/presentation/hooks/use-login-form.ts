// features/auth/application/hooks/use-login-form.ts

import { useState } from "react";

import { ZodError } from "zod";
import { useLogin } from "./use-login";

export function useLoginForm() {
  const { mutate, isPending } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutate(
      { email, password },
      {
        onError: (error) => {
          if (error instanceof ZodError) {
            setErrors(error.flatten().fieldErrors);
          }
        },
      },
    );
  }

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    errors,
    isPending,
  };
}
