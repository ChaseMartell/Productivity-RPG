import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="py-24 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Productivity RPG</h1>
        <p className="text-2xl text-muted-foreground">Welcome to Productivity RPG. This is the Home Page.</p>
      </section>
        <div className="flex gap-6 items-center justify-center">
          <Button variant="default">Login</Button>
          <Button>Sign Up</Button>
        </div>
    </main>
  );
}
