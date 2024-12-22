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
import { useEffect, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState();
  const [images, setImages] = useState();
  const [ctas, setCtas] = useState();
  useEffect(() => {
    const fetchColors = async () => {
      try {
        const { data: colors } = await axios.get("/api/colors");

        document.documentElement.style.setProperty(
          "--color-primary",
          colors.primary
        );
        document.documentElement.style.setProperty(
          "--color-secondary",
          colors.secondary
        );
      } catch (error) {
        console.error("Error fetching colors:", error);
      }
    };

    const fetchMessages = async () => {
      try {
        const { data: texts } = await axios.get("/api/messages");

        setMessages(texts);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    const fetchImages = async () => {
      try {
        const { data: images } = await axios.get("/api/images");

        setImages(images);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    const fetchCtas = async () => {
      try {
        const { data: ctas } = await axios.get("/api/ctas");

        setCtas(ctas);
      } catch (error) {
        console.error("Error fetching ctas:", error);
      }
    };

    // implementar SWR para todos los endpoints
    fetchColors();
    fetchMessages();
    fetchImages();
    fetchCtas();
  }, []);

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
            <ProductWithAnimations />
          </NextIntlClientProvider>
        </main>
      );
    }

    return <div>template doesnt exist</div>;
  };

  return getTemplate();
}
