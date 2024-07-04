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
        <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
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
    </main>
  );
}
