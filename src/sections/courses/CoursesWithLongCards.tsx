import { useTranslations } from "next-intl";
import Link from "next/link";

const CoursesWithLongCards = ({ ctas }: { ctas: any }) => {
  const t = useTranslations("CoursesWithLongCards");

  return (
    <section className="bg-[#fbf6ef] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-[#393e41] font-bold text-center mb-4">
          {t("title")}
        </h2>
        <p className="text-[#393e41] text-center mb-16 max-w-3xl mx-auto">
          {t("description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Card */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
            <h3 className="text-[#393e41] text-xl font-semibold mb-4">
              {t("firstCardTitle")}
            </h3>
            <p className="text-[#393e41] mb-6 flex-grow">
              {t("firstCardDescription")}
            </p>
            <Link
              href={
                (ctas?.CoursesWithLongCards && ctas?.CoursesWithLongCards[0]) ||
                ""
              }
              className="px-6 py-2 rounded-md text-sm font-medium bg-[#ead7c3] text-gray-800"
            >
              {t("cta")}
            </Link>
          </div>

          {/* Second Card */}
          <div className="bg-[#ead7c3] p-8 rounded-lg shadow-md flex flex-col h-full">
            <h3 className="text-[#393e41] text-xl font-semibold mb-4">
              {t("secondCardTitle")}
            </h3>
            <p className="text-[#393e41] mb-6 flex-grow">
              {t("secondCardDescription")}
            </p>
            <Link
              href={
                (ctas?.CoursesWithLongCards && ctas?.CoursesWithLongCards[1]) ||
                ""
              }
              className="px-6 py-2 rounded-md text-sm font-medium bg-[#fbf6ef] text-[#393e41]"
            >
              {t("cta")}
            </Link>
          </div>

          {/* Third Card */}
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
            <h3 className="text-[#393e41] text-xl font-semibold mb-4">
              {t("thirdCardTitle")}
            </h3>
            <p className="text-[#393e41] mb-6 flex-grow">
              {t("thirdCardDescription")}
            </p>
            <Link
              href={
                (ctas?.CoursesWithLongCards && ctas?.CoursesWithLongCards[2]) ||
                ""
              }
              className="px-6 py-2 rounded-md text-sm font-medium bg-[#ead7c3] text-gray-800"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesWithLongCards;
