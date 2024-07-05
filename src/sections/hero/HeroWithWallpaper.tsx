import { useTranslations } from "next-intl";
import Link from "next/link";

const HeroWithWallpaper = () => {
  const t = useTranslations("HeroWithWallpaper");

  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="wallpaper.jpg"
          alt="Background Image"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
      </div>
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-black/50 p-8 text-center text-white">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl lg:text-2xl">
          {t("description")}
        </p>
        <Link
          href="#"
          className="mt-8 px-8 py-3 bg-[#ead7c3] text-[#393e41] rounded-xl shadow transition duration-300"
          prefetch={false}
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
};

export default HeroWithWallpaper;
