import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold text-ufcg-blue mb-4">404</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Página não encontrada
      </p>
      <Button asChild>
        <Link href="/">Voltar para a página inicial</Link>
      </Button>
    </div>
  );
}

