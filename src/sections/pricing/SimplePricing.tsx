/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/2VWeEyvpZe1
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
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SimplePricing() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Pricing
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Choose the plan thats right for your business. Our flexible pricing
            options make it easy to get started.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>
                Perfect for individuals and small teams.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold">$9</div>
              <div className="text-gray-500 dark:text-gray-400">per month</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  5 projects
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  1 GB storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  Basic support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Get Started</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>
                For growing teams and small businesses.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold">$29</div>
              <div className="text-gray-500 dark:text-gray-400">per month</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  20 projects
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  5 GB storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  Priority support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Get Started</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>
                For large teams and growing businesses.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-4xl font-bold">$99</div>
              <div className="text-gray-500 dark:text-gray-400">per month</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  Unlimited projects
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  Unlimited storage
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4 text-gray-900 dark:text-gray-50" />
                  Dedicated support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button>Get Started</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
