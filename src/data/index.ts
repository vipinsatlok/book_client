import { IBook } from "@/types/books";
import { IList } from "@/types/common";
import { IUser } from "@/types/users";

export const listData: IList[] = [
  {
    _id: "1",
    name: "Banthara",
    subname: "21-01-2002",
    type: "books",
    count: 0,
  },
  {
    _id: "2",
    name: "Banthara",
    subname: "21-01-2002",
    type: "books",
    count: 0,
  },
  {
    _id: "3",
    name: "Banthara",
    subname: "21-01-2002",
    type: "books",
    count: 0,
  },
];

export const bookData: IBook[] = [
  {
    _id: "1",
    place: "Banthara",
    date: "31-02-2001",
    books: [
      { sell: 3, name: "gyanGanga" },
      { sell: 3, name: "jeeneKiRah" },
    ],
  },
  {
    _id: "1",
    place: "Banthara",
    date: "31-02-2001",
    books: [
      { sell: 3, name: "gyanGanga" },
      { sell: 3, name: "jeeneKiRah" },
    ],
  },
  {
    _id: "1",
    place: "Banthara",
    date: "31-02-2001",
    books: [{ sell: 3, name: "gyanGanga" }],
  },
];

export const userData: IUser[] = [
  {
    _id: "4343",
    name: "Vipin",
    number: "765202883",
    password: "8887",
    gyanGanga: 0,
    jeeneKiRah: 87,
    total: 7,
  },
  {
    _id: "4343",
    name: "Vipin",
    number: "765202883",
    password: "8887",
    gyanGanga: 0,
    jeeneKiRah: 87,
    total: 7,
  },
  {
    _id: "4343",
    name: "Vipin",
    number: "765202883",
    password: "8887",
    gyanGanga: 0,
    jeeneKiRah: 87,
    total: 7,
  },
];
