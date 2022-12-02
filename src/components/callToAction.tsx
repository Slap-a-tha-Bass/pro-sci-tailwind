import Link from "next/link";
import ArrowLongRight from "../app/icons/arrow-long-right";

export default function CallToAction({
  marginTop,
  marginBottom,
}: {
  marginTop?: string;
  marginBottom?: string;
}) {
  return (
    <div
      className={`mx-auto ${marginTop} ${marginBottom} bg-gray-900 pt-8 rounded-lg z-10 max-w-xs h-56 sm:max-w-lg sm:h-60`}
    >
      <div className="flex flex-col text-xl sm:text-2xl text-white px-8">
        <p>Interested in collaborating or joining the team?</p>
        <Link
          href="/contact"
          className="flex mx-auto mt-8 w-32 rounded-xl justify-center items-center text-4xl sm:text-5xl p-2 bg-sky-700 shadow-white animate-pulse hover:bg-sky-900 hover:animate-none hover:shadow-whitelg"
        >
          <ArrowLongRight />
        </Link>
      </div>
    </div>
  );
}
