/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/v5Im1skkpbt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";

export function SimpleWithBackground() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-[#0c4a6e] to-[#0e7490]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Unlock the Power of Web Development
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-gray-200 md:text-xl">
            Streamline your web development workflow with our cutting-edge tools
            and services.
          </p>
          <div className="flex justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#0891b2] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#0e7490] focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:ring-offset-2"
              href="#"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
