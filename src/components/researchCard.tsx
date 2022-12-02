import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "../app/icons/arrow-up-right";

interface ResearchCardProps {
  title: string;
  altLink: string;
  link: string;
  authors: string[];
  journal: string;
  pmid: number;
  src: string;
}
export default function ResearchCard({
  title,
  link,
  altLink,
  authors,
  journal,
  pmid,
  src,
}: ResearchCardProps) {
  return (
    <div className="flex justify-center items-center p-2 mx-auto">
      <div className="max-w-xl max-h-max bg-gray-900 p-8">
        <h3 className="mb-2">{title}</h3>
        {authors.map((author, index) =>
          index === authors.length - 1 ? (
            <span key={index}>{author}</span>
          ) : (
            <span key={index}>{author}, </span>
          )
        )}
        <Image
          src={src}
          alt={title}
          width={550}
          height={300}
          className="rounded-lg mt-2"
        />
        <h4 className="mt-8 mb-2">{journal}</h4>
        <h4>PMID: {pmid}</h4>
        <div className="flex">
          <Link
            className="flex mx-auto mt-8 w-32 rounded-xl justify-center items-center text-sm sm:text-md p-2 bg-sky-700 shadow-white hover:bg-sky-900 hover:shadow-whitelg"
            href={link}
            target="_blank"
          >
            View Article <ArrowUpRight />
          </Link>
          <Link
            className="flex mx-auto mt-8 w-32 rounded-xl justify-center items-center text-sm sm:text-md p-2 bg-sky-700 shadow-white hover:bg-sky-900 hover:shadow-whitelg"
            href={altLink}
            target="_blank"
          >
            Pubmed Link <ArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
