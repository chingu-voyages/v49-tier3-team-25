export type Transaction = {
  order: number;
  date: string;
  total: number;
  status: string;
  //   why doesnt work with union?
  //   status: "Completed" | "In Progress" | "Cancelled";
};

export interface Book {
  title: string;
  author: string;
  description: string;
  imageUrls: string[];
  isbn: string;
  publisher: Publisher;
  published_date: string;
  language: string;
  pages: number;
  genres: string[];
  tags: string[];
  formats: Format[];
  _id: string;
}

export interface Format {
  format: string;
  price: number;
  discount: number;
  quantity: number;
}

export interface Publisher {
  name: string;
  location: string;
}

export interface User {
  fullName: string;
  email: string;
  token: string;
}

export interface ProductInCart extends Book {
  book: Book;
  quantity: number;
}
