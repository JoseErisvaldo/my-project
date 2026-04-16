import { useState, type FormEvent } from "react";
import { useLogin } from "../hooks/use-login";

export function Login() {
  const { mutate, isPending, error } = useLogin();
  console.log(error);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutate({ email, password });
  }

  return (
    <div className="w-full max-w-md px-6 py-12 mx-auto border border-gray-800 rounded-xl shadow-lg">
      <div className="glass-panel p-10 rounded-xl flex flex-col items-center">
        {/* Brand */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center"></div>
          <span className="text-2xl font-extrabold text-primary">
            Equilibrium Finance
          </span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Bem-vindo de volta</h1>
          <p className="text-sm text-gray-500">
            Insira suas credenciais para acessar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase ml-1">
              E-mail
            </label>

            <input
              className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
              type="email"
              placeholder="nome@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase ml-1">
              Senha
            </label>

            <input
              className="w-full mt-1 px-4 py-3 rounded-lg bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Lembrar de mim
            </label>

            <a href="#" className="text-blue-600 font-semibold">
              Esqueceu a senha?
            </a>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
          >
            {isPending ? "Entrando..." : "Entrar"}
          </button>

          {error && (
            <p className="text-red-500 text-sm text-center">
              Erro ao autenticar
            </p>
          )}
        </form>

        <div className="mt-6 text-sm">
          <p>
            Novo por aqui?{" "}
            <a href="#" className="text-blue-600 font-semibold">
              Criar conta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
