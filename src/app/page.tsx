import { Header } from "@/components/header/header";

export default function Home() {
  return (
    <>
      <Header caught={0} total={20} />
      <main className="belly-gradient min-h-screen pt-40">
        <div className="flex flex-col items-center justify-center gap-4 px-4">
          <p className="font-mono text-sm text-snorlax-body/60">
            Your Pokemon card collection tracker
          </p>
        </div>
      </main>
    </>
  );
}
