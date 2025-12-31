import axios from "axios";
import type { Article } from "../types/article.type";

const apiBase = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

const apiPhase2 = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_PHASE2,
  timeout: 10000,
});

export const getOriginalArticles = async (): Promise<Article[]> => {
  const res = await apiBase.get("/articles");
  return res.data;
};

export const getUpdatedArticles = async (): Promise<Article[]> => {
  const res = await apiPhase2.get("/api/updated-articles");

  console.log("Updated :",res)
  return res.data;
};
