import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function loading() {
  return (
    <div className="w-full  flex flex-col items-center gap-3">
      <AiOutlineLoading3Quarters className="animate-spin" />
      Loading...
    </div>
  );
}