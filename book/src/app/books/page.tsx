import Ul from "@/ui/Ul";
import List from "@/ui/List";
import React from "react";
import { listData } from "@/data";

export const metadata = {
  title: "Books Data",
};

export default function Books() {
  return (
    <Ul>
      {listData.map((item, index) => (
        <List index={index} {...item} />
      ))}
    </Ul>
  );
}
