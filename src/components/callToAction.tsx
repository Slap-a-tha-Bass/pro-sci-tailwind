import Link from "next/link";
import ArrowRight from "../app/icons/arrow-right";

export default function CallToAction({
  marginTop,
  marginBottom,
}: {
  marginTop?: string;
  marginBottom?: string;
}) {
  return (
    <div
      className={`mx-auto ${marginTop} ${marginBottom} bg-gray-900 pt-8 rounded-lg z-10 h-56 sm:max-w-max sm:max-h-max sm:h-60`}
    >
      <div className="flex flex-col justify-center items-center text-white px-8">
        <p className="mt-6  text-xl sm:text-3xl">
          Collaborate and join our team!
        </p>
        <Link
          href="/contact"
          aria-label="Contact"
          className="flex mx-auto mt-8 w-32 rounded-xl justify-center items-center font-bold text-lg p-2 bg-slate-900 shadow-white animate-pulse hover:bg-slate-900 hover:animate-none hover:shadow-whitelg"
        >
          Contact <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
