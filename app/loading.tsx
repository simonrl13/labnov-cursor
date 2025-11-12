export default function Loading() {
  return (
    <div className="container flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-ufcg-blue border-r-transparent"></div>
        <p className="mt-4 text-muted-foreground">Carregando...</p>
      </div>
    </div>
  );
}

