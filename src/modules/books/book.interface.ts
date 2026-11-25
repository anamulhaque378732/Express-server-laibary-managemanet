export interface IBook {
  id: number;
  title: string;
  author: string;
  description?: string;
  isbn: string;
  category: string;
  total_copies: number;
  available_copies: number;
  created_at?: Date;
}
