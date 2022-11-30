import {
  ChatBubbleBottomCenterTextIcon,
  NewspaperIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const supportLinks = [
  {
    name: "Articles",
    href: "#",
    description:
      "See some of our public research articles and learn more about our work.",
    icon: NewspaperIcon,
  },
  {
    name: "Team",
    href: "/team",
    description: "Take a look who has joined our amazing team",
    icon: UserGroupIcon,
  },
  {
    name: "Blog",
    href: "#",
    description:
      "Read our latest blog posts and learn more about our work and our team.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function ThankYou() {
  return (
    <div className="bg-white">
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            src="/images/thank-you-team.jpg"
            alt="Thank you image"
            fill
            priority
          />
          <div
            className="absolute inset-0 bg-gray-600 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Thank You
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Once we receive your email, we will review your request and get back
            soon.
          </p>
        </div>
      </div>

      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-slate-900 p-4 shadow-lg">
                  <link.icon
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-gray-600">{link.description}</p>
              </div>
              <div className="flex justify-start align-center pl-2 rounded-bl-2xl rounded-br-2xl bg-gray-50 p-4 md:px-8">
                <Link
                  href={link.href}
                  className="font-medium text-slate-900 hover:text-slate-600 transition ease-in-out duration-150"
                >
                  {link.name}
                  <span className="text-2xl" aria-hidden="true">
                    {" "}
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
