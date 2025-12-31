import axios from "axios";
import type { Article } from "../types/article.type"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
});

export const getOriginalArticles = async (): Promise<Article[]> => {
  const res = await api.get("/articles");
  return res.data.data ?? res.data;
};

export const getUpdatedArticles = async (): Promise<Article[]> => {
  const res = await api.get("/articles/updated");
  return res.data.data ?? res.data;
};
