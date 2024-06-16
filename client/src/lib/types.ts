export interface User {
  fullName: string;
  email: string;
  token: string;
}

export interface ProductInCart extends Book {
  book: Book;
  quantity: number;
}

export interface Transaction {
  book: Book;
  quantity: number;
  subtotal: number;
}

export interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  imageUrls: string[];
  genres: string[];
  sku: string;
  stockQuantity: number;
  costPrice: number;
  salePrice: number;
  discount: number;
  tags: string[];
  createdBy: string;
  __v?: number;
  createdAt: Date;
  updatedAt: Date;
  sales: number;
}

export interface Order {
  recipientProfile: RecipientProfile;
  recipientAddress: RecipientAddress;
  paymentMethod: PaymentMethod;
  _id: string;
  orderDate: Date;
  currentStatus: string;
  items: Item[];
  total: number;
  timelineStatus?: unknown[];
  __v?: number;
}

export interface Item {
  book: Book;
  quantity: number;
  subtotal: number;
}

export interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  imageUrls: string[];
  genres: string[];
  sku: string;
  stockQuantity: number;
  costPrice: number;
  salePrice: number;
  discount: number;
  tags: string[];
  createdBy: string;
  __v?: number;
  createdAt: Date;
  updatedAt: Date;
  sales: number;
}

export interface PaymentMethod {
  type: string;
  bankName: string;
  cardHolderName: string;
}

export interface RecipientAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface RecipientProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface IHome {
  badge: Badge;
  newArrivals: Book[];
  hotDealsBooks: Book[];
  trendingBooks: Book[];
  genres: string[];
  bestSellingBooks: Book[];
  exploreOurBooks: Book[];
}

export interface Badge {
  wishlists: number;
  carts: number;
}

// export interface BestSellingBook {
//   _id: string;
//   title: string;
//   author: string;
//   description: string;
//   imageUrls: string[];
//   genres: string[];
//   sku: string;
//   salePrice: number;
//   discount: number;
//   tags: string[];
//   __v?: number;
// }
