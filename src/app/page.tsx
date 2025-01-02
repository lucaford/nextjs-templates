"use client";
import {
  AboutMe,
  CoursesWithLongCards,
  Footer,
  HeroWithWallpaper,
  ProductsWithHoverImages,
} from "@/sections";
import ProductWithAnimations from "@/templates/ProductWithAnimations";
import axios from "axios";
import { NextIntlClientProvider } from "next-intl";
import useSWR from "swr";
import { SWRConfig } from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Home() {
  return (
    <SWRConfig
      value={{
        fetcher,
        provider: () => new Map(),
        isOnline() {
          /* Customize the network state detector */
          return true;
        },
        isVisible() {
          /* Customize the visibility state detector */
          return true;
        },
        initFocus(callback) {
          let appState = "active";
          // Call callback() when the page focus changes
          return () => {
            // Cleanup...
          };
        },
        initReconnect(callback) {
          // Call callback() when the browser regains connection
          return () => {
            // Cleanup...
          };
        },
      }}
    >
      <HomeContent />
    </SWRConfig>
  );
}

function HomeContent() {
  const { data: colors, error: colorsError } = useSWR("/api/colors");
  const { data: messages, error: messagesError } = useSWR("/api/messages");
  const { data: images, error: imagesError } = useSWR("/api/images");
  const { data: ctas, error: ctasError } = useSWR("/api/ctas");

  // Set colors when they're loaded
  // if (colors) {
  //   document.documentElement.style.setProperty(
  //     "--color-primary",
  //     colors.primary
  //   );
  //   document.documentElement.style.setProperty(
  //     "--color-secondary",
  //     colors.secondary
  //   );
  // }

  // Check if all data is loaded
  const isLoading = !colors || !messages || !images || !ctas;
  const hasError = colorsError || messagesError || imagesError || ctasError;

  if (isLoading)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  if (hasError) return <div>Error loading data</div>;

  const getTemplate = () => {
    if (process.env.NEXT_PUBLIC_TEMPLATE_NAME === "SimpleAboutMeWithProducts") {
      return (
        <main>
          <NextIntlClientProvider messages={messages} locale="es">
            <HeroWithWallpaper images={images} ctas={ctas} />
            <AboutMe images={images} ctas={ctas} />
            <CoursesWithLongCards ctas={ctas} />
            <ProductsWithHoverImages images={images} ctas={ctas} />
            <Footer />
          </NextIntlClientProvider>
        </main>
      );
    }

    if (process.env.NEXT_PUBLIC_TEMPLATE_NAME === "ProductWithAnimations") {
      return (
        <main>
          <NextIntlClientProvider messages={messages} locale="es">
            <ProductWithAnimations
              images={images}
              ctas={ctas}
              colors={colors}
            />
          </NextIntlClientProvider>
        </main>
      );
    }

    return <div>template doesnt exist</div>;
  };

  return getTemplate();
}
