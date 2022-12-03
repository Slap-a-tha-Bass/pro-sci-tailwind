import Image from "next/image";
import CallToAction from "../components/callToAction";

export default function HomePage() {
  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);
  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
  return (
    <main className="relative grid grid-cols-1 h-full">
      <div className="flex justify-center items-start pt-4 px-4 sm:px-8">
        <div className="p-8 sm:p-16">
          <ul className="text-xl sm:text-3xl lg:text-4xl text-white leading-relaxed">
            <li>We are here to make</li>
            <li className="pt-2 ml-4">
              <span className="font-semibold drop-shadow-white font-header">
                pro
              </span>
              gress in{" "}
              <span className="font-semibold drop-shadow-white font-header">
                SCI
              </span>{" "}
              research,
            </li>
            <li className="pt-2 ml-4">
              <span className="font-semibold drop-shadow-white font-header">
                pro
              </span>
              pose good ideas,
            </li>
            <li className="pt-2 ml-4">
              <span className="font-semibold drop-shadow-white font-header">
                pro
              </span>
              vide solutions,
            </li>
            <li className="pt-2 ml-4">
              <span className="font-semibold drop-shadow-white font-header">
                pro
              </span>
              mote impactful{" "}
              <span className="font-semibold drop-shadow-white font-header">
                SCI
              </span>
              ence,
            </li>
            <li className="pt-2 ml-4">
              <span className="font-semibold drop-shadow-white font-header">
                pro
              </span>
              hibit misinformation,
            </li>
            <li className="pt-2 ml-4">
              <span className="font-semibold drop-shadow-white font-header">
                pro
              </span>
              tect{" "}
              <span className="font-semibold drop-shadow-white font-header">
                SCI
              </span>
              entist, and
            </li>
            <li className="pt-2 ml-4">
              <span className="font-semibold drop-shadow-white font-header">
                pro
              </span>
              long the lives of individuals with{" "}
              <span className="font-semibold drop-shadow-white font-header">
                SCI
              </span>
              .
            </li>
          </ul>
        </div>
      </div>
      <CallToAction marginTop="-mt-8" />
      <Image
        className="absolute sm:py-2 h-120 sm:h-full w-screen object-contain opacity-20 sm:opacity-10"
        src="/images/electric.png"
        alt="Electric blue"
        priority
        width={1920}
        height={1080}
        placeholder="blur"
        blurDataURL={rgbDataURL(15, 23, 42)}
      />
    </main>
  );
}
