# My Project

Aplicação React + TypeScript com Vite, focada em autenticação e arquitetura orientada a features.

## Tecnologias usadas

- React 19
- TypeScript 6
- Vite 8
- React Router DOM 7
- @tanstack/react-query
- Axios
- Tailwind CSS 4
- Zod
- react-toastify
- ESLint

## Arquitetura do projeto

A organização do código segue uma abordagem feature-based com separação de responsabilidades:

- `src/features/<feature>/` — cada feature tem sua própria pasta
  - `application/` — casos de uso e hooks de autenticação
  - `domain/` — tipos, DTOs e contrato de repositório
  - `infrastructure/` — implementação de API e repositório
  - `presentation/` — tela de login, componentes e hooks
- `src/features/shared`
  - `auth/` — contexto global de autenticação, hooks e tipos
  - `infra/http/` — instância Axios com interceptor de token
- `src/routes/` — roteamento principal da aplicação
- `src/main.tsx` — ponto de entrada com providers globais

## Fluxo de autenticação

1. O usuário envia email e senha no formulário de login.
2. O hook `useLoginForm` faz validação e dispara a mutação `useLogin`.
3. `useLogin` executa o caso de uso `LoginUseCase` que chama o repositório `AuthRepositoryImpl`.
4. A chamada HTTP é feita em `src/features/auth/infrastructure/api/auth.api.ts`.
5. O token e o usuário retornados pelo backend são armazenados via `AuthProvider`.
6. O interceptor em `src/features/shared/infra/http/api.ts` envia o token automaticamente nas requisições.

## Pontos importantes

- `src/main.tsx`
  - `QueryClientProvider` para React Query
  - `AuthProvider` para contexto de autenticação
  - `RoutesApp` com `BrowserRouter`
- `src/routes/routes.tsx`
  - rota principal `/` para a tela de login
- `src/features/auth/presentation/hooks/use-login-form.ts`
  - controle de estado do formulário e tratamento de erros
- `src/features/shared/auth/`
  - contexto e hook `useAuth()` para acessar dados de autenticação

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

## Variáveis de ambiente

- `VITE_API_URL` — URL base do backend de autenticação

## Objetivo do projeto

Criar um fluxo de login simples e escalável, com:

- autenticação por JWT
- armazenamento local de token e usuário
- contexto global de auth
- validação de formulário com Zod
- gerenciamento de estado de requisição com React Query
- estrutura clara para adicionar novas features
