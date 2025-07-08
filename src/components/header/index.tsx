import Link from "next/link";

export function Header() {
  return (
    <header className="flex flex-row items-center justify-between bg-gray-800 text-white p-4">
      <h1 className="inline">Aulão Nextjs</h1>

      <nav className="min-w-md flex flex-nowrap flex-row items-center justify-end">
        <ul className="flex gap-4">
          <Link className="flex" href="/">
            Home
          </Link>
          <Link className="flex" href="/posts">
            Posts
          </Link>
          <Link className="flex" href="/dashboard">
            Dashboard
          </Link>
        </ul>
      </nav>
    </header>
  );
}
