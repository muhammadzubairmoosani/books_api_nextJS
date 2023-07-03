export interface Books {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  price: number;
  rating: number;
  reviews: number;
  is_liked: boolean;
}

export interface Book {
  books: Books[] | null;
  loading: boolean;
  error: string | null;
}
