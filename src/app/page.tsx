import Image from "next/image";

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
    <main className="relative">
      <Image
        className="sm:py-8 h-60 sm:h-screen w-screen object-contain"
        src="/images/electric.svg"
        alt="Electric blue"
        width={1920}
        height={1080}
        placeholder="blur"
        blurDataURL={rgbDataURL(15, 23, 42)}
      />
    </main>
  );
}
