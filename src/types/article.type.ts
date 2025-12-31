export interface Article {
  id: number;
  title: string;
  description: string;
  image_url?: string | null;
  source_url: string;
  published_at: string;
}
