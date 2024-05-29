export type Transaction = {
  order: number;
  date: string;
  total: number;
  status: string;
  //   why doesnt work with union?
  //   status: "Completed" | "In Progress" | "Cancelled";
};
