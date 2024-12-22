import { useTranslations } from "next-intl";
import Link from "next/link";

const ProductsWithHoverImages = ({
  images,
  ctas,
}: {
  images: any;
  ctas: any;
}) => {
  const t = useTranslations("ProductsWithHoverImages");

  return (
    <section className="py-16 bg-[#ead7c3]">
      <div className="container mx-auto px-4">
        <h2 className="text-[#393e41] text-3xl font-bold text-center mb-12">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href={
              (ctas?.ProductsWithHoverImages &&
                ctas?.ProductsWithHoverImages[0]) ||
              ""
            }
            className="relative overflow-hidden group rounded-lg shadow-md"
          >
            <img
              src={
                (images?.ProductsWithHoverImages &&
                  images?.ProductsWithHoverImages[0]) ||
                "wallpaper.jpg"
              }
              alt="image 1"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t("firstCard")}
              </h3>
            </div>
          </Link>
          <Link
            href={
              (ctas?.ProductsWithHoverImages &&
                ctas?.ProductsWithHoverImages[1]) ||
              ""
            }
            className="relative overflow-hidden group rounded-lg shadow-md"
          >
            <img
              src={
                (images?.ProductsWithHoverImages &&
                  images?.ProductsWithHoverImages[1]) ||
                "wallpaper.jpg"
              }
              alt="image 2"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t("secondCard")}
              </h3>
            </div>
          </Link>
          <Link
            href={
              (ctas?.ProductsWithHoverImages &&
                ctas?.ProductsWithHoverImages[2]) ||
              ""
            }
            className="relative overflow-hidden group rounded-lg shadow-md"
          >
            <img
              src={
                (images?.ProductsWithHoverImages &&
                  images?.ProductsWithHoverImages[2]) ||
                "wallpaper.jpg"
              }
              alt="image 3"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t("thirdCard")}
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsWithHoverImages;
