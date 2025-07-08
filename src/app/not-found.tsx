"use client";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [seconds, setSeconds] = useState(3);
  useEffect(() => {
    setInterval(
      () => setSeconds((s) => (s > 0 ? s - 1 : 0)),

      1000
    );

    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h2 className="text-4xl font-bold">Página não encontrada</h2>
      <h3 className="text-xl">
        Redirecionando para a página inicial em {seconds}...
      </h3>
    </div>
  );
}
