"use client";
import {
  AboutMe,
  CoursesWithLongCards,
  Footer,
  HeroWithWallpaper,
  ProductsWithHoverImages,
} from "@/sections";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
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

    fetchColors();
  }, []);

  const getTemplate = () => {
    if (process.env.NEXT_PUBLIC_TEMPLATE_NAME === "SimpleAboutMeWithProducts") {
      return (
        <main>
          <HeroWithWallpaper />
          <AboutMe />
          <CoursesWithLongCards />
          <ProductsWithHoverImages />
          <Footer />
        </main>
      );
    }

    return <div>template doesn't exist</div>;
  };

  return getTemplate();
}
