import ResearchCard from "../../components/researchCard";
import { articles } from "../../lib/articles";
export default async function PDFPage() {
  return (
    <div>
      <div className="w-screen text-white">
        {articles.map((article, index) => (
          <ResearchCard
            key={index}
            title={article.title}
            src={`/images/articles/article-${index + 1}.jpg`}
            altLink={article.altLink}
            link={article.link}
            authors={article.authors}
            journal={article.journal}
            pmid={article.pmid}
          />
        ))}
      </div>
    </div>
  );
}
