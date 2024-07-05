import { useTranslations } from "next-intl";
import Link from "next/link";

const AboutMe = () => {
  const t = useTranslations("AboutMe");

  return (
    <section className="bg-[#fbf6ef] w-full py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6 mx-auto">
        <div className="flex items-center justify-center">
          <img
            src="about_me_dra.jpg"
            width={400}
            height={400}
            alt="Profile Picture"
            className="aspect-square rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl text-[#393e41] font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
            <p className="max-w-[600px] text-[#393e41] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("description")}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Link
              href="#"
              className="inline-flex h-9 text-[#393e41] items-center justify-center rounded-md border border-input bg-[#ead7c3] px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
