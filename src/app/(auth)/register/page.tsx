import { PiggyBank } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="flex items-center justify-center">
        <form className="flex w-full max-w-96 flex-col items-center space-y-6">
          <div className="flex size-10 items-center justify-center rounded-full bg-emerald-600">
            <PiggyBank className="size-6 text-white" strokeWidth={1.5} />
          </div>

          <header className="text-center">
            <h1 className="text-lg font-medium">Crie sua conta agora mesmo!</h1>
            <p className="text-sm">
              Gestão financeira simples e rápida com a Debts.
            </p>
          </header>

          <fieldset className="w-full space-y-4">
            <div className="flex gap-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="first-name" className="text-sm text-zinc-600">
                  Nome
                </label>

                <input
                  id="first-name"
                  name="first-name"
                  autoComplete="first-name"
                  type="text"
                  className="flex h-10 w-full items-center rounded border border-zinc-200 px-3 text-sm"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="additional-name"
                  className="text-sm text-zinc-600"
                >
                  Sobrenome
                </label>

                <input
                  id="additional-name"
                  name="additional-name"
                  autoComplete="additional-name"
                  type="text"
                  className="flex h-10 w-full items-center rounded border border-zinc-200 px-3 text-sm"
                />
              </div>
            </div>

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
            Continuar
          </button>

          <span className="text-sm">
            Já tem uma conta?{" "}
            <Link href="/sign-in" className="font-medium text-emerald-800">
              Fazer login
            </Link>
          </span>
        </form>
      </div>

      <aside className="bg-emerald-600"></aside>
    </main>
  );
}
