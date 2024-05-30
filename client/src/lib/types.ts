export type Transaction = {
  order: number;
  date: string;
  total: number;
  status: string;
  //   why doesnt work with union?
  //   status: "Completed" | "In Progress" | "Cancelled";
};

export type Book = {
  title: string;
  author: string;
  image: string;
  price: number;
  rating: number;
};
