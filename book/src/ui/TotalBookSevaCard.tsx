import React from "react";

interface Props {
  gyanGanga?: number;
  jeeneKiRah?: number;
}

export default function TotalBookSevaCard({ gyanGanga, jeeneKiRah }: Props) {
  return (
    <div className="bg-blue-500 p-5 flex flex-col text-white rounded">
      <h1 className="text-md pb-1 font-semibold">Total Book Seva Data</h1>
      <span>
        Your Gyan Ganga Seva :{" "}
        <span className="font-semibold">{gyanGanga}</span>
      </span>
      <span>
        Your Jeene Ki Rah Seva :{" "}
        <span className="font-semibold">{jeeneKiRah}</span>
      </span>
      <span className="font-semibold">
        Your Total Seva :{" "}
        <span className="font-semibold">
          {(gyanGanga || 0) + (jeeneKiRah || 0)}
        </span>
      </span>
    </div>
  );
}
