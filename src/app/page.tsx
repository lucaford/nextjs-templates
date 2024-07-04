import { Footer, FooterMinimalist } from "@/sections";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
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
            Optimiza tu Cuerpo y Mente
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl lg:text-2xl">
            Te invito a descubrir cómo pequeños cambios en tu vida pueden
            transformar tu bienestar integralmente.
          </p>
          <Link
            href="#"
            className="mt-8 px-8 py-3 bg-[#ead7c3] text-[#393e41] rounded-xl shadow transition duration-300"
            prefetch={false}
          >
            Agenda sesión
          </Link>
        </div>
      </section>

      {/* ABOUT ME */}
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
                ¿Quién Soy?
              </h2>
              <p className="max-w-[600px] text-[#393e41] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ¡Hola! Gracias por estar acá. Mi nombre es Daniella Vignolo, soy
                médico y hace más de 15 años me dedico a conocer la relación
                mente cuerpo y cómo aplicar cambios en nosotros mismos para
                optimizar nuestro cuerpo y mejorar integralmente-
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Link
                href="#"
                className="inline-flex h-9 text-[#393e41] items-center justify-center rounded-md border border-input bg-[#ead7c3] px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES  */}
      <section className="bg-[#fbf6ef] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-[#393e41] font-bold text-center mb-4">
            Cursos
          </h2>
          <p className="text-[#393e41] text-center mb-16 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Augue euismod volutpat etiam
            rhoncus non nunc semper tortor cras. Elit volutpat nec id sed sed
            egestas. Interdum arcu risus magna facilisi vulputate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Card */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
              <h3 className="text-[#393e41] text-xl font-semibold mb-4">
                Sesión medicina integrativa
              </h3>
              <p className="text-[#393e41] mb-6 flex-grow">
                Lorem ipsum dolor sit amet consectetur. Neque magna semper
                curabitur massa. Eu scelerisque tellus mauris non purus nunc
                adipiscing. Lorem dapibus nulla convallis ornare vitae rhoncus
                in risus et. Diam venenatis sem interdum hendrerit ac orci in
                mattis donec.
              </p>
              <button className="px-6 py-2 rounded-md text-sm font-medium bg-[#ead7c3] text-gray-800">
                Seleccionar
              </button>
            </div>

            {/* Second Card */}
            <div className="bg-[#ead7c3] p-8 rounded-lg shadow-md flex flex-col h-full">
              <h3 className="text-[#393e41] text-xl font-semibold mb-4">
                Acompañamiento 8 semanas
              </h3>
              <p className="text-[#393e41] mb-6 flex-grow">
                Lorem ipsum dolor sit amet consectetur. Neque magna semper
                curabitur massa. Eu scelerisque tellus mauris non purus nunc
                adipiscing. Lorem dapibus nulla convallis ornare vitae rhoncus
                in risus et. Diam venenatis sem interdum hendrerit ac orci in
                mattis donec. Diam venenatis sem interdum hendrerit ac orci in
                mattis donec.
              </p>
              <button className="px-6 py-2 rounded-md text-sm font-medium bg-[#fbf6ef] text-[#393e41]">
                Seleccionar
              </button>
            </div>

            {/* Third Card */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col h-full">
              <h3 className="text-[#393e41] text-xl font-semibold mb-4">
                Pack 3
              </h3>
              <p className="text-[#393e41] mb-6 flex-grow">
                Lorem ipsum dolor sit amet consectetur. Neque magna semper
                curabitur massa. Eu scelerisque tellus mauris non purus nunc
                adipiscing.
              </p>
              <button className="px-6 py-2 rounded-md text-sm font-medium bg-[#ead7c3] text-gray-800">
                Seleccionar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS  */}
      <section className="py-16 bg-[#ead7c3]">
        <div className="container mx-auto px-4">
          <h2 className="text-[#393e41] text-3xl font-bold text-center mb-12">
            Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden group rounded-lg shadow-md">
              <img
                src="product_1.webp"
                alt="image 1"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  AUDIO
                </h3>
              </div>
            </div>
            <div className="relative overflow-hidden group rounded-lg shadow-md">
              <img
                src="product_2.webp"
                alt="image 2"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  MEDITACIÓN
                </h3>
              </div>
            </div>
            <div className="relative overflow-hidden group rounded-lg shadow-md">
              <img
                src="product_3.png"
                alt="image 3"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  COURSES
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full bg-[#fbf6ef] h-[1px]" />
      <footer className="bg-[#fbf6ef] text-[#30313D] py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-[#30313D] ml-2 text-lg font-semibold">
              Dra. Daniella Vignolo
            </span>
          </div>
          <p className="text-sm mb-4 md:mb-0"></p>
          <div className="flex space-x-4">
            <Link className="text-[#30313D] hover:text-gray-300" href="#">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link className="text-[#30313D] hover:text-gray-300" href="#">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 11.971C22 6.463 17.522 2 12 2z"
                  fillRule="evenodd"
                />
              </svg>
            </Link>
            <Link className="text-[#30313D] hover:text-gray-300" href="#">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                  fillRule="evenodd"
                />
                <path d="M10.333 12.667a2 2 0 11-4 0 2 2 0 014 0zM17.333 12a5 5 0 11-10 0 5 5 0 0110 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
