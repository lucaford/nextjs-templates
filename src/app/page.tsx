import { Footer } from "@/sections/footer/Footer";
import { FooterMinimalist } from "@/sections/footer/FooterMinimalist";
import { SimpleWithBackground } from "@/sections/hero/SimpleWithBackground";
import SimpleWithoutBackground from "@/sections/hero/SimpleWithoutBackground";
import { LeadMailList } from "@/sections/leadGen/LeadMail";
import { SimplePricingWithBackground } from "@/sections/pricing/SimplePricingWithBackground";
import { TitleWithImages } from "@/sections/showcase/TitleWithImages";

export default function Home() {
  return (
    <main>
      <SimpleWithBackground />
      <SimplePricingWithBackground />
      <TitleWithImages />
      <LeadMailList />
      <Footer />
    </main>
  );
}
