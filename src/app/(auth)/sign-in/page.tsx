import { PiggyBank } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="grid min-h-screen place-items-center">
      <form className="flex w-full max-w-96 flex-col items-center space-y-6">
        <div className="flex size-10 items-center justify-center rounded-full bg-emerald-600">
          <PiggyBank className="size-6 text-white" strokeWidth={1.5} />
        </div>

        <header className="text-center">
          <h1 className="text-lg font-medium">Bem vindo(a) de volta</h1>
          <p className="text-sm">Faça login para ter acesso a seu financeiro</p>
        </header>

        <fieldset className="w-full space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm text-zinc-600">
              Email
            </label>

            <input
              id="email"
              type="email"
              className="flex h-10 items-center rounded border border-zinc-200 px-3 text-sm"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-sm text-zinc-600">
              Senha
            </label>

            <input
              id="password"
              type="password"
              className="flex h-10 items-center rounded border border-zinc-200 px-3 text-sm"
            />
          </div>
        </fieldset>

        <button className="flex h-9 w-full items-center justify-center rounded bg-emerald-600 text-sm font-medium text-white">
          Entrar
        </button>

        <span className="text-sm">
          Não tem uma conta?{" "}
          <Link href="/register" className="font-medium text-emerald-800">
            Criar conta
          </Link>
        </span>
      </form>
    </main>
  );
}
