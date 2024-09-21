import Hero from "@/components/Hero";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center mx-auto min-h-screen overflow-hidden sm:px-20 px-5">
      <Spotlight
        className="-top-40 left-0 md:left-20 md:-top-20"
        fill="#FBE4AB"
      />
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
