import { BookList } from "@/types/books";
import { IList } from "@/types/common";
import Link from "next/link";
import React from "react";

export default function List({
  name,
  type,
  _id,
  subname,
  count,
  index,
}: IList) {
  return (
    <li>
      <Link href={`/${type}/${_id}`} className="gap-3 items-center flex w-full">
        <span className="w-10 h-10 text-white rounded-full bg-orange-600 flex items-center justify-center">
          {(index || 0) + 1}
        </span>
        <div className="flex-1 flex flex-col">
          <span className="font-semibold">{name}</span>
          <span className="text-xs">{subname}</span>
        </div>
        <span className="text-xl font-semibold">{count}</span>
      </Link>
    </li>
  );
}
