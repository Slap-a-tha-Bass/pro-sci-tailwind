import Link from "next/link";
export default async function PDFPage() {
  const articles = [
    {
      id: 1,
      title: "Ketogenic regimens for acute neurotraumatic events",
      altLink: "https://pubmed.ncbi.nlm.nih.gov/33445134",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0958166920301944?via%3Dihub",
    },
    {
      id: 2,
      title:
        "Heightened TWEAK-NF-κB signaling and inflammation-associated fibrosis in paralyzed muscles of men with chronic spinal cord injury",
      altLink: "https://pubmed.ncbi.nlm.nih.gov/26931128",
      link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4888537",
    },
  ];
  console.log("articles", articles);
  return (
    <div>
      <div className="hidden sm:block sm:w-screen sm:h-screen text-white">
        {articles.map((article) => (
          <div key={article.id}>
            <Link href={article.link} target="_blank">
              <p>{article.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
