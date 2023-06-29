export type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path?: string;
};

export type Query = String | undefined;
export type Sort = "popular" | "top_rated" | "now_playing" | "upcoming";
