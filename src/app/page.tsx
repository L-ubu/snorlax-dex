export default function Home() {
  return (
    <main className="belly-gradient min-h-screen pt-40">
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <h1 className="text-3xl font-bold tracking-tight">
          <span className="text-snorlax-body">Snorlax</span>
          <span className="text-dex-cyan">Dex</span>
        </h1>
        <p className="font-mono text-sm text-snorlax-body/60">
          Your Pokemon card collection tracker
        </p>
      </div>
    </main>
  );
}
