import Ul from "@/ui/Ul";
import List from "@/ui/List";
import React from "react";
import { listData, userData } from "@/data";

export const metadata = {
  title: "Users Data",
};

export default function Books() {
  return (
    <Ul>
      {userData.map((item, index) => (
        <List
          name={item.name}
          subname={item.number + " - " + item.password}
          index={index}
          count={item.total}
          _id={item._id}
          type="users"
        />
      ))}
    </Ul>
  );
}
