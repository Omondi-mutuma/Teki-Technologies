import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center mx-auto w-full sm:px-20 px-5">
      <Spotlight className="-top-30 left-0 md:left-20 md:-top-40" fill="#FFF" />
      <Header />
      <Hero />
    </main>
  );
}
