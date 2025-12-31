export interface Reference {
  _id: string;
  title: string;
  link: string;
}

export interface Article {
  _id: string;
  title: string;

  description?: string;
  link?: string;

  rewrittenContent?: string;
  references?: Reference[];
  originalArticleId?: string;

  createdAt: string;
  updatedAt: string;
}
