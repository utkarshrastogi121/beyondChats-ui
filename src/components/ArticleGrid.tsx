import type { Article } from "../types/article.type";
import ArticleCard from "./ArticleCard";

export default function ArticlesGrid({
  articles,
  variant = "original",
}: {
  articles?: Article[];
  variant?: "original" | "updated";
}) {
  if (!Array.isArray(articles)) return null;

  return (
    <div
      className={
        variant === "updated"
          ? "flex flex-col gap-6"
          : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      }
    >
      {articles.map((a) => (
        <ArticleCard
          key={a._id}
          article={a}
          variant={variant}
        />
      ))}
    </div>
  );
}
