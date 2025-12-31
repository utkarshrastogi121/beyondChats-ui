import type { Article } from "../types/article.type";
import ArticleCard from "./ArticleCard";

export default function ArticlesGrid({ articles }: { articles?: Article[] }) {
  if (!Array.isArray(articles)) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((a) => (
        <ArticleCard key={a._id} article={a} />
      ))}
    </div>
  );
}
