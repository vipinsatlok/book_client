import { userData } from "@/data";
import { IUser, IUserParams } from "@/types/users";
import TotalBookSevaCard from "@/ui/TotalBookSevaCard";
import React from "react";

async function getData(id: string): Promise<IUser> {
  return userData.find((item) => item._id === id) || userData[1];
}

export async function generateMetadata({ params }: IUserParams) {
  const data: IUser = await getData(params.userId);
  return {
    title: "User : " + data.name,
  };
}

export default async function Book({ params }: IUserParams) {
  const data = await getData(params.userId);
  return (
    <div>
      <div className="mb-4">
        <h1 className="text-md font-semibold">{data.name}</h1>
        <h2 className="text-sm">{data.number + " - " + data.password}</h2>
      </div>
      <TotalBookSevaCard
        gyanGanga={data.gyanGanga}
        jeeneKiRah={data.jeeneKiRah}
      />
    </div>
  );
}
