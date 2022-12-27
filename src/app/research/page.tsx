import Link from "next/link";
import CallToAction from "../../components/callToAction";
import ResearchCard from "../../components/researchCard";
import { articles } from "../../lib/articles";
import ArrowUpRight from "../icons/arrow-up-right";
export default function Research() {
  return (
    <div>
      <div className="w-screen text-white">
        {articles.map((article, index) => (
          <ResearchCard
            key={index}
            title={article.title}
            src={`/images/articles/${article.pmid}.jpg`}
            altLink={article.altLink}
            link={article.link}
            authors={article.authors}
            journal={article.journal}
            pmid={article.pmid}
          />
        ))}
      </div>
      <div className="flex justify-center py-5 text-white bg-gray-900 max-w-xl mx-auto mt-4 rounded-lg">
        <div className="flex flex-col">
          <p>See Complete List of Published Work</p>
          <Link
            href="https://www.ncbi.nlm.nih.gov/myncbi/12Gt-u0x4-t5d/bibliography/public"
            target="_blank"
            className="flex items-center justify-center max-w-max font-bold shadow-white hover:shadow-whitelg rounded-lg py-2 px-4 mx-auto mt-4"
          >
            All Publications <ArrowUpRight />
          </Link>
        </div>
      </div>
      <CallToAction marginTop="mt-8" marginBottom="mb-4" />
    </div>
  );
}
