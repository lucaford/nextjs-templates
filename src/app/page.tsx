import {
  Footer,
  SimplePricingWithBackground,
  SimpleWithBackground,
  TitleWithImages,
} from "@/sections";

export default function Home() {
  return (
    <main>
      <SimpleWithBackground />
      <SimplePricingWithBackground />
      <TitleWithImages />
      <Footer />
    </main>
  );
}
