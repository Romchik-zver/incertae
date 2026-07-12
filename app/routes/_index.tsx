import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { RootGrid } from "~/components/RootGrid";
import { Footer } from "~/components/Footer";

export default function IndexPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RootGrid />
      </main>
      <Footer />
    </>
  );
}
