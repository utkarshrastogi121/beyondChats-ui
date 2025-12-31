import { useEffect, useState } from "react";
import { getOriginalArticles, getUpdatedArticles } from "../api/articles.api";
import type { Article } from "../types/article.type";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import EmptyState from "../components/EmptyState";
import ArticlesTabs from "../components/ArticleTabs";
import ArticlesGrid from "../components/ArticleGrid";

export default function Home() {
  const [active, setActive] = useState<"original" | "updated">("original");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(false);
      try {
        const data =
          active === "original"
            ? await getOriginalArticles()
            : await getUpdatedArticles();
        setArticles(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [active]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <ArticlesTabs active={active} onChange={setActive} />

      {loading && <Loader />}
      {error && <ErrorState />}
      {!loading && !error && articles.length === 0 && <EmptyState />}
      {!loading && !error && articles.length > 0 && (
        <ArticlesGrid articles={articles} variant={active} />
      )}
    </section>
  );
}
