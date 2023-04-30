export interface IBookParams {
  params: {
    bookId: string;
  };
}

export interface IBook {
  _id: string;
  place: string;
  date: string;
  books: {
    name: "gyanGanga" | "jeeneKiRah";
    sell: number;
  }[];
}
