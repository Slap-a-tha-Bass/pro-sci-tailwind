import CallToAction from "../../components/callToAction";
import ResearchCard from "../../components/researchCard";
import { articles } from "../../lib/articles";
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
      <CallToAction marginTop="mt-8" marginBottom="mb-4" />
    </div>
  );
}
