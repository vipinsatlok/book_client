import { bookData, listData } from "@/data";
import { IBook, IBookParams } from "@/types/books";
import TotalBookSevaCard from "@/ui/TotalBookSevaCard";
import { getfilterBookTotal } from "@/utils/getTotal";
import React from "react";

async function getData(id: string): Promise<IBook> {
  return bookData.find((item) => item._id === id) || bookData[1];
}

export async function generateMetadata({ params }: IBookParams) {
  const data: IBook = await getData(params.bookId);
  return {
    title: "Book : " + data.place,
  };
}

export default async function Book({ params }: IBookParams) {
  const data = await getData(params.bookId);
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-md font-semibold">{data.place}</h1>
        <h2 className="text-sm">{data.date}</h2>
      </div>
      <TotalBookSevaCard
        gyanGanga={getfilterBookTotal(data.books, "gyanGanga")}
        jeeneKiRah={getfilterBookTotal(data.books, "jeeneKiRah")}
      />
    </div>
  );
}
