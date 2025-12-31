import axios from "axios";
import type { Article } from "../types/article.type"

console.log("API BASE URL:", import.meta.env.VITE_API_BASE_URL);

const api = axios.create({
    
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000
});
console.log("API BASE URL:", import.meta.env.VITE_API_BASE_URL);

export const getOriginalArticles = async (): Promise<Article[]> => {
  const res = await api.get("/articles");
  console.log("Original Articles: ", res);
  return res.data.data ?? res.data;
};

export const getUpdatedArticles = async (): Promise<Article[]> => {
  const res = await api.get("api/updated-articles");
  return res.data.data ?? res.data;
};
