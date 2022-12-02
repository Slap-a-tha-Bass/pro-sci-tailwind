"use client";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BarIcon from "../app/icons/bar-icon";
import TwitterIcon from "../app/icons/twitter-icon";
import XIcon from "../app/icons/x-icon";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const navigation = [
    { name: "Home", href: "/", current: pathname === "/" ? true : false },
    {
      name: "About",
      href: "/about",
      current: pathname === "/about" ? true : false,
    },
    {
      name: "Team",
      href: "/team",
      current: pathname === "/team" ? true : false,
    },
    {
      name: "Alumni",
      href: "/alumni",
      current: pathname === "/alumni" ? true : false,
    },
    {
      name: "Gallery",
      href: "/gallery",
      current: pathname === "/gallery" ? true : false,
    },
    {
      name: "Research",
      href: "/research",
      current: pathname === "/research" ? true : false,
    },
    {
      name: "Education",
      href: "#",
      current: pathname === "/education" ? true : false,
    },
    {
      name: "Contact",
      href: "/contact",
      current: pathname === "/contact" ? true : false,
    },
  ];

  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-slate-900 to-slate-800"
      aria-label="Navbar"
    >
      {({ open }) => (
        <>
          <div className="mx-auto sm:max-w-5xl md:max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XIcon /> : <BarIcon />}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center md:justify-between justify-center md:mr-8 lg:mr-32">
                <Link href="/">
                  <Image
                    src="/pro-sci-logo.svg"
                    alt="logo"
                    priority
                    width={140}
                    height={53}
                  />
                </Link>

                <div className="hidden sm:ml-2 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-slate-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="https://twitter.com/DrYararFisher" target="_blank">
                <TwitterIcon />
              </Link>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
