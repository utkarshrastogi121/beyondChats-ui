import type { Article } from "../types/article.type";
import { formatDate } from "../utils/formatDate";

export default function ArticleCard({
  article,
  variant = "original",
}: {
  article: Article;
  variant?: "original" | "updated";
}) {

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">
          {article.title}
        </h3>

        {variant === "original" && article.description && (
          <p className="text-sm text-gray-600 line-clamp-3">
            {article.description}
          </p>
        )}

        {variant === "updated" && article.rewrittenContent && (
          <div className="text-sm text-gray-700 whitespace-pre-line">
            {article.rewrittenContent}
          </div>
        )}

        <div className="flex justify-between items-center mt-4">
          <span className="text-xs text-gray-400">
            {formatDate(article.createdAt)}
          </span>

          {variant === "original" && article.link && (
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 text-sm font-medium"
            >
              Read →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
